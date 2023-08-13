import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty } from "class-validator";

export class CreateArtistDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque o nome do artista",example:"Taylor Swift"})
    name:string;
}