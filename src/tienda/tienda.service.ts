import { Injectable } from '@nestjs/common';
import { TiendaEntity } from './tienda.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TiendaService {

    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ){}

    async create(tienda: TiendaEntity): Promise<TiendaEntity> {
        return await this.tiendaRepository.save(tienda);
    }

}
