import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishmentEntity } from '../../establishment/establishment.entity';
import { EventEntity } from '../../event/event.entity';
import { PetEntity } from '../../pet/pet.entity';
import { QuestionEntity } from '../../question/question.entity';
import { ReviewEntity } from '../../review/review.entity';
import { ScheduleEntity } from '../../schedule/schedule.entity';
import { UserEntity } from '../../user/user.entity';

export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [EstablishmentEntity, EventEntity, PetEntity, QuestionEntity, ReviewEntity, ScheduleEntity, UserEntity],
   synchronize: true,
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([EstablishmentEntity, EventEntity, PetEntity, QuestionEntity, ReviewEntity, ScheduleEntity, UserEntity]),
];

