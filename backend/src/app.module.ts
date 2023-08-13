import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './config/db/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
