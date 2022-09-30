import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeEntity } from '../cafe/cafe.entity';
import { faker } from '@faker-js/faker';

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

    await seedDatabase();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const seedDatabase = async () => {
    repository.clear();
    cafesList = [];
    for (let i = 0; i < 5; i++) {
      const cafe: CafeEntity = await repository.save({
        name: faker.company.name(),
        description: faker.address.secondaryAddress(),
        price: faker.address.city(),
      })
      cafesList.push(cafe);
    }
  }

});

