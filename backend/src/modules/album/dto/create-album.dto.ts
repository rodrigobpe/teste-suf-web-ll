import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsNotEmpty,IsDate,IsBoolean,IsInt } from "class-validator";

export class CreateAlbumDTO{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque o nome do album",example:"1969"})
    name:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque a data de lançamento do album",example:"2014-10-27"})
    date_release:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String,description:"Coloque o gênero do album",example:"Pop"})
    genre:string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({type:Boolean,description:"Por padrão o valor vem (false)",example:false})
    is_favorite:boolean;      
}