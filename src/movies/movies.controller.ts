import { Controller, Post, Body, Get, Param, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create.movie.dto';
import { UpdateMovieDto } from './dto/update.movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post()
    createMovie(@Body() movie: CreateMovieDto) {
        return this.moviesService.createMovie(movie);
    }

    @Get()
    findAllMovies() {
        return this.moviesService.findAllMovies();
    }

    @Get(':id')
    findMovieById(@Param('id', ParseUUIDPipe) id: string) {
        return this.moviesService.findMovieById(id);
    }

    @Patch(':id')
    updateMovie(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() movieUpdates: UpdateMovieDto,
    ) {
        return this.moviesService.updateMovie(id, movieUpdates);
    }

    @Delete(':id')
    deleteMovie(@Param('id', ParseUUIDPipe) id: string) {
        return this.moviesService.deleteMovie(id);
    }
}
