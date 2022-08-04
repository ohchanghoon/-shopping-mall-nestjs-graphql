import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cache')
  async getCache(): Promise<string> {
    const savedTime = await this.cacheManager.get<number>('time');
    if (savedTime) {
      return 'saved time : ' + savedTime;
    }

    const now = new Date().getTime();
    await this.cacheManager.set<number>('time', now);
    return 'save new time : ' + now;
  }
}
