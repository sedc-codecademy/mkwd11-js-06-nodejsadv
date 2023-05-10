import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './mongo/movies.schema';
@Module({
  imports: [
    // register the schema/collection in the database
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
