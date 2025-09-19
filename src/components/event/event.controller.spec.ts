import { Test, TestingModule } from '@nestjs/testing'
import EventController from '@components/users/event.controller'
import EventService from '@components/users/event.service'

describe('Event Controller', () => {
  let controller: EventController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [
        {
          provide: EventService,
          useValue: {},
        },
      ],
    }).compile()

    controller = module.get<EventController>(EventController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
