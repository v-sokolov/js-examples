import {FlyweightFactory} from "../flyweight-factory/flyweight-factory.impl";
import {IAvatar, IBaseContact, IContact} from "./interfaces";
import {generateIntrinsicState, generateKey} from "./utils";

export class ContactsBook {
  contacts: Map<IContact['name'] | IContact['phone'], IContact> = new Map();
  private avatarsCache = new FlyweightFactory<string, IBaseContact, IAvatar>({
    generateKey,
    generateIntrinsicState,
  });

  public addContact(initialContactInfo: IBaseContact) {
    this.contacts.set(initialContactInfo.name, {
      ...initialContactInfo,
      avatar: this.getContactAvatar(initialContactInfo),
    });
  }

  public getContact(identifier: IContact['name'] | IContact['phone']): IContact | undefined {
    return this.contacts.get(identifier);
  }

  public listContacts() {
    return Array.from(this.contacts.values());
  }

  private getContactAvatar(contact: IBaseContact): IAvatar {
    return this.avatarsCache.getFlyweight(contact);
  }
}
