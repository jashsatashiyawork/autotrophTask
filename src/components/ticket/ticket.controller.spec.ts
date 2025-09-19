import { Test, TestingModule } from '@nestjs/testing'
import TicketController from '@components/ticket/ticket.controller'
import TicketService from '@components/ticket/ticket.service'

describe('Ticket Controller', () => {
  let controller: TicketController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [
        {
          provide: TicketService,
          useValue: {},
        },
      ],
    }).compile()

    controller = module.get<TicketController>(TicketController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
