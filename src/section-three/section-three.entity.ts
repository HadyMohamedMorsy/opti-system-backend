import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SectionThree extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Section title (Let us Help You By Boosting Your Business)
  @Column({ nullable: true })
  title: string;

  // Section description
  @Column({ nullable: true, type: "text" })
  description: string;

  // Features list array as JSONB
  @Column("jsonb", { nullable: true })
  features: Array<{
    number: string;
    title: string;
    description: string;
  }>;

  // Main section image
  @Column({ nullable: true })
  main_image: string;

  // Testimonial as JSONB
  @Column("jsonb", { nullable: true })
  testimonial: {
    quote: string;
    author_name: string;
    author_position: string;
  };

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
