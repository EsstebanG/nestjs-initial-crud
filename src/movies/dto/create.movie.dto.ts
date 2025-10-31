import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    director: string;

    @Transform(({ value }) => Number(value))
    @IsInt()
    @Min(1888)
    @Max(new Date().getFullYear() + 5)
    releaseYear: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    genre: string;

    @Transform(({ value }) => Number(value))
    @IsNumber({ maxDecimalPlaces: 1 })
    @Min(0)
    @Max(10)
    rating: number;
}
