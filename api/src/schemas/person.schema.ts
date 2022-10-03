import { IsInt, IsString, MaxLength, Min, IsEmail } from 'class-validator';

export class PersonSchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsInt()
  @Min(1)
  age: number;

  @IsString()
  @MaxLength(255)
  @IsEmail()
  email: string;
}
