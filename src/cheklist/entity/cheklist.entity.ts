import { CheklistItem } from 'src/cheklistitem/entity/cheklistitem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Cheklist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @OneToMany(() => CheklistItem, (cheklistItem) => cheklistItem.cheklist)
  cheklistItem: CheklistItem[];
}
