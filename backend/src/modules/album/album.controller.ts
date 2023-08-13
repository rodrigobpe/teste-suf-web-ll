import { Body, Controller, Get, Post, Param, Delete, Patch, ParseIntPipe } from '@nestjs/common'
import { AlbumService } from './album.service'
import { CreateAlbumDTO } from './dto/create-album.dto'
import { ApiCreatedResponse, ApiTags, ApiHeader, ApiNotFoundResponse, ApiParam, ApiOkResponse } from '@nestjs/swagger'
import { Album } from './album.entity'
import { UpdateAlbumtDTO } from './dto/update-album.dto'

@ApiTags('Albums')
@Controller('')
export class AlbumController {
    constructor(private readonly artistService: AlbumService) { }

    @Post('artists/:id/albums')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiCreatedResponse({ status: 201, description: "The record has been successfully created.", type: Album })
    async createAlbum(@Param('id', ParseIntPipe) id_artist: number, @Body() { name, date_release, genre, is_favorite }: CreateAlbumDTO) {
        const album = await this.artistService.create({ name, date_release: new Date(date_release), genre, is_favorite, id_artist })
        return album
    }

    @Get('albums')
    @ApiCreatedResponse({ status: 200, type: Album, isArray: true })
    @ApiNotFoundResponse({ description: "Not Found", schema: { example: { statusCode: 404, message: "Não existem albums cadastrados" } } })
    async getAllAlbums() {
        const albums = await this.artistService.getAll()
        return albums
    }

    @Get('/albums/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, type: Album })
    @ApiNotFoundResponse({ description: "Not found", schema: { example: { statusCode: 404, message: "Album não existe" } } })
    async getAlbumById(@Param('id', ParseIntPipe) id: number) {
        const album = await this.artistService.getById({ id })
        return album
    }

    @Get('artists/:id/albums')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, type: Album })
    @ApiNotFoundResponse({ description: "Not found", schema: { example: { statusCode: 404, message: "O artista não possui nenhum album" } } },)
    async getAlbumByArtists(@Param('id', ParseIntPipe) id_artist: number) {
        const album = await this.artistService.getByArtist({ id_artist })
        return album
    }

    @Delete('/albums/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, description: "Album deletado com sucesso", schema: { example: { statusCode: 200, message: "Album com o ID X foi deletado" }, } })
    @ApiNotFoundResponse({ description: "Not found",schema:{example:{statusCode:404,message:"Album não existe"}} })
    async deleteAlbum(@Param('id', ParseIntPipe) id: number) {
        await this.artistService.delete({ id })
        return { statusCode: 200, message: `Album com o ID ${id} foi deletado` }
    }

    @Patch('/albums/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, description: "Artista modificado com sucesso", type: Album })
    @ApiNotFoundResponse({ description: "Not found" })
    async updateAlbum(@Param('id', ParseIntPipe) id: number, @Body() { is_favorite }: UpdateAlbumtDTO) {
        const album = await this.artistService.update({ id, is_favorite })
        return album
    }

}