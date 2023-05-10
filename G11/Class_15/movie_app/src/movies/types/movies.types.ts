import { Types } from 'mongoose';
import { Movie } from '../mongo/movies.schema';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export interface IMovie {
  id: string;
  name: string;
  genre: string;
  direcrot: string;
}

export interface MovieCreateProps {
  name: string;
  genre: string;
  director: string;
}

export interface MovieUpdateProps {
  name: string;
  genre: string;
  director: string;
}

export interface IMoviesService {
  getMovies(): Promise<IMovie[]>;
  saveMovie(props: MovieCreateProps): Promise<string>;
  deleteMovie(id: string): Promise<string>;
  updateMovie(id: string, props: MovieUpdateProps): Promise<string>;
}

// MONGO

export type RawMovieDocument = Document<unknown, {}, Movie> &
  Omit<
    Movie & {
      _id: Types.ObjectId;
    },
    never
  >;

// DTOS

export class MovieDto {
  @ApiProperty() // for swagger
  name: string;
  @ApiProperty()
  genre: string;
  @ApiProperty()
  director: string;
}

export class UpdateMovieDto {
  @ApiProperty()
  name_dto: string;
  @ApiProperty()
  genre_dto: string;
  @ApiProperty()
  director_dto: string;
}
