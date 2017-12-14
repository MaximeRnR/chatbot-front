import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChatMessageComponent } from "./chat-message/chat-message.component";
import { ChatWindowComponent } from "./chat-window/chat-window.component";
import { FromNowPipe } from "../../shared/pipes/from-now.pipe";
import { ChatBoxComponent } from "./chat-box.component";

import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [
    FromNowPipe,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatBoxComponent
  ],
  exports: [
    ChatBoxComponent
  ]
})
export class ChatBoxModule {
}
