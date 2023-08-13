import { Body, Controller, Get, Post, Param } from '@nestjs/common'
import { ArtistService } from './artist.service'
import { CreateArtistDTO } from './dto/create-artist.dto'
import { ApiCreatedResponse, ApiTags, ApiHeader } from '@nestjs/swagger'
import { Artist } from './artist.entity'

@ApiTags('Artists')
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
    async getAllArtists() {
        const artists = await this.artistService.getAll()
        return artists
    }

    @Get('/:id')
    @ApiCreatedResponse({ status: 200, type: Artist })
    async getArtistsById(@Param() {id}) {
        const artist = await this.artistService.getById({id})
        return artist
    }
}