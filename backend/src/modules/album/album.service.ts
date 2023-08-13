import {Injectable, HttpException,HttpStatus} from '@nestjs/common'
import { AlbumRepository } from './repository/album.repository';
import { Album } from './album.entity';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { UpdateAlbumtDTO } from './dto/update-album.dto';

@Injectable()
export class AlbumService{
    constructor(private readonly repo:AlbumRepository){}
    async create({name,date_release,genre,is_favorite,id_artist}:CreateAlbumDTO):Promise<Album>{
        return await this.repo.create({name,date_release,genre,id_artist,is_favorite})
    }
    async getAll():Promise<Album[]>{
        const albums = await this.repo.getAll()
        if(albums.length === 0) throw new HttpException("Não existem albums cadastrados",HttpStatus.NOT_FOUND)

        return albums
    }
    async getById({id}):Promise<Album>{
        const album = await this.repo.getById({id})
        if (!album) throw new HttpException("Album não existe",HttpStatus.NOT_FOUND)

        return album
    }
    async update({id,is_favorite}:Partial<Album>):Promise<Album>{
        return await this.repo.update({id, is_favorite})
    }
    async delete({id}):Promise<void>{
        const album = await this.repo.getById({id})
        if (!album) throw new HttpException("Album não existe",HttpStatus.NOT_FOUND)

        await this.repo.delete({id})
    }
}
