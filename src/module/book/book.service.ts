import { Book, Prisma } from '@prisma/client'
import { PrismaService } from 'src/module/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BookService {
	constructor(private prisma: PrismaService) {}

	async create(data: Prisma.BookCreateInput): Promise<Book> {
		return this.prisma.book.create({
			data,
			include: {
				rack: true,
				category: true,
			},
		})
	}

	async findAll(): Promise<Book[]> {
		return this.prisma.book.findMany({
			include: {
				category: true,
				rack: true,
			},
		})
	}

	async findOne(
		bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
	): Promise<Book | null> {
		return this.prisma.book.findUnique({
			where: bookWhereUniqueInput,
			include: {
				category: true,
				rack: true,
			},
		})
	}

	async update(params: {
		where: Prisma.BookWhereUniqueInput
		data: Prisma.BookUpdateInput
	}): Promise<Book> {
		return this.prisma.book.update({
			...params,
		})
	}

	async delete(where: Prisma.BookWhereUniqueInput): Promise<Book> {
		return this.prisma.book.delete({
			where,
		})
	}
}
