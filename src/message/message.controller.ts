import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
    constructor(private readonly message: MessageService) {}

    @Get('/message')
    getMessage() {
        return this.message.logMessage();
    }
}
