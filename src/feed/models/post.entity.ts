import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed_ post')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    user_id: string;

    @Column({default: ''})
    full_name: string;

    @Column()
    email: string;

    @Column()
    contact: number;
}