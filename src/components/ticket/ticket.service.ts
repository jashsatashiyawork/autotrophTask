import { ObjectID } from 'mongodb';
import { Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import TicketEntity from './entities/ticket.entity';

@Injectable()
export default class TicketsService {
  constructor(
    @InjectRepository(TicketEntity)
    private readonly ticketRepository: Repository<TicketEntity>,
  ) { }

  createTicket(id: ObjectID, userId: string): Promise<TicketEntity> {
    return this.ticketRepository.save({
      eventId: id,
      userId: userId,
      status: "booked"
    });
  }

  getAll(id: string): Promise<TicketEntity[] | []> {
    return this.ticketRepository.find({userId: id});
  }

  async update(id: ObjectID): Promise<TicketEntity> {
    const updatTicket = await this.ticketRepository.findOneAndUpdate(
      { _id: id },
      {
        status: "canceled"
      },
      {
        new: true
      }
    );
    return updatTicket;
  }
}
