import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ColorDto } from './dto/color.dto'

@Injectable()
export class ColorService {
	constructor(private prisma: PrismaService) {}

	async getByStoreId(storeId: string) {
		return this.prisma.color.findMany({
			where: { storeId }
		})
	}

	async getById(id: string) {
		const color = await this.prisma.store.findUnique({
			where: {
				id
			}
		})

		if (!color) throw new NotFoundException('Color not found')

		return color
	}

	async create(storeId: string, dto: ColorDto) {
		return this.prisma.color.create({
			data: {
				name: dto.name,
				value: dto.value,
				storeId
			}
		})
	}

	async update(colorId: string, dto: ColorDto) {
		await this.getById(colorId)

		return this.prisma.color.update({
			where: {
				id: colorId
			},
			data: dto
		})
	}

	async delete(colorId: string) {
		await this.getById(colorId)

		return this.prisma.color.delete({
			where: {
				id: colorId
			}
		})
	}
}
