import { buildSchema } from 'graphql';
import { Todos } from './connectors';

const schema = buildSchema(`
  type TodoType {
    id: Int
    task: String
    completed: Boolean
  }
  type Query {
    todos: [TodoType]
    hello: String
  }
  type Mutation {
    createTodo(id: Int!, task: String!): TodoType
  }
  `);

const root = {
    // eslint-disable-next-line
    todos: () => {
      return Todos.findAll({ order: 'createdAt DESC' });
    },
    // eslint-disable-next-line
    createTodo: (args) => {
      const todo = {
        id: args.id,
        task: args.task,
        completed: false,
      };
      Todos.create(todo);
      return todo;
    },
};

export { schema, root };
