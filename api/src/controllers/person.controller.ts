import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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
  public async create(
    @Body() body: PersonSchema,
  ): Promise<{ data: PersonModel }> {
    const personCreated = await this.model.save(body);
    return { data: personCreated };
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: PersonModel }> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException(`Pessoa não encontrada com o id  ${id}`);
    }

    return { data: person };
  }

  @Get()
  public async getAll(): Promise<{ data: PersonModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonSchema,
  ): Promise<{ data: PersonModel }> {
    const person = await this.model.findOne({ where: { id } });

    if (!person) {
      throw new NotFoundException(`Pessoa não encontrada com o id  ${id}`);
    }

    await this.model.update({ id }, body);
    return { data: await this.model.findOne({ where: { id } }) };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Deleted !' };
  }
}
