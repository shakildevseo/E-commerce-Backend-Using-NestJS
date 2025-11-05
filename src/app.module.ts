import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BrandModule } from './brand/brand.module';
import { PrismaModule } from './prisma/prisma.module';
import { MulterModule } from './multer/multer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    BrandModule,
    PrismaModule,
    MulterModule,
    ServeStaticModule.forRoot({
    rootPath : join(__dirname, "public"),
    serveRoot : "/public"
    }),
    CategoryModule,
    ProductModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
