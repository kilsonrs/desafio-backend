'use strict'
const moment = require('moment')
const Enrollment = use('App/Models/Enrollment')
const Meetapp = use('App/Models/Meetapp')
const Database = use('Database')
const UserTopic = use('App/Models/UserTopic')
const MeetTopic = use('App/Models/MeetTopic')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with enrollments
 */
class EnrollmentController {
  /**
   * Show a list of all enrollments.
   * GET enrollments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth, request, response, view }) {
    // const inscrito = await Enrollment.query()
    //   .where('user_id', auth.user.id)
    //   .with('meetups.files')
    //   .fetch()

    const Inscrito = await Meetapp.query()
      .whereHas('users', builder => {
        builder.where('user_id', auth.user.id)
      })
      .with('files')
      .fetch()

    const naoInscrito = await Meetapp.query()
      .where('date', '>', moment())
      .with('files')
      .fetch()

    const preferences = await Database.from('user_topics').pluck('topic_id')

    const recomendados = await MeetTopic.query()
      .whereIn('id', preferences)
      .with('meetups')
      .with('meetups.files')
      .fetch()

    // const preferences = await Database.from('meet_topics').pluck('meetapp_id')

    // const recomendados = await Meetapp.query()
    //   .where('date', '>', moment())
    //   .whereIn('id', preferences)
    //   .with('files')
    //   .fetch()

    // const recomendados = await User.query()
    //   .with('topics.meetups', builder => {
    //     builder.where('date', '>', moment()).with('files')
    //   })
    //   .fetch()

    // const recomendados = await Meetapp.query()
    //   .where('id', builder => {
    //     builder.whereIn(auth.user.topics().fetch())
    //   })
    //   .fetch()

    // const recomendados = await auth.user.topics().fetch()

    /// //////

    // const qb = await Database.table('meetapps').leftJoin(
    //   'enrollments',
    //   'meetapps.id',
    //   'enrollments.meetapp_id'
    // )

    // const qb2 = await Database.table('meetapps')
    //   .leftJoin('enrollments', function () {
    //     this.on('meetapps.id', 'enrollments.meetapp_id')
    //   })
    //   .where('enrollments.meetapp_id', null)
    /// //////
    // const usersTest = [4]
    // const query = await Database.from('meetapps').whereNotIn('id', usersTest)

    // const result = { Inscrito, naoInscrito }

    // return result
    return recomendados
  }

  /**
   * Create/save a new enrollment.
   * POST enrollments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, params }) {
    const join = await Enrollment.create({
      user_id: auth.user.id,
      meetapp_id: params.id
    })

    return join
  }

  /**
   * Display a single enrollment.
   * GET enrollments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {}

  /**
   * Update enrollment details.
   * PUT or PATCH enrollments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {}

  /**
   * Delete a enrollment with id.
   * DELETE enrollments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = EnrollmentController
