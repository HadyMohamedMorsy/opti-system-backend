import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SectionFour extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Section title (Advanced Web Hosting Features)
  @Column({ nullable: true })
  title: string;

  // Section description
  @Column({ nullable: true, type: "text" })
  description: string;

  // Features array as JSONB
  @Column("jsonb", { nullable: true })
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
