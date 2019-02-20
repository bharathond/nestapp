import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "./user.entity";
import { UserDTO } from "./user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    async showAll(page: number = 1) {
        const users = await this.userRepository.find({
            //   relations: ['ideas', 'bookmarks'],
            take: 25,
            skip: 25 * (page - 1),
        });
        return users;
    }

    async getUserData(id : number){
        const getuser = await this.userRepository.findOne({
            where: {userId: id}
        });
        return getuser;
    }

    async createUser(data: Partial<UserDTO>){
        const createuser = await this.userRepository.create(data);
        await this.userRepository.save(createuser);
        return createuser;
    }

    async updateUser(id:number,data : Partial<UserDTO>){
        await this.userRepository.update({userId : id},data);
        const updateuser = await this.userRepository.findOne({
            where: {userId: id}
        });
        return updateuser;
    }

    async deleteUser(id:number){
        await this.userRepository.delete({userId: id});
        return { deleted: true };
    }

}