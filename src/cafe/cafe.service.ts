import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CafeEntity } from './cafe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CafeService {

    constructor(
        @InjectRepository(CafeEntity)
        private readonly cafeRepository: Repository<CafeEntity>
    ){}

    async create(cafe: CafeEntity): Promise<CafeEntity> {
        return await this.cafeRepository.save(cafe);
    }

}
