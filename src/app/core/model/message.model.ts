import { User } from './user.model';
import { uuid } from '../../util/uuid';

/**
 * Message represents one message being sent in a Thread
 */
 export class Message {
   id: string;
   sentAt: Date;
   isRead: boolean;
   author: User;
   text: string;

   constructor(obj?: any) {
     this.id              = obj && obj.id              || uuid();
     this.isRead          = obj && obj.isRead          || false;
     this.sentAt          = obj && obj.sentAt          || new Date();
     this.author          = obj && obj.author          || null;
     this.text            = obj && obj.text            || null;
   }
 }
