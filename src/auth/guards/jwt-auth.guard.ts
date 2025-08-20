import { AuthGuard } from '@nestjs/passport'

export class JwtAuthGuard extends AuthGuard('jwt') {
	constructor() {
		super()
		console.log('JWT Auth Guard')
	}
}
