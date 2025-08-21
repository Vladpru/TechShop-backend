import { ArrayMinSize, IsInt, IsNotEmpty, IsString } from 'class-validator'

export class ProductDto {
	@IsString({
		message: 'Title is required'
	})
	@IsNotEmpty({
		message: 'Title cannot be empty'
	})
	title: string

	@IsString({
		message: 'Description is required'
	})
	@IsNotEmpty({
		message: 'Description cannot be empty'
	})
	description: string

	@IsInt({
		message: 'Price must be a number'
	})
	@IsNotEmpty({
		message: 'Price cannot be empty'
	})
	price: number

	@IsString({
		message: 'Image is required',
		each: true
	})
	@ArrayMinSize(1, {
		message: 'Image must be an array with at least one element'
	})
	@IsNotEmpty({
		message: 'Image path cannot be empty'
	})
	image: string[]

	@IsString({
		message: 'Category is required'
	})
	@IsNotEmpty({
		message: 'Category ID cannot be empty'
	})
	categoryId: string

	@IsString({
		message: 'Color is required'
	})
	@IsNotEmpty({
		message: 'Color ID cannot be empty'
	})
	colorId: string
}
