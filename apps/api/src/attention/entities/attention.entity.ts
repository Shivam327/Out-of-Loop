import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "users";
  
  @Entity({ name: "attention_sessions" })
  export class AttentionSessionEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @ManyToOne(() => UserEntity, (user) => user.attentionSessions, {
      onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" })
    user: UserEntity;
  
    @Column({ name: "user_id" })
    userId: string;
  
    @Column({ name: "app_name", type: "varchar", length: 100 })
    appName: string;
  
    @Column({ name: "started_at", type: "timestamptz" })
    startedAt: Date;
  
    @Column({ name: "ended_at", type: "timestamptz" })
    endedAt: Date;
  
    @Column({ name: "total_seconds", type: "integer" })
    totalSeconds: number;
  
    @Column({ name: "is_doom_scroll", type: "boolean", default: false })
    isDoomScroll: boolean;
  
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  }
  