import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post(':storeId')
	async create(@Param('storeId') storeId: string, @Body() dto: CategoryDto) {
		return this.categoryService.create(storeId, dto)
	}

	@Auth()
	@Get('by-storeId/:storeId')
	async getByStoreId(@Param('storeId') storeId: string) {
		return this.categoryService.getByStoreId(storeId)
	}

	@Auth()
	@Get('by-id/:id')
	async getById(@Param('id') categoryId: string) {
		return this.categoryService.getById(categoryId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') categoryId: string, @Body() dto: CategoryDto) {
		return this.categoryService.update(categoryId, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') categoryId: string) {
		return this.categoryService.delete(categoryId)
	}
}
