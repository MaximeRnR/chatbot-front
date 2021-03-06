import { Component, Input, OnInit } from "@angular/core";

import { UsersService } from "../shared/user/service/users.service";

import { Message } from "../shared/message/model/message.model";
import { User } from "../shared/user/model/user.model";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  animations: [
    trigger('messageState', [
      state('void', style({transform: 'translateY(20%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate(100, ))
    ])
  ]
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public UsersService: UsersService) {
  }

  ngOnInit(): void {
    this.UsersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
          if (this.message.author && user) {
            this.incoming = this.message.author.id !== user.id;
          }
        });
  }
}
