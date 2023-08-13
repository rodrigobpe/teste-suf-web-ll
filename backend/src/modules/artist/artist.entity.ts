import { ApiProperty } from "@nestjs/swagger";
export class Artist{
    @ApiProperty({type:Number,description:"O ID é gerado automaticamente pelo banco de dados",example:"0"})
    id?:number

    @ApiProperty({type:String,description:"Nome do Artista",example:"Taylor Swift"})
    name:string;
}