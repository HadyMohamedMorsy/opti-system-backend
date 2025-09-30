import { Language } from "src/language/language.entity";
import { BaseMemberEntity } from "src/shared/entities/base.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subfooter extends BaseMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Section title (Build Your Website with Hostiko)
  @Column({ nullable: true })
  title: string;

  // Section description
  @Column({ nullable: true, type: "text" })
  description: string;

  @ManyToOne(() => Language, { onDelete: "CASCADE" })
  language: Language;

  // Is active/visible
  @Column({ default: true })
  is_active: boolean;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  createdBy: User;
}
