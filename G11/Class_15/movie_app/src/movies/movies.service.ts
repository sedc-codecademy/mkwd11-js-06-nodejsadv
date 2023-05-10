import { Injectable } from '@nestjs/common';
import {
  IMovie,
  IMoviesService,
  MovieCreateProps,
  MovieUpdateProps,
  RawMovieDocument,
} from './types/movies.types';
import { Model } from 'mongoose';
import { Movie } from './mongo/movies.schema';
import { InjectModel } from '@nestjs/mongoose';
import { toMovies } from './utils/movie.mapper';

// SOLID
/**
 * S — Single Responsibility Principle (SRP)
 * O — Open/Closed Principle (OCP)
 * L - Liskov Substitution Principle (LSP)
   I — Interface Segregation Principle (ISP)
   D — Dependency Inversion Principle (DIP)
 */

// O — Open/Closed Principle (OCP)
@Injectable()
export class MoviesService implements IMoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async getMovies(): Promise<IMovie[]> {
    const rawMovies: RawMovieDocument[] = await this.movieModel.find().exec();

    const movies = toMovies(rawMovies);

    return movies;
  }

  async saveMovie(props: MovieCreateProps): Promise<string> {
    const createMovie = new this.movieModel(props);

    await createMovie.save();

    return createMovie._id.toString();
  }

  async deleteMovie(id: string): Promise<string> {
    const response = await this.movieModel.findByIdAndDelete(id);

    return response._id.toString();
  }

  async updateMovie(id: string, props: MovieUpdateProps): Promise<string> {
    const response = await this.movieModel.findByIdAndUpdate(id, props);

    return response._id.toString();
  }
}
