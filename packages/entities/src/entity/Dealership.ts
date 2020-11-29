import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Group } from "./Group";
import { Role } from "./Role";
import { ActivationState } from "../dto";

@Entity()
export class Dealership {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  currentDealership: string;
  @ManyToOne(() => Group, (group) => group.dealerships)
  group: Group;
  @Column({ type: "varchar", length: 200 })
  name: string;
  @Column({ type: "varchar", length: 200 })
  brand: string;
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
  @Column({ type: "varchar", length: 200 })
  slug: string;
  @Column({ type: "varchar", length: 200 })
  dealerId: string;
  @Column({
    type: "enum",
    enum: ActivationState,
    default: ActivationState.ENABLED,
  })
  activation: ActivationState;
  @Column({ type: "varchar", length: 200 })
  roleName: string;
  @Column({ type: "varchar", length: 200 })
  dealershipName: string;
  @Column({ type: "varchar", length: 200 })
  dealershipId: string;
  @Column((type) => Role)
  role: Role;
}
