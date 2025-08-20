import {
	Controller,
	Get,
	Param,
	Patch,
	UnauthorizedException
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from './decorators/user.decorator'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {
		console.log('User Controller')
	}

	@Auth()
	@Get('profile')
	async getProfile(@CurrentUser('id') id: string) {
		if (!id) throw new UnauthorizedException('User ID is required')
		console.log('USER id')
		return this.userService.getById(id)
	}

	@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') id: string,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorites(productId, id)
	}
}
