import * as bcrypt from 'bcrypt';

import { ObjectID } from 'mongodb';
import { Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import EventEntity from './entities/event.entity';
import UpdateEventDto from './dto/updateEvent.dto';
import CreateEventDto from './dto/createEvent.dto';

@Injectable()
export default class UsersService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) { }

  async create(event: CreateEventDto): Promise<EventEntity> {

    return this.eventRepository.save({
      title: event.title,
      description: event.description,
      location: event.location,
      createdBy: event.createdBy,
    });
  }

  getById(id: ObjectID): Promise<EventEntity> {
    return this.eventRepository.findOne({
      _id: new ObjectID(id),
    });
  }

  getAll(): Promise<EventEntity[] | []> {
    return this.eventRepository.find({});
  }

  async update(id: ObjectID,event: UpdateEventDto): Promise<EventEntity> {
    const updatEvent = await this.eventRepository.findOneAndUpdate(
      {_id: id},
      {
        title: event.title,
        description: event.description,
        location: event.location,
      },
      {
        new: true
      }
    );
    return updatEvent;
  }

  deleteById(id: ObjectID): Promise<EventEntity> {
    return this.eventRepository.findOneAndDelete({
      _id: new ObjectID(id),
    });
  }
}
