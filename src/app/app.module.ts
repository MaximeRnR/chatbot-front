import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";



import { MessagesService } from "./services/message/messages.service";
import { UsersService } from "./services/user/users.service";
import { ChatHeadersModule } from "./components/chat-headers/chat-headers.module";
import {ChatBoxModule} from "./components/chat-box/chat-box.module";

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
    ChatBoxModule
  ],
  bootstrap: [AppComponent],
  providers: [MessagesService, UsersService]
})
export class AppModule { }
