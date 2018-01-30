import { Component, ElementRef, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../shared/user/model/user.model";
import { UsersService } from "../shared/user/service/users.service";
import { Message } from "../shared/message/model/message.model";
import { MessagesService } from "../shared/message/service/messages.service";

import { animate, state, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  animations: [
    trigger('windowState', [
      state('true', style({transform: 'translateX(0)'})),
      transition('void => true', [
        style({transform: 'translateY(150%)'}),
        animate('0.66s cubic-bezier(0,0,0.31,1)')
      ]),
      transition('true => void', [
        animate('0.66s cubic-bezier(0,0,0.31,1)', style({transform: 'translateX(120%) '}), )
      ])
    ]),
    trigger('gifState', [
      state('true', style({opacity: 1})),
      transition('void => true', [
        style({ opacity: 0}),
        animate(100)
      ]),
      transition('true => void', [
        animate(100, style({ opacity: 1}))
      ])
    ])
  ]
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  draftMessage: Message;
  currentUser: User;
  opened: boolean;
  waitingGif = false;

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
    if (m.text !== null && m.text.trim() !== "") {
      m.author = this.currentUser;
      m.isRead = false;
      this.messagesService.addMessage(m);
      this.waitingGif = true;
      this.messagesService.getBotMessage(m)
        .then(res => {
          this.messagesService.addMessage(res)
          this.waitingGif = false
        })
        .catch(res => {
          let errorMsg: Message = {
            id: null, sentAt: new Date, error: true, isRead: false,
            author: {id: null, name: "DebugBot"},
            text: "Désole HajimeBot semble être parti en vacances, Recontact le plus tard !"
          }
          this.messagesService.addMessage(errorMsg)
          this.waitingGif = false
        })
      this.draftMessage = new Message();
    }
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    if (this.opened)
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
