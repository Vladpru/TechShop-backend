import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CategoryDto } from './dto/category.dto'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async getByStoreId(storeId: string) {
		return this.prisma.color.findMany({
			where: { storeId }
		})
	}

	async getById(id: string) {
		const category = await this.prisma.store.findUnique({
			where: {
				id
			}
		})

		if (!category) throw new NotFoundException('Category not found')

		return category
	}

	async create(storeId: string, dto: CategoryDto) {
		return this.prisma.category.create({
			data: {
				title: dto.title,
				description: dto.description,
				storeId
			}
		})
	}

	async update(categoryId: string, dto: CategoryDto) {
		await this.getById(categoryId)

		return this.prisma.category.update({
			where: {
				id: categoryId
			},
			data: dto
		})
	}

	async delete(categoryId: string) {
		await this.getById(categoryId)

		return this.prisma.category.delete({
			where: {
				id: categoryId
			}
		})
	}
}
