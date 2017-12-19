import { uuid } from "../../../../shared/util/uuid";

/**
 * A User represents an agent that sends messages
 */
export class User {
  id: string;

  constructor(public name: string,) {
    this.id = uuid();
  }
}
