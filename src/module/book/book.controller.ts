import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { BookService } from './book.service'
import { Book, Prisma } from '@prisma/client'

@Controller('book')
export class BookController {
	constructor(private readonly bookService: BookService) {}

	@Post()
	async create(@Body() createBookDto: Prisma.BookCreateInput): Promise<Book> {
		return this.bookService.create(createBookDto)
	}

	@Get()
	async findAll(): Promise<Book[]> {
		return this.bookService.findAll()
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Book | null> {
		return this.bookService.findOne({ id: Number(id) })
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateBookDto: Prisma.BookUpdateInput,
	): Promise<Book> {
		return this.bookService.update({
			where: {
				id: Number(id),
			},
			data: updateBookDto,
		})
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<Book> {
		return this.bookService.delete({ id: Number(id) })
	}
}
