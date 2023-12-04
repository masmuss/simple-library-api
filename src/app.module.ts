import { Module } from '@nestjs/common'

import { BookModule } from './module/book/book.module'
import { CategoryModule } from './module/category/category.module'
import { RackModule } from './module/rack/rack.module'

@Module({
	imports: [BookModule, RackModule, CategoryModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
