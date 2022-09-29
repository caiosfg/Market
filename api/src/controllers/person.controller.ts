import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/person')
export class PersonController {
  @Post()
  public create(): any {
    return { data: 'Created !' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'Get One !' };
  }

  @Get()
  public getAll(): any {
    return { data: 'Get All !' };
  }

  @Put(':id')
  public update(): any {
    return { data: 'Update !' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Deleted !' };
  }
}
