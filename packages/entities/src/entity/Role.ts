import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "varchar", length: 200 })
  roleName: string;
  @Column({ type: "bool" })
  isTemplate: boolean;
  @Column({ type: "varchar", length: 200, array: true })
  policies: string[];
}
