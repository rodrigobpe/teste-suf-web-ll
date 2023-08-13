import { Album } from "../album.entity";

export abstract class IAlbumRepository{
    abstract create({name,date_release,genre,id_artist,is_favorite}:Omit<Album,"id">):Promise<Album>
    abstract getAll():Promise<Album[] | null>
    abstract getById({id}:{id:number}):Promise<Album | null>
    abstract getByArtist({id_artist}:{id_artist:number}):Promise<Album[] | null>
    abstract delete({id}:{id:number}):Promise<void>
    abstract update({id, is_favorite }:Partial<Album>):Promise<Album | null>
}