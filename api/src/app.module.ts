import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';
import connectionOptions from '../ormconfig';

const IMPORTED_MODULES = [PersonModule];

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), ...IMPORTED_MODULES],
})
export class AppModule {}
