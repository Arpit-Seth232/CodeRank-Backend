import { Controller, Get } from '@nestjs/common';
import { MicroserviceAuthService } from './microservice-auth.service';

@Controller()
export class MicroserviceAuthController {
  constructor(private readonly microserviceAuthService: MicroserviceAuthService) {}

  @Get()
  getHello(): string {
    return this.microserviceAuthService.getHello();
  }
}
