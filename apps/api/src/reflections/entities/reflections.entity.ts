import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "users";
  
  @Entity({ name: "reflections" })
  @Unique("user_date_unique", ["userId", "date"])
  export class ReflectionEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @ManyToOne(() => UserEntity, (user) => user.reflections, {
      onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user: UserEntity;
  
    @Column({ name: "user_id" })
    userId: string;
  
    // Date only, no time part
    @Column({ type: "date" })
    date: string;
  
    @Column({ type: "varchar", length: 50, nullable: true })
    mood: string | null;
  
    @Column({ name: "what_mattered", type: "text", nullable: true })
    whatMattered: string | null;
  
    @Column({ name: "what_stressed", type: "text", nullable: true })
    whatStressed: string | null;
  
    @Column({ name: "what_to_remove", type: "text", nullable: true })
    whatToRemove: string | null;
  
    @Column({ type: "text", nullable: true })
    gratitude: string | null;
  
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  
    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
  }
  