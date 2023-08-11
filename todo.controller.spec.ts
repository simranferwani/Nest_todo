import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from 'src/entities/todo.entity';

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    todoController = module.get<TodoController>(TodoController);
    todoService = module.get<TodoService>(TodoService);
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result: Todo[] = [
        {
          id: '997e28cb-2af1-43cd-bcf8-fc286baaad04',
          title: 'Todo 1',
          description: 'Description 1',
          status: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
       
      ];
      jest.spyOn(todoService, 'findAll').mockResolvedValue(result);

      expect(await todoController.findAll()).toBe(result);
    });
  });


  describe('create', () => {
    it('should create a new todo', async () => {
      const createTodoDto: CreateTodoDto = { title: 'New Todo' };
      const createdTodo: Todo = {
        id: "997e28cb-2af1-43cd-bcf8-fc286baaad04",
        title: 'New Todo',
        description: '',
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      };
      jest.spyOn(todoService, 'create').mockResolvedValue(createdTodo);
  
      expect(await todoController.create(createTodoDto)).toBe(createdTodo);
    });
  });

  describe('remove', () => {
    it('should delete a todo', async () => {
      const id = "997e28cb-2af1-43cd-bcf8-fc286baaad04";
      jest.spyOn(todoService, 'remove').mockResolvedValue(undefined);

      expect(await todoController.remove(id)).toEqual({ deleted: true });
    });
  });
});
