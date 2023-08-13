import { Module } from "@nestjs/common";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";
import { AlbumRepository } from "./repository/album.repository";
import { PrismaModule } from "src/config/db/prisma.module";

@Module({
    controllers:[AlbumController],
    providers:[AlbumService,AlbumRepository],
    imports:[PrismaModule],
})
export class AlbumModule{}