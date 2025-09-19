import { IsNotEmpty, MinLength, IsString, IsEmail, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export default class CreateEventDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly title: string

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly description: string

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @MinLength(1)
  readonly location: string

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @MinLength(1)
  readonly createdBy: string
}
