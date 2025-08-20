import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsOptional()
	@IsString()
	name: string

	@IsString({
		message: 'Email is neccessary'
	})
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password is too short, it must be at least 6 characters long'
	})
	@IsString({
		message: 'Password is neccessary'
	})
	password: string
}
