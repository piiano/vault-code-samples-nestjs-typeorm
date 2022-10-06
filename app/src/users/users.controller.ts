import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateInput } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Add a new user',
    description: 'Add a new user',
    operationId: 'add-user',
  })
  @ApiResponse({ status: 201, description: 'User created', type: User })
  @ApiResponse({
    status: 200,
    description: 'User existed, social login',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({
    status: 409,
    description: 'Conflict User with given Email already exists.',
  })
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(ClassSerializerInterceptor)
  public async create(@Body() input: UserCreateInput): Promise<User> {
    return await this.usersService.create(input);
  }

  @Get()
  @ApiOperation({
    summary: 'List all users',
    description: 'Return all users',
    operationId: 'list-users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('find')
  @ApiOperation({
    summary: 'Find users',
    description: 'Find users',
    operationId: 'find-users',
  })
  find(@Query('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find user by ID',
    description: 'Returns a single user',
    operationId: 'get-user-by-id',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update an existing user',
    description: 'Update an existing user by ID',
    operationId: 'update-user',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a user',
    description: 'Delete an existing user by ID',
    operationId: 'delete-user',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
