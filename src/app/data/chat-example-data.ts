/* tslint:disable:max-line-length */
import {User} from '../user/user.model';
import {Thread} from '../thread/thread.model';
import {Message} from '../message/message.model';
import {MessagesService} from '../message/messages.service';
import {ThreadsService} from '../thread/threads.service';
import {UsersService} from '../user/users.service';
import * as moment from 'moment';

// the person using the app us Juliet
const me: User = new User('Max', 'assets/images/avatars/male-avatar-1.png');
const hajime: User = new User('HajimeBot', 'assets/images/avatars/robot.png');

const tHajime: Thread = new Thread('tHajime', hajime.name, hajime.avatarSrc);

const initialMessages: Array<Message> = [];

export class ChatExampleData {
  static init(messagesService: MessagesService,
              threadsService: ThreadsService,
              UsersService: UsersService): void {

    messagesService.messages.subscribe(() => ({}));

    // set "Juliet" as the current user
    UsersService.setCurrentUser(me);

    // create the initial messages
    initialMessages.map((message: Message) => messagesService.addMessage(message));

    threadsService.setCurrentThread(tHajime);

  }
}
