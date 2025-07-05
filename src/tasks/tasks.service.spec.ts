import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should create and retrieve a task', () => {
    const task = service.create({ title: 'Test', description: 'Hello' });
    expect(service.findOne(task.id)).toEqual(task);
  });

  it('should throw on unknown ID', () => {
    expect(() => service.findOne(999)).toThrow();
  });
});
