import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SectionFive extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Items array as JSONB
  @Column("jsonb", { nullable: true })
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
