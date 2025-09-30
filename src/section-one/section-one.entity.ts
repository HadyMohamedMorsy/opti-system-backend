import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SectionOne extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Main title/heading (Best Web Hosting Service Provider)
  @Column({ nullable: true })
  title: string;

  // Description text
  @Column({ type: "text", nullable: true })
  description: string;

  // Features array (Free SSL Services, 5000 Users, 10GB SSD Storage)
  @Column("simple-array", { nullable: true })
  features: string[];

  // Discount percentage (80)
  @Column({ type: "int", nullable: true })
  discount_percentage: number;

  // Discount label (OFF, LIMITED)
  @Column({ nullable: true })
  discount_label: string;

  // Main hero image
  @Column({ nullable: true })
  main_image: string;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
