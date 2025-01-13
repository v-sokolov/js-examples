import {FlyweightFactory} from "../flyweight-factory";
import {generateIntrinsicState, generateKey, IAvatar, IBaseContact, IContact} from "./";

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

  public listAvatars() {
    return Array.from(this.avatarsCache.getFlyweights().values());
  }

  public printCurrentMetrics() {
    console.log('Unique Avatars Quantity:', this.listAvatars().length);
    console.log('Existed Avatars:', this.listAvatars());
    console.log('Contacts:', this.listContacts());
  }

  private getContactAvatar(contact: IBaseContact): IAvatar {
    return this.avatarsCache.getFlyweight(contact);
  }
}
