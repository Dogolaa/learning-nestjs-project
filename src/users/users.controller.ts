import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllUsers(@Res() response: Response) {
    return response.status(200).json(this.usersService.findAllUsers());
  }

  //   @Get(':id')
  //   findAllUSers(@Res() response: Response, @Param('id') id: string) {
  //     return response.status(200).json(this.usersService.findAllUsers());
  //   }

  @Post()
  async createUser(@Res() response: Response, @Body() userDTO: UsersDto) {
    const userCreated = await this.usersService.createUser(userDTO);
    return response.status(201).json(userCreated);
  }
}
