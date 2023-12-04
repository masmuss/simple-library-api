import { Injectable } from '@nestjs/common'
import { Rack, Prisma } from '@prisma/client'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class RackService {
	constructor(private prisma: PrismaService) {}

	async create(createRackDto: Prisma.RackCreateInput): Promise<Rack> {
		return this.prisma.rack.create({
			data: createRackDto,
		})
	}

	async findAll(): Promise<Rack[]> {
		return this.prisma.rack.findMany()
	}

	async findOne(id: number): Promise<Rack | null> {
		return this.prisma.rack.findUnique({ where: { id } })
	}

	async update(params: {
		where: Prisma.RackWhereUniqueInput
		data: Prisma.RackUpdateInput
	}): Promise<Rack> {
		return this.prisma.rack.update({
			...params,
		})
	}

	async remove(where: Prisma.RackWhereUniqueInput): Promise<Rack> {
		return this.prisma.rack.delete({ where })
	}
}
