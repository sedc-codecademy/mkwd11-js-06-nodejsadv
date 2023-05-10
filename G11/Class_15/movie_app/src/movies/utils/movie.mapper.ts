import {
  IMovie,
  MovieCreateProps,
  MovieDto,
  MovieUpdateProps,
  RawMovieDocument,
  UpdateMovieDto,
} from '../types/movies.types';

// MAPPER FUNCTION
export const toMovies = (rawMovies: RawMovieDocument[]) => {
  const movies: IMovie[] = rawMovies.map((value) => ({
    id: value._id.toString(),
    name: value.name,
    genre: value.genre,
    direcrot: value.director,
  }));

  return movies;
};

export const toMovieCreateProps = (movieDto: MovieDto): MovieCreateProps => {
  return {
    name: movieDto.name,
    genre: movieDto.genre,
    director: movieDto.director,
  };
};

export const toMovieUpdateProps = (
  movieUpdateDto: UpdateMovieDto,
): MovieUpdateProps => {
  return {
    name: movieUpdateDto.name_dto,
    genre: movieUpdateDto.genre_dto,
    director: movieUpdateDto.director_dto,
  };
};
