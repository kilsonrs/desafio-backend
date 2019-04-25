'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Inscription extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }
  meetups () {
    return this.belongsTo('App/Models/Meetup')
  }
}

module.exports = Inscription
