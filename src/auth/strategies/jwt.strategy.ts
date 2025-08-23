import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService
		// private userService: UserService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey:
				configService.get<string>('JWT_SECRET') || 'vimfsd129evermpo2312'
		})
	}

	async validate(payload: { id: string }) {
		if (!payload.id) throw new UnauthorizedException('Invalid token payload')
		return { id: payload.id }
	}
}
