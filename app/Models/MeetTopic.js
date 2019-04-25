'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MeetTopic extends Model {
  meetups () {
    return this.belongsTo('App/Models/Meetup')
  }
}

module.exports = MeetTopic
