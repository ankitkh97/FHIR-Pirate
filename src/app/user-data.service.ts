import { User } from './user-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserDataService implements InMemoryDbService {
  createDb() {

// tslint:disable-next-line: prefer-const
    let users: User[] = [
// tslint:disable-next-line: max-line-length
      { id: 1, name: 'Eric William', phone: '0122978978', date: '7/29/2019', time: '10 AM', department: 'Cardiology', reason: 'Not well', insurance: 'Yes' }
    ];

    return { users };

  }

  constructor() { }

}
