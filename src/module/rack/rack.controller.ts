import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common'
import { RackService } from './rack.service'
import { Rack, Prisma } from '@prisma/client'

@Controller('rack')
export class RackController {
	constructor(private readonly rackService: RackService) {}

	@Post()
	async create(@Body() createRackDto: Prisma.RackCreateInput): Promise<Rack> {
		return this.rackService.create(createRackDto)
	}

	@Get()
	async findAll(): Promise<Rack[]> {
		return this.rackService.findAll()
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Rack | null> {
		return this.rackService.findOne(+id)
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateRackDto: Prisma.RackUpdateInput,
	): Promise<Rack> {
		return this.rackService.update({
			where: {
				id: Number(id),
			},
			data: updateRackDto,
		})
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.rackService.remove({
			id: Number(id),
		})
	}
}
