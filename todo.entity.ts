import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity('todos')
export class Todo {
    @PrimaryGeneratedColumn('uuid') 
    id: string; 

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
