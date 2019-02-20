import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('tbluser')
export class UserEntity{
    @PrimaryGeneratedColumn() userId: number;
    @Column({ length: 75 }) userName:string;
    @Column({ length: 100 }) userEmail:string;
    @Column({ length: 100 }) userPassword:string;
    @Column('int') userMobile:number;
    @CreateDateColumn() userdob : Date;
    @Column('text') userGender : string;
    @CreateDateColumn() userCreatedBy : Date;
}