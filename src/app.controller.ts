import { CACHE_MANAGER, Controller, Get, Inject, Query } from '@nestjs/common';
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
  async getCache(@Query('id') id: string): Promise<string> {
    const savedTime = await this.cacheManager.get(id);
    if (savedTime) {
      return 'saved time : ' + savedTime;
    }

    const now = new Date().getTime();
    await this.cacheManager.set(id, now, { ttl: 600 });
    return 'save new time : ' + now;
  }
}
