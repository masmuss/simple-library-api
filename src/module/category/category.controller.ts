import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { CategoryService } from './category.service'
import { Category, Prisma } from '@prisma/client'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	async create(
		@Body() createCategoryDto: Prisma.CategoryCreateInput,
	): Promise<Category> {
		return this.categoryService.create(createCategoryDto)
	}

	@Get()
	async findAll(): Promise<Category[]> {
		return this.categoryService.findAll()
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Category | null> {
		return this.categoryService.findOne({ id: Number(id) })
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateCategoryDto: Prisma.CategoryUpdateInput,
	): Promise<Category> {
		return this.categoryService.update({
			where: {
				id: Number(id),
			},
			data: updateCategoryDto,
		})
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return this.categoryService.delete({ id: Number(id) })
	}
}
