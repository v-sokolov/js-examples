interface User {
  name: string;
  email: string;
  role: string;
}

interface IUserService {
  getUser(email: string): User | undefined;
}

export class UserService implements IUserService {
  private readonly users: User[];

  constructor() {
    this.users = [{
      name: 'admin admin',
      email: 'admin@gmail.com',
      role: 'ADMIN',
    }];
  }

  getUser(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}
