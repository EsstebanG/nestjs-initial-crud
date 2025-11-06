import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ensureDatabaseExists } from './config/database-init';
import { MoviesService } from './movies/movies.service';

async function bootstrap() {
  await ensureDatabaseExists();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
    }),
  );

  if (process.env.SEED_DB === 'true') {
    const movieService = app.get(MoviesService);
    await movieService.seedMovies();
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
