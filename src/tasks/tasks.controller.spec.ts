import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
    controller = new TasksController(service);
  });

  it('should create and return a task', () => {
    const dto = { title: 'Task', description: 'Do something' };
    const result = controller.create(dto);
    expect(result.title).toBe(dto.title);
  });

  it('should get all tasks', () => {
    controller.create({ title: 'A', description: 'B' });
    expect(controller.findAll().length).toBe(1);
  });
});
