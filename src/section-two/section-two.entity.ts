import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SectionTwo extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Section title (Choose Your Hosting Plan)
  @Column({ nullable: true })
  title: string;

  // Section description
  @Column({ nullable: true, type: "text" })
  description: string;

  // Hosting plans array as JSONB
  @Column("jsonb", { nullable: true })
  plans: Array<{
    plan_name: string;
    price: number;
    price_cents: string;
    price_period: string;
    plan_description: string;
    features: string[];
  }>;

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
