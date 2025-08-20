import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class StoreService {
	constructor(private readonly prisma: PrismaService) {}
}
