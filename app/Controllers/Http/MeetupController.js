'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Meetup = use('App/Models/Meetup')

/**
 * Resourceful controller for interacting with meetups
 */
class MeetupController {
  /**
   * Show a list of all meetups.
   * GET meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const meetup = await Meetup.query()
      .with('topics')
      .with('files')
      .fetch()

    return meetup
  }

  /**
   * Create/save a new meetup.
   * POST meetup
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'title',
      'description',
      'location',
      'date',
      'file_id'
    ])

    const topics = request.input('topics')

    const meetup = await Meetup.create(data)

    await meetup.topics().sync(topics)

    return meetup
  }

  /**
   * Display a single meetup.
   * GET meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const meetup = await Meetup.findOrFail(params.id)

    await meetup.load('topics')

    await meetup.load('files')

    return meetup
  }

  /**
   * Update meetup details.
   * PUT or PATCH meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const meetup = await Meetup.findOrFail(params.id)

    const data = request.only([
      'title',
      'description',
      'location',
      'file_id',
      'date'
    ])

    meetup.merge(data)

    await meetup.save()

    return meetup
  }

  /**
   * Delete a meetup with id.
   * DELETE meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const meetup = await Meetup.findOrFail(params.id)

    await meetup.delete()
  }
}

module.exports = MeetupController
