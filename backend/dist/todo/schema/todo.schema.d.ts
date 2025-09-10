import { Document } from 'mongoose';
export type TodoDocument = Todo & Document;
export declare class Todo {
    title: string;
    description?: string;
    completed: boolean;
}
export declare const TodoSchema: import("mongoose").Schema<Todo, import("mongoose").Model<Todo, any, any, any, Document<unknown, any, Todo, any, {}> & Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Todo, Document<unknown, {}, import("mongoose").FlatRecord<Todo>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Todo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
