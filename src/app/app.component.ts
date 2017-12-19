import { Component } from "@angular/core";

import { UsersService } from "./chat-box/shared/user/service/users.service";
import { MessagesService } from "./chat-box/shared/message/service/messages.service";
import { User } from "./chat-box/shared/user/model/user.model";

const me: User = new User('Max');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public messagesService: MessagesService,
              public usersService: UsersService) {

    messagesService.messages.subscribe(() => ({}));

    usersService.setCurrentUser(me);
  }
}
