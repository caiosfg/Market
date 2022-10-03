import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from 'src/schemas/person.schema';
import { Repository } from 'typeorm';

@Controller('/person')
export class PersonController {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}

  @Post()
  public create(@Body() body: PersonSchema): any {
    console.log(body);
    return { data: 'Created !' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'Get One !' };
  }

  @Get()
  public async getAll(): Promise<{ data: PersonModel[] }> {
    const list = await this.model.find();
    return { data: list };
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
