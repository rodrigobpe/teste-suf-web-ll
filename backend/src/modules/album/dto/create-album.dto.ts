import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty,IsDate,IsBoolean,IsInt } from "class-validator";

export class CreateAlbumDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque o nome do artista",example:"Taylor Swift"})
    name:string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({type:Date,description:"Coloque a data de lançamento do album",example:"2022-03-31"})
    date_release:Date;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque o gênero do album",example:"Pop"})
    genre:string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({type:Boolean,description:"Por padrão o valor vem (false)",example:true})
    is_favorite:boolean;    

    @IsInt()
    @IsNotEmpty()
    @ApiProperty({type:Number,description:"Coloque o ID do artista",example:1})
    id_artist?:number;   
}