import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user.model';
import { UsersService } from '../user/users.service';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('windowState', [
      state('true', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  draftMessage: Message;
  currentUser: User;
  opened: boolean;

  constructor(public messagesService: MessagesService,
              public UsersService: UsersService,
              public el: ElementRef) {
  }

  ngOnInit(): void {
    this.opened = false;

    this.messages = this.messagesService.messages

    this.draftMessage = new Message();

    this.UsersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.messages
      .subscribe(
        (messages: Array<Message>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.isRead = true;
    console.log(m)
    this.messagesService.addMessage(m);
    this.messagesService.getBotMessage(m);
    this.draftMessage = new Message();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    if(this.opened)
      scrollPane.scrollTop = scrollPane.scrollHeight;
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  openWindow(): void {
    this.opened = !this.opened
  }



}
