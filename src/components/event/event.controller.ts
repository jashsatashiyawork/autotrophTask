import {
  Controller,
  Body,
  Get,
  NotFoundException,
  Param,
  UseGuards,
  Post,
  Put,
  Delete
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiBearerAuth,
  ApiUnauthorizedResponse,
  ApiInternalServerErrorResponse
} from '@nestjs/swagger';
import JwtAuthGuard from '@guards/jwtAuth.guard';
import ParseObjectIdPipe from '@pipes/parseObjectId.pipe';
import eventService from './event.service';
import eventEntity from './entities/event.entity';
import CreateEventDto from './dto/createEvent.dto';
import UpdateUserDto from '@components/users/dto/updateUser.dto';

@ApiTags('Event')
@ApiBearerAuth()
@Controller('events')
export default class EventController {
  constructor(private readonly eventService: eventService) { }

  @ApiOkResponse({
    type: eventEntity,
    description: '200. Success. Returns a user',
  })
  @ApiNotFoundResponse({
    description: '404. NotFoundException. User was not found',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getById(
    @Param('id', ParseObjectIdPipe) id: string,
  ): Promise<eventEntity | never> {
    const foundEvent = await this.eventService.getById(id);

    if (!foundEvent) {
      throw new NotFoundException('The event does not exist');
    }

    return foundEvent;
  }

  @ApiOkResponse({
    type: [eventEntity],
    description: '200. Success. Returns all users',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllEvents(): Promise<eventEntity[] | []> {
    const foundEvents = await this.eventService.getAll();

    return foundEvents;
  }

  @ApiOkResponse({
    type: [eventEntity],
    description: '200. Success. Returns all users',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Put(':id')
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({ description: '200, Success' })
  @ApiInternalServerErrorResponse({ description: '500. InternalServerError' })
  @Post('update-event')
  async updateEvent(@Body() event: CreateEventDto, @Param('id', ParseObjectIdPipe) id: string,): Promise<OkResponseDto> {
    await this.eventService.update(id, event)

    return {
      message: 'The item was created successfully',
    }
  }

  @ApiOkResponse({
    type: eventEntity,
    description: '200. Success. Returns a user',
  })
  @ApiNotFoundResponse({
    description: '404. NotFoundException. User was not found',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteById(
    @Param('id', ParseObjectIdPipe) id: string,
  ): Promise<eventEntity | never> {
    const foundEvent = await this.eventService.deleteById(id);

    if (!foundEvent) {
      throw new NotFoundException('The event does not exist');
    }

    return foundEvent;
  }
}
