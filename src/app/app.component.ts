import { Component } from "@angular/core";

import { UsersService } from "./services/user/users.service";
import { MessagesService } from "./services/message/messages.service";
import { User } from "./core/model/user.model";

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
