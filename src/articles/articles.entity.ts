import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Articles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;
}