import { IsString } from 'class-validator'

export class ColorDto {
	@IsString({
		message: 'Name is neccessary'
	})
	name: string

	@IsString({
		message: 'Value is neccessary'
	})
	value: string
}
