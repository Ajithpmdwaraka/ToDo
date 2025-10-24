import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors({
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    });
    
    app.useGlobalPipes(new ValidationPipe());
    
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`Application started successfully on this port ${port}`);
  } catch (error) {
    console.error('Failed to start Application:', error);
    throw error;
  }
}

bootstrap().catch((error) => {
  console.error('Failed to start the application:', error);
  process.exit(1);
});