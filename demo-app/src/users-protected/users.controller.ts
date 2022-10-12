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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProtectedUser } from './entities/user.entity';

@Controller('user-protected')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Add a new user',
    description: 'Add a new user',
    operationId: 'add-user-protected',
  })
  @ApiResponse({
    status: 201,
    description: 'User created',
    type: ProtectedUser,
  })
  @ApiResponse({
    status: 200,
    description: 'User existed, social login',
    type: ProtectedUser,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({
    status: 409,
    description: 'Conflict User with given Email already exists.',
  })
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(ClassSerializerInterceptor)
  public async create(@Body() input: UserCreateInput): Promise<ProtectedUser> {
    return await this.usersService.create(input);
  }

  @Get()
  @ApiOperation({
    summary: 'List all users',
    description: 'Return all users',
    operationId: 'list-users-protected',
  })
  findAll() {
    return this.usersService.listAll();
  }

  @Get('find')
  @ApiOperation({
    summary: 'Find users',
    description: 'Find users',
    operationId: 'find-users-protected',
  })
  find(@Query('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find user by ID',
    description: 'Returns a single user',
    operationId: 'get-user-by-id-protected',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update an existing user',
    description: 'Update an existing user by ID',
    operationId: 'update-user-protected',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateById(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a user',
    description: 'Delete an existing user by ID',
    operationId: 'delete-user-protected',
  })
  remove(@Param('id') id: string) {
    return this.usersService.deleteById(id);
  }
}
