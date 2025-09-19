import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, MinLength, IsString } from 'class-validator'


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
}
