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
    async createAlbum(@Param('id',ParseIntPipe) id_artist:number, @Body() { name,date_release,genre,is_favorite }: CreateAlbumDTO) {
        const album = await this.artistService.create({ name,date_release,genre,is_favorite,id_artist })
        return album
    }

    @Get('albums')
    @ApiCreatedResponse({ status: 200, type: Album, isArray: true })
    async getAllAlbums() {
        const albums = await this.artistService.getAll()
        return albums
    }

    @Get('/albums/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, type: Album })
    @ApiNotFoundResponse({ description: "Not found" },)
    async getAlbumById(@Param('id',ParseIntPipe) id:number ) {
        const album = await this.artistService.getById({ id })
        return album
    }

    @Delete('/albums/:id')
    @ApiParam({ name: "id", example: 1, type: Number })
    @ApiOkResponse({ status: 200, description: "Artista deletado com sucesso" })
    @ApiNotFoundResponse({ description: "Not found" })
    async deleteAlbum(@Param('id',ParseIntPipe) id:number) {
        const album = await this.artistService.delete({ id })
        return album
    }

    @Patch('/albums/:id')
    @ApiParam({ name: "id", example: 1,type:Number })
    @ApiOkResponse({ status: 200, description: "Artista modificado com sucesso", type: Album })
    @ApiNotFoundResponse({ description: "Not found" })
    async updateAlbum(@Param('id',ParseIntPipe) id:number, @Body() { is_favorite }: UpdateAlbumtDTO) {
        const album = await this.artistService.update({ id, is_favorite })
        return album
    }

}