import { Test, TestingModule } from '@nestjs/testing';
import { TiendaService } from './tienda.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiendaEntity } from '../tienda/tienda.entity';
import { faker } from '@faker-js/faker';

describe('TiendaService', () => {
  let service: TiendaService;
  let repository: Repository<TiendaEntity>;
  let tiendasList: TiendaEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiendaService],
    }).compile();

    service = module.get<TiendaService>(TiendaService);
    repository = module.get<Repository<TiendaEntity>>(getRepositoryToken(TiendaEntity));

    await seedDatabase();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  const seedDatabase = async () => {
    repository.clear();
    tiendasList = [];
    for (let i = 0; i < 5; i++) {
      const tienda: TiendaEntity = await repository.save({
        name: faker.company.name(),
        address: faker.address.secondaryAddress(),
        city: faker.address.city(),
        type: faker.company.bsAdjective()
      })
      tiendasList.push(tienda);
    }
  }

});

