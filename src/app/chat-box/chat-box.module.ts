import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChatMessageComponent } from "./chat-message/chat-message.component";
import { ChatWindowComponent } from "./chat-window/chat-window.component";
import { FromNowPipe } from "../shared/pipes/from-now.pipe";
import { ChatBoxComponent } from "./chat-box.component";

import { MatButtonModule } from "@angular/material/button";
import { MessagesService } from "./shared/message/service/messages.service";
import { UsersService } from "./shared/user/service/users.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    ChatWindowComponent,
    ChatMessageComponent,
    ChatBoxComponent
  ],
  providers: [MessagesService, UsersService],
  exports: [
    ChatBoxComponent
  ]
})
export class ChatBoxModule {
}
