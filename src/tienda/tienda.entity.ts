/* eslint-disable prettier/prettier */
import { CafeEntity } from 'src/cafe/cafe.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TiendaEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;

 @Column()
 address: string;

 @Column()
 phone: string;

 @OneToMany(() => CafeEntity, cafe  => cafe.tienda)
    cafes: CafeEntity[];
}