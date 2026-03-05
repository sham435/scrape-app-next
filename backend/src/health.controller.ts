import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHealth() {
    const nextApiUrl = this.configService.get<string>('NEXT_API_URL') || 'http://localhost:3000';
    
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        api: nextApiUrl,
        status: 'running'
      },
      memory: {
        heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
        heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + ' MB',
        rss: Math.round(process.memoryUsage().rss / 1024 / 1024) + ' MB'
      }
    };
  }

  @Get('live')
  liveness() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString()
    };
  }

  @Get('ready')
  readiness() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    };
  }
}
