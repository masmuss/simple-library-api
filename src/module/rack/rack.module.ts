import { Module } from '@nestjs/common'

import { RackController } from './rack.controller'
import { RackService } from './rack.service'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [RackController],
	providers: [RackService, PrismaService],
})
export class RackModule {}
