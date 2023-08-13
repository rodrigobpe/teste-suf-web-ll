import {Injectable, HttpException,HttpStatus} from '@nestjs/common'
import { ArtistRepository } from './repository/artist.repository';
import { Artist } from './artist.entity';
import { CreateArtistDTO } from './dto/create-artist.dto';

@Injectable()
export class ArtistService{
    constructor(private readonly repo:ArtistRepository){}
    async create({name}:CreateArtistDTO):Promise<Artist>{
        return await this.repo.create({name})
    }
    async getAll():Promise<Artist[]>{
        const artists = await this.repo.getAll()
        if(artists.length === 0) throw new HttpException("Não existem artistas cadastrados",HttpStatus.NOT_FOUND)

        return artists
    }
    async getById({id}):Promise<Artist>{
        const artist = await this.repo.getById({id})
        if (!artist) throw new HttpException("Artista não existe",HttpStatus.NOT_FOUND)

        return artist
    }
    async update({name}:CreateArtistDTO):Promise<Artist>{
        return await this.repo.create({name})
    }
    async delete({name}:CreateArtistDTO):Promise<Artist>{
        return await this.repo.create({name})
    }
}
