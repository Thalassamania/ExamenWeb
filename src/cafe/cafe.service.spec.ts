import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from '../cafe/cafe.entity';
import { faker } from '@faker-js/faker';
import { TiendaEntity } from 'src/tienda/tienda.entity';

describe('CafeService', () => {
  let service: CafeService;
  let repository: Repository<CafeEntity>;
  let cafesList: CafeEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
    repository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new cafe', async () => {
    const cafe: CafeEntity = {
      id: "",
      name: faker.company.name(),
      description: faker.lorem.sentence(),
      price: faker.commerce.price(),
      tienda: null
    }
    const newCafe: CafeEntity = await service.create(cafe);
    expect(newCafe).not.toBeNull();

    const storedCafe: CafeEntity = await repository.findOne({ where: { id: newCafe.id } })
    expect(storedCafe).not.toBeNull();
    expect(storedCafe.name).toEqual(newCafe.name)
    expect(storedCafe.description).toEqual(newCafe.description)
    expect(storedCafe.tienda).toEqual(newCafe.tienda)
  });

});

