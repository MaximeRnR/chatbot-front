import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Message } from "../model/message.model";
import { Headers, Http } from "@angular/http";

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {

  private hajimeUrl = 'http://localhost:8091/api/chatbot';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  // a stream that publishes new messages only once
  newMessages: Subject<Message> = new Subject<Message>();

  // `messages` is a stream that emits an array of the most up to date messages
  messages: Observable<Message[]>;

  // `updates` receives _operations_ to be applied to our `messages`
  // it's a way we can perform changes on *all* messages (that are currently
  // stored in `messages`)
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Message> = new Subject<Message>();

  constructor(private http: Http) {
    this.messages = this.updates
      // watch the updates and accumulate operations on the messages
      .scan((messages: Message[],
             operation: IMessagesOperation) => {
               return operation(messages);
             },
            initialMessages)
      // make sure we can share the most recent list of messages across anyone
      // who's interested in subscribing and cache the last known list of
      // messages
      .publishReplay(1)
      .refCount();

    // `create` takes a Message and then puts an operation (the inner function)
    // on the `updates` stream to add the Message to the list of messages.
    //
    // That is, for each item that gets added to `create` (by using `next`)
    // this stream emits a concat operation function.
    //
    // Next we subscribe `this.updates` to listen to this stream, which means
    // that it will receive each operation that is created
    //
    // Note that it would be perfectly acceptable to simply modify the
    // "addMessage" function below to simply add the inner operation function to
    // the update stream directly and get rid of this extra action stream
    // entirely. The pros are that it is potentially clearer. The cons are that
    // the stream is no longer composable.
    this.create
      .map( function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);

    this.newMessages
      .subscribe(this.create);
  }

  // an imperative function call to this action stream
  addMessage(message: Message): void {
    this.newMessages.next(message)
  }

  getBotMessage(message: Message): Promise<Message> {
    return this.http
      .post(this.hajimeUrl+'/send', JSON.stringify(message),
        {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message)

  }
}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
];
