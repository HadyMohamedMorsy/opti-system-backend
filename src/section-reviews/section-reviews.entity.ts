import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SectionReviews extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Section title (What Our Customers are Saying)
  @Column({ nullable: true })
  title: string;

  // Section description
  @Column({ nullable: true, type: "text" })
  description: string;

  // Reviews array as JSONB
  @Column("jsonb", { nullable: true })
  reviews: Array<{
    icon: string;
    name: string;
    description: string;
    image_reviewer: string;
    name_reviewer: string;
    count_rating: number;
  }>;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
