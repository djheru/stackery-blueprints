import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Dealership } from "./Dealership";
import { ActivationState } from "../dto";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "varchar", length: 200 })
  name: string;
  @Column({ type: "varchar", length: 200 })
  street: string;
  @Column({ type: "varchar", length: 200 })
  city: string;
  @Column({ type: "varchar", length: 2 })
  state: string;
  @Column({ type: "varchar", length: 200 })
  country: string;
  @Column({ type: "varchar", length: 12 })
  zip: string;
  @Column({ type: "varchar", length: 255 })
  url: string;
  @Column({ type: "varchar", length: 32 })
  phone: string;
  @Column({ type: "varchar", length: 200, array: true })
  admins: string[];
  @Column({
    type: "enum",
    enum: ActivationState,
    default: ActivationState.ENABLED,
  })
  activation: ActivationState;
  @OneToMany(() => Dealership, (dealership) => dealership.group)
  dealerships: Dealership[];
}
