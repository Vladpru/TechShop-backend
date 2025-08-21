import { IsString } from 'class-validator'

export class CreateStoreDto {
	@IsString({
		message: 'Title is neccessary'
	})
	title: string
}
