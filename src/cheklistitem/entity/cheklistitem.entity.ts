import { Cheklist } from 'src/cheklist/entity/cheklist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class CheklistItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  itemName: string;
  @ManyToOne(() => Cheklist)
  @JoinColumn()
  cheklist: Cheklist;
}
