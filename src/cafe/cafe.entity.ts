/* eslint-disable prettier/prettier */
import { TiendaEntity } from 'src/tienda/tienda.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CafeEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 description: string;
 
 @Column()
 price: string;
 
 @ManyToOne(() => TiendaEntity, tienda => tienda.cafes)
 tienda: TiendaEntity;
 
}