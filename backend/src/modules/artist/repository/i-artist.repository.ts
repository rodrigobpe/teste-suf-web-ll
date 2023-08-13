import { Artist } from "../artist.entity";

export abstract class IArtistRepository{
    abstract create({name}:Omit<Artist,"id">):Promise<Artist>
    abstract getAll():Promise<Artist[] | null>
    abstract getById({id}:{id:number}):Promise<Artist | null>
    abstract delete({id}:{id:number}):Promise<void>
    abstract update({id,name}:Artist):Promise<Artist | null>
}