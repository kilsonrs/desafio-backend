'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetTopicSchema extends Schema {
  up () {
    this.create('meet_topics', table => {
      table.increments()
      table
        .integer('meetup_id')
        .unsigned()
        .references('id')
        .inTable('meetups')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('topic_id')
        .unsigned()
        .references('id')
        .inTable('topics')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('meet_topics')
  }
}

module.exports = MeetTopicSchema
