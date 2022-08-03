import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskSchedulingService {
  logger = new Logger(TaskSchedulingService.name);
//TODO: 배송 지연 처리, 구매확정 처리 등

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async func() {
    //
  }
}
