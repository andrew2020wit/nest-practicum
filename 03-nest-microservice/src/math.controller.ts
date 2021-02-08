import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {
  @MessagePattern({ cmd: 'mapx2' })
  accumulate(data: number[]): number[] {
    return (data || []).map((x) => x * x);
  }
}
