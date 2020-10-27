

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up() {
    this.create('todos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title').notNullable()
      table.text('description').nullable()
      table.enum('status', ['todo', 'doing', 'done', 'cancel'])
      table.timestamps()
    })
  }

  down() {
    this.drop('todos')
  }
}

module.exports = TodoSchema
