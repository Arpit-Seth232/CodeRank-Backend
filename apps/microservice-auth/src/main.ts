import { NestFactory } from '@nestjs/core';
import { MicroserviceAuthModule } from './microservice-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceAuthModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
