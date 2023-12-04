import { Module } from '@nestjs/common'

import { PrismaService } from 'src/module/prisma/prisma.service'

import { BookController } from './book.controller'
import { BookService } from './book.service'

@Module({
	providers: [BookService, PrismaService],
	controllers: [BookController],
})
export class BookModule {}
