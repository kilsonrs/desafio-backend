'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TopicSchema extends Schema {
  up () {
    this.create('topics', table => {
      table.increments()
      table
        .string('name')
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('topics')
  }
}

module.exports = TopicSchema
