import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! It is working as you see...';
  }

  getStatus(): string {
    return 'server is OK';
  }
}
