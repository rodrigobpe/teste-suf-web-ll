import { Body, Controller, Get, Post, Param, Delete, Patch, ParseIntPipe, HttpException } from '@nestjs/common'
import { ArtistService } from './artist.service'
import { CreateArtistDTO } from './dto/create-artist.dto'
import { ApiCreatedResponse, ApiTags, ApiHeader, ApiNotFoundResponse, ApiParam, ApiOkResponse } from '@nestjs/swagger'
import { Artist } from './artist.entity'
import { UpdateArtistDTO } from './dto/update-artist.dto'

@ApiTags('Artistas')
@Controller('artists')
export class ArtistController {
    constructor(private readonly artistService: ArtistService) { }

    @Post()
    @ApiCreatedResponse({ status: 201, description: "The record has been successfully created.", type: Artist })
    async createArtist(@Body() { name }: CreateArtistDTO) {
        const artist = await this.artistService.create({ name })
        return artist
    }

    @Get()
    @ApiCreatedResponse({ status: 200, type: Artist, isArray: true })
    @ApiNotFoundResponse({description:"Not found",schema:{example:{statusCode:404,message:"Não existem artistas cadastrados"}}})
    async getAllArtists() {
        const artists = await this.artistService.getAll()
        return artists
    }

    @Get('/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, type: Artist })
    @ApiNotFoundResponse({ description: "Not found",schema:{example:{statusCode:404,message:"Artista não existe"},}})
    async getArtistsById(@Param('id',ParseIntPipe) id:number ) {
        const artist = await this.artistService.getById({ id })
        return artist
    }

    @Delete('/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, description: "Artista deletado com sucesso",schema:{example:{statusCode:200,message:"Artista com o ID: X foi deletado"}} })
    @ApiNotFoundResponse({ description: "Not found",schema:{example:{statusCode:404,message:"Artista não existe"},}})
    async deleteArtist(@Param('id',ParseIntPipe) id:number) {
        await this.artistService.delete({ id })
        return {statusCode:200,message:`Artista com o ID: ${id} foi deletado`}
    }

    @Patch('/:id')
    @ApiParam({ name: "id", example: 1,type:Number })
    @ApiOkResponse({ status: 200, description: "Artista modificado com sucesso", type: Artist })
    @ApiNotFoundResponse({ description: "Not found",schema:{example:{statusCode:404,message:"Artista não existe"},}})
    async updateArtist(@Param('id',ParseIntPipe) id:number, @Body() { name }: UpdateArtistDTO) {
        const artist = await this.artistService.update({ id, name })
        return artist
    }


    
}