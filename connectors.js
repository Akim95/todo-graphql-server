import Sequelize from 'sequelize';

// create sql connection
const db = new Sequelize('Todos', 'username', 'password', {
  host: 'localhost',
  dialect: 'mariadb',
});

// todos model
const TodoModel = db.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  task: {
    type: Sequelize.STRING,
  },
  completed: {
    type: Sequelize.BOOLEAN,
  },
});

const Todos = db.models.todos;

// export todos model
export { Todos };
