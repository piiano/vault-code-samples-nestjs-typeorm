import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

function prepareOpenApi(app: INestApplication): OpenAPIObject {
  const options = new DocumentBuilder()
    .setTitle('Demo')
    .setDescription('Demo app')
    .setVersion('1.0')
    .build();

  return SwaggerModule.createDocument(app, options);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/swagger', app, prepareOpenApi(app));
  await app.listen(3000);
}
bootstrap();
