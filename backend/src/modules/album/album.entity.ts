import { ApiProperty } from "@nestjs/swagger";
export class Album{
    @ApiProperty({type:Number,description:"O ID é gerado automaticamente pelo banco de dados",example:"0"})
    id?:number

    @ApiProperty({type:String,description:"Nome do Album",example:"1969"})
    name:string;

    @ApiProperty({type:Date,description:"Data de lançamento do album",example:"2002-10-10"})
    date_release:Date;

    @ApiProperty({type:String,description:"Nome do gênero musical",example:"Pop"})
    genre:string;

    @ApiProperty({type:Boolean,description:"Campo para validar se o album é favorito ou não (true, false)",example:true})
    is_favorite:boolean;

    @ApiProperty({type:Number,description:"Id do artista",example:1})
    id_artist:number;
}