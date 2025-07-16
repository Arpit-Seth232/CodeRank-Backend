import { Module } from '@nestjs/common';
import { MicroserviceAuthController } from './microservice-auth.controller';
import { MicroserviceAuthService } from './microservice-auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [MicroserviceAuthController],
  providers: [MicroserviceAuthService],
})
export class MicroserviceAuthModule {}
