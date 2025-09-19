import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import TicketController from './ticket.controller';
import TicketService from './ticket.service';
import TicketEntity from './entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TicketEntity])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService],
})
export default class TicketModule { }
