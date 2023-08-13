import { Injectable } from '@nestjs/common'
import { IAlbumRepository } from './i-album.repository';
import { Album } from '../album.entity';
import { PrismaService } from 'src/config/db/prisma.service';

@Injectable()
export class AlbumRepository implements IAlbumRepository {
    constructor(private readonly prisma: PrismaService) { }
    async create({ name, date_release, genre, id_artist, is_favorite }: Omit<Album, 'id'>): Promise<Album> {
        const album = await this.prisma.album.create({
            data: { name,date_release,genre,is_favorite,id_artist }
        })

        return album
    }
    async getAll(): Promise<Album[]> {
        const albums = await this.prisma.album.findMany()
        return albums
    }
    async getById({ id }: { id: number; }): Promise<Album | null> {
        const album = await this.prisma.album.findFirst({ where: { id } })
        return album
    }
    async delete({ id }: { id: number; }): Promise<void> {
        await this.prisma.album.delete({ where: { id } })
    }
    async update({ id, is_favorite }: Partial<Album>): Promise<Album | null> {
        const album = await this.prisma.album.update({
            data: { is_favorite }, where: { id }
        })
        return album
    }

} 