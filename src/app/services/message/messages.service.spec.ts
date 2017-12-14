import { MessagesService } from './messages.service';

import { Message } from '../../core/model/message.model';
import { User } from '../../core/model/user.model';
import { Headers, Http } from '@angular/http';

describe('MessagesService', () => {
  it('should test', () => {
    var http: Http
    const user: User = new User('Nate', '');
    const m1: Message = new Message({
      author: user,
      text: 'Hi!',
    });

    const m2: Message = new Message({
      author: user,
      text: 'Bye!',
    });

    const messagesService: MessagesService = new MessagesService(http);

    // listen to each message indivdually as it comes in
    messagesService.newMessages
      .subscribe( (message: Message) => {
        console.log('=> newMessages: ' + message.text);
      });

    // listen to the stream of most current messages
    messagesService.messages
      .subscribe( (messages: Message[]) => {
        console.log('=> messages: ' + messages.length);
      });

    messagesService.addMessage(m1);
    messagesService.addMessage(m2);

    // => messages: 1
    // => newMessages: Hi!
    // => messages: 2
    // => newMessages: Bye!
  });


});
