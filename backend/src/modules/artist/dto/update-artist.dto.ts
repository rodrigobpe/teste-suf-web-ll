import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty,IsInt } from "class-validator";

export class UpdateArtistDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque o nome do artista",example:"Taylor Swift"})
    name:string;
}