import { Injectable } from '@nestjs/common'
import { IArtistRepository } from './i-artist.repository';
import { Artist } from '../artist.entity';
import { PrismaService } from 'src/config/db/prisma.service';

@Injectable()
export class ArtistRepository implements IArtistRepository {
    constructor(private readonly prisma: PrismaService) { }
    async create({ name }: Omit<Artist, 'id'>): Promise<Artist> {
        const artist = await this.prisma.artist.create({
            data: { name }
        })

        return artist
    }
    async getAll(): Promise<Artist[]> {
        const artists = await this.prisma.artist.findMany({include:{albums:true}})
        return artists
    }
    async getById({ id }: { id: number; }): Promise<Artist> {
        const artist = await this.prisma.artist.findFirst({ where: { id } })
        return artist
    }
    async delete({ id }: { id: number; }): Promise<void> {
        await this.prisma.artist.delete({ where: { id } })
    }
    async update({ id, name }: Artist): Promise<Artist> {
        const artist = await this.prisma.artist.update({
            data: { name }, where: { id }
        })
        return artist
    }

} 