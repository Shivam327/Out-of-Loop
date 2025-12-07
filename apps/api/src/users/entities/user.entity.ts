import { AttentionSessionEntity } from "attention";
import { InsightEntity } from "insights";
import { PromiseEntity } from "promises";
import { ReflectionEntity } from "reflections";
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
  
  @Entity({ name: "users" })
  export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: "varchar", length: 255, nullable: true, unique: true })
    email: string | null;
  
    @Column({ type: "varchar", length: 255, nullable: true })
    name: string | null;
  
    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  
    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
  
    @OneToMany(() => PromiseEntity, (promise) => promise.user)
    promises: PromiseEntity[];
  
    @OneToMany(() => ReflectionEntity, (reflection) => reflection.user)
    reflections: ReflectionEntity[];
  
    @OneToMany(() => AttentionSessionEntity, (session) => session.user)
    attentionSessions: AttentionSessionEntity[];
  
    @OneToMany(() => InsightEntity, (insight) => insight.user)
    insights: InsightEntity[];
  }
  