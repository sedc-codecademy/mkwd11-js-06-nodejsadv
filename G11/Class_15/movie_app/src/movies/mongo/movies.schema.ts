import { HydratedDocument } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  name: string;

  @Prop()
  genre: string;

  @Prop()
  director: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
