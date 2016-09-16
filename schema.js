import { buildSchema } from 'graphql';
import { Todos } from './data';

const schema = buildSchema(`
  type TodoType {
    _id: Int
    task: String
    completed: Boolean
  }
  type Query {
    todos: [TodoType]
  }
  type Mutation {
    createTodo(_id: Int!, task: String!): TodoType
  }
  `);

const root = {
    // eslint-disable-next-line
    todos: () => {
      return Todos;
    },
    // eslint-disable-next-line
    createTodo: (args) => {
      const todo = {
        _id: args._id,
        task: args.task,
        completed: false,
      };
      Todos.push(todo);
      return todo;
    },
};

export { schema, root };
