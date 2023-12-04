import { Injectable } from '@nestjs/common'
import { Category, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async create(data: Prisma.CategoryCreateInput): Promise<Category> {
		return this.prisma.category.create({
			data,
		})
	}

	async findAll(): Promise<Category[]> {
		return this.prisma.category.findMany()
	}

	async findOne(
		categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
	): Promise<Category | null> {
		return this.prisma.category.findUnique({
			where: categoryWhereUniqueInput,
		})
	}

	async update(params: {
		where: Prisma.CategoryWhereUniqueInput
		data: Prisma.CategoryUpdateInput
	}): Promise<Category> {
		return this.prisma.category.update({
			...params,
		})
	}

	async delete(where: Prisma.CategoryWhereUniqueInput): Promise<Category> {
		return this.prisma.category.delete({
			where,
		})
	}
}
