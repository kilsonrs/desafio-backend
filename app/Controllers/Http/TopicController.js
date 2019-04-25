'use strict'

const Topic = use('App/Models/Topic')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with topics
 */
class TopicController {
  /**
   * Show a list of all topics.
   * GET topics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const topic = await Topic.query()
      .with('meetups')
      .fetch()

    return topic
  }

  /**
   * Create/save a new topic.
   * POST topics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['name'])

    const topic = await Topic.create(data)

    return topic
  }

  /**
   * Update topic details.
   * PUT or PATCH topics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const topic = await Topic.findOrFail(params.id)
    const data = request.only(['name'])

    topic.merge(data)

    await topic.save()

    return topic
  }

  /**
   * Delete a topic with id.
   * DELETE topics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const topic = await Topic.findOrFail(params.id)

    await topic.delete()
  }
}

module.exports = TopicController
