import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('tickets')
export default class EventEntity {
  @ApiProperty({ type: String })
  @ObjectIdColumn()
  _id: ObjectID

  @ApiProperty({ type: String })
  @ObjectIdColumn()
  eventId: ObjectID

  @ApiProperty({ type: String })
  @ObjectIdColumn()
  userId: ObjectID

  @ApiProperty({ type: String })
  @Column()
  status: string
}
