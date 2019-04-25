'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Topic extends Model {
  users () {
    return this.belongsToMany('App/Models/User')
  }
  meetups () {
    return this.belongsToMany('App/Models/Meetup').pivotModel(
      'App/Models/MeetTopic'
    )
  }
}

module.exports = Topic
