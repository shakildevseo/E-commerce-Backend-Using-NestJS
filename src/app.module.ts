import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BrandModule } from './brand/brand.module';
import { PrismaModule } from './prisma/prisma.module';
import { MulterModule } from './multer/multer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    BrandModule,
    PrismaModule,
    MulterModule,
    ServeStaticModule.forRoot({
    rootPath : join(__dirname, "public", "brand"),
    serveRoot : "/public/brand/"
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
