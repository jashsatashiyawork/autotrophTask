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
import ticketService from './ticket.service';
import ticketEntity from './entities/ticket.entity';
import CreateEventDto from './dto/createEvent.dto';
import UpdateUserDto from '@components/users/dto/updateUser.dto';

@ApiTags('Ticket')
@ApiBearerAuth()
@Controller('tickets')
export default class TicketController {
  constructor(private readonly ticketService: ticketService) { }

  @ApiOkResponse({
    type: ticketEntity,
    description: '200. Success. Returns a ticket',
  })
  @ApiNotFoundResponse({
    description: '404. NotFoundException. Ticket was not found',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Post(':id')
  @UseGuards(JwtAuthGuard)
  async bookTicket(
    @Param('id', ParseObjectIdPipe, ) id: string,
    @Body() userId: string,
  ): Promise<ticketEntity | never> {
    const foundTicket = await this.ticketService.createTicket(id, userId);

    if (!foundTicket) {
      throw new NotFoundException('The ticket does not exist');
    }

    return foundTicket;
  }

  @ApiOkResponse({
    type: [ticketEntity],
    description: '200. Success. Returns all tickets',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getAllEvents(@Param('id', ParseObjectIdPipe ) id: string,): Promise<ticketEntity[] | []> {
    const foundTickets = await this.ticketService.getAll(id);

    return foundTickets;
  }

  @ApiOkResponse({
    type: [ticketEntity],
    description: '200. Success. Returns all Ticket',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedException.',
  })
  @Put(':id')
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({ description: '200, Success' })
  @ApiInternalServerErrorResponse({ description: '500. InternalServerError' })
  @Post('cancel')
  async updateEvent(@Param('id', ParseObjectIdPipe) id: string,): Promise<OkResponseDto> {
    await this.ticketService.update(id)

    return {
      message: 'The item was created successfully',
    }
  }
}
