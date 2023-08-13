import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { ArtistModule } from './modules/artist/artist.module';
import { AlbumModule } from './modules/album/album.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    ArtistModule,
    AlbumModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
