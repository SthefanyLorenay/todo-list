import { User } from 'src/user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;
  @ManyToOne(() => User, (user) => user.task)
  user: User [];

  @Column({ length: 500 })
  name: string;

  @Column('enum')
  situation: TaskRole;
}
export enum TaskRole {
  easy = 'Facil',
  moderate = 'Moderado',
  hard = 'Dificil',
}