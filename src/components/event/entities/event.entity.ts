import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('events')
export default class EventEntity {
  @ApiProperty({ type: String })
  @ObjectIdColumn()
  _id: ObjectID

  @ApiProperty({ type: String })
  @Column()
  title: string

  @ApiProperty({ type: String })
  @Column()
  description: string

  @ApiProperty({ type: Date })
  @Column()
  date: boolean

  @ApiProperty({ type: String })
  @Column()
  location: string

  @ApiProperty({ type: String })
  @ObjectIdColumn()
  createdBy: ObjectID
}
