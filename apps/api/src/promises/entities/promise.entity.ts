import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "users";
  
  export type PromiseStatus = "pending" | "done" | "skipped";
  
  @Entity({ name: "promises" })
  export class PromiseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @ManyToOne(() => UserEntity, (user) => user.promises, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: UserEntity;
  
    @Column({ name: "user_id" })
    userId: string;
  
    @Column({ type: "varchar", length: 255 })
    title: string;
  
    @Column({ type: "text", nullable: true })
    description: string | null;
  
    // You can also make this just a date without time
    @Column({ name: "target_date", type: "date" })
    targetDate: string;
  
    @Column({
      type: "enum",
      enum: ["pending", "done", "skipped"],
      default: "pending",
    })
    status: PromiseStatus;
  
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  
    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
  }
  