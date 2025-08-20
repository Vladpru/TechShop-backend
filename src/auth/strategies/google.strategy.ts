import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy, StrategyOptions } from 'passport-google-oauth20'
import { VerifiedCallback } from 'passport-jwt'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(private configService: ConfigService) {
		super({
			clientID: configService.get<string>('GOOGLE_CLIENT'),
			clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
			callbackURL:
				configService.get<string>('SERVER_URL') + '/auth/google/callback',
			scope: ['profile', 'email']
		} as StrategyOptions)
	}

	async validate(
		_accessToken: string,
		_refreshToken: string,
		profile: Profile,
		done: VerifiedCallback
	) {
		const { displayName, emails, photos } = profile

		const user = {
			email: emails && emails.length > 0 ? emails[0].value : null,
			name: displayName,
			picture: photos && photos.length > 0 ? photos[0].value : null
		}
		done(null, user)
	}
}
