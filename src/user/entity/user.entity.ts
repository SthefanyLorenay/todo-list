import { Task } from 'src/task/entity/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  password: string;

  @Column({ length: 500 })
  confirmPass: string;

  @Column({ length: 500 })
  createat: Date;

  @Column({ length: 500 })
  update: Date;

  @ManyToOne(() => Task)
  task: Task;
}