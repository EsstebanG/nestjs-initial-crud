import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create.movie.dto';
import { UpdateMovieDto } from './dto/update.movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>){}

    async createMovie(movie: CreateMovieDto) {
        const newMovie = this.movieRepository.create(movie);    
        await  this.movieRepository.save(newMovie);
        return newMovie;
    }

    async findAllMovies() {
        return this.movieRepository.find();
    }

    async findMovieById(id: string) {
        const movie = await this.movieRepository.findOne({ where: { id } });
        if (!movie) {
            throw new NotFoundException(`Movie with id ${id} not found`);
        }
        return movie;
    }

    async updateMovie(id: string, movieUpdates: UpdateMovieDto) {
        const movie = await this.findMovieById(id);
        const mergedMovie = this.movieRepository.merge(movie, movieUpdates);
        return this.movieRepository.save(mergedMovie);
    }

    async deleteMovie(id: string) {
        const movie = await this.findMovieById(id);
        await this.movieRepository.remove(movie);
        return { id };
    }
}
