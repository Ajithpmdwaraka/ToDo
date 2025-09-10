import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schema/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    delete(id: string): Promise<void>;
}
