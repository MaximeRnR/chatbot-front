import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MessagesService } from "./chat-box/shared/message/service/messages.service";
import { UsersService } from "./chat-box/shared/user/service/users.service";

import { ChatHeadersModule } from "./chat-headers/chat-headers.module";
import { ChatBoxModule } from "./chat-box/chat-box.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChatHeadersModule,
    ChatBoxModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
