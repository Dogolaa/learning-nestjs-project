import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UsersDto } from './users.dto';
import { UserDomain } from './user.domain';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers(@Res() response: Response) {
    const users = await this.usersService.findAllUsers();
    return response.status(200).json(users);
  }

  //   @Get(':id')
  //   findAllUSers(@Res() response: Response, @Param('id') id: string) {
  //     return response.status(200).json(this.usersService.findAllUsers());
  //   }

  //   @Post()
  //   async createUser(@Res() response: Response, @Body() userDTO: UsersDto) {
  //     const userCreated = await this.usersService.createUser(userDTO);
  //     return response.status(201).json(userCreated);
  //   }

  @Post()
  async createUser(@Res() response: Response, @Body() user: UserDomain) {
    const userCreated = await this.usersService.createUser(user);
    return response.status(201).json(userCreated);
  }

  //@Put(':id')


  @Delete(':id')
  async deleteUser(@Res() response: Response, @Param('id') id: string){
    const deletedUser = await this.usersService.deleteUser(id);
    return response.status(200).json(deletedUser);
  }
}
