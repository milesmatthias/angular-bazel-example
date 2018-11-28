import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
			{ id: 14, name: 'Change dishes' },
			{ id: 15, name: 'Get groceries' },
			{ id: 16, name: 'Wash car' },
			{ id: 17, name: 'Take out trash' },
    ];
    return {todos};
  }
}

