import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "users";
  
  @Entity({ name: "insights" })
  export class InsightEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @ManyToOne(() => UserEntity, (user) => user.insights, {
      onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user: UserEntity;
  
    @Column({ name: "user_id" })
    userId: string;
  
    @Column({ name: "period_start", type: "date" })
    periodStart: string;
  
    @Column({ name: "period_end", type: "date" })
    periodEnd: string;
  
    @Column({ type: "text" })
    summary: string;
  
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  }
  