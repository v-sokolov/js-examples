export interface IBaseContact {
  name: string;
  phone: string;
}

export interface IContact extends IBaseContact {
  avatar: IAvatar;
}

export interface IAvatar {
  initialLetter: string;
  color: string;
}
