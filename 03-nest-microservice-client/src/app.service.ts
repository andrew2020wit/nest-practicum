import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  send1(): Observable<Array<number>> {
    const pattern = { cmd: 'mapx2' };
    const payload = [3, 4, 5];
    return this.client.send<Array<number>>(pattern, payload);
  }
}
