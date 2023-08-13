import { Module } from "@nestjs/common";
import { ArtistController } from "./artist.controller";
import { ArtistService } from "./artist.service";
import { ArtistRepository } from "./repository/artist.repository";
import { PrismaModule } from "src/config/db/prisma.module";

@Module({
    controllers:[ArtistController],
    providers:[ArtistService,ArtistRepository],
    imports:[PrismaModule],
})
export class ArtistModule{}