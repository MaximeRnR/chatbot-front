import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatMenuBarComponent } from "./chat-menu-bar/chat-menu-bar.component";
import { ChatHeaderBarComponent } from "./chat-header-bar/chat-header-bar.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ChatHeadersComponent } from "./chat-headers.component";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    ChatHeaderBarComponent,
    ChatMenuBarComponent,
    ChatHeadersComponent
  ],
  exports: [
    ChatHeadersComponent
  ]
})
export class ChatHeadersModule {
}
