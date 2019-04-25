'use strict'

const User = use('App/Models/User')

class UserController {
  async show ({ auth }) {
    const user = await User.query('user.id', auth.user.id)
      .with('topics')
      .with('meetapps')
      .fetch()

    // findOrFail(auth.user.id)
    // await user.load('topics')
    // await user.load('meetapps')
    return user
  }
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])

    const user = User.create(data)

    return user
  }
  async update ({ auth, request }) {
    const user = await User.findOrFail(auth.user.id)
    const data = request.only(['name', 'email', 'password'])
    const topics = request.input('topics')

    await user.merge(data)

    await user.topics().sync(topics)

    await user.save()

    user.token = null
    user.token_created_at = null
    return user
  }
}

module.exports = UserController
