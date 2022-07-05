import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskSchedulingService {
  logger = new Logger(TaskSchedulingService.name);

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async func() {
    //
  }
}
