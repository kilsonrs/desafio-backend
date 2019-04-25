'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  topics () {
    return this.belongsToMany('App/Models/Topic').pivotModel(
      'App/Models/MeetTopic'
    )
  }
  files () {
    return this.belongsTo('App/Models/File')
  }
  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/Inscription'
    )
  }
}

module.exports = Meetup
