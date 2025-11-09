import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
    logMessage(): object {
        return { name: 'John', age: 24 };
    }
}
