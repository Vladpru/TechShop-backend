import { IsString } from 'class-validator'

export class CategoryDto {
	@IsString({
		message: 'Title is neccessary'
	})
	title: string

	@IsString({
		message: 'Description is neccessary'
	})
	description: string
}
