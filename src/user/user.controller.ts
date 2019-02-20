import { Controller, Get, Delete, Param, Post, Put, Body } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserDTO } from "./user.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getUsers() {
        return await this.userService.showAll();
    }
    
    @Get(':id')
    async getUserbyId(@Param('id') id: number){
        return await this.userService.getUserData(id);
    }

    @Post('createuser')
    async createUser(@Body() data: UserDTO){
        return this.userService.createUser(data);
    }

    @Put('updateuser/:id')
    async updateUser(@Param('id') id: number,@Body() data: Partial<UserDTO>){
        return this.userService.updateUser(id, data);
    }

    @Delete('deleteuser/:id')
    async deleteUser(@Param('id') id: number){
        return this.userService.deleteUser(id);
    }
}