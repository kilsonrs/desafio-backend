'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const User = use('App/Models/User')
const Topic = use('App/Models/Topic')
// const Meetup = use('App/Models/Meetup')

class DatabaseSeeder {
  async run () {
    // Users

    await User.create({
      name: 'Kilson',
      email: 'kilson@kilson.com.br',
      password: '123456'
    })

    await User.create({
      name: 'Diego',
      email: 'diego@diego.com.br',
      password: '123456'
    })

    // Front-end

    const front = await Topic.create({
      name: 'Front-end'
    })

    await front.meetups().create({
      title: 'ReactJS',
      description: 'Meetup de ReactJS',
      date: '2019-04-25 17:56:39',
      location: 'Brasília'
    })

    await front.meetups().create({
      title: 'ReactJS UI',
      description: 'UI/UX no ReactJS',
      date: '2019-04-25 17:56:39',
      location: 'Brasília'
    })

    // Back-end

    const backend = await Topic.create({
      name: 'Back-end'
    })

    await backend.meetups().create({
      title: 'NodeJS',
      description: 'Meetup de NodeJS',
      date: '2019-04-25 17:56:39',
      location: 'Belo Horizonte'
    })

    await backend.meetups().create({
      title: 'NodeJS Frameworks',
      description: 'NodeJS frameworks',
      date: '2019-04-25 17:56:39',
      location: 'Belo Horizonte'
    })

    // Native

    const native = await Topic.create({
      name: 'Mobile'
    })

    await native.meetups().create({
      title: 'React Native',
      description: 'Meetup de React Native',
      date: '2019-04-25 17:56:39',
      location: 'Ceará'
    })

    await native.meetups().create({
      title: 'React Native UI',
      description: 'UI/UX no React Native',
      date: '2019-04-25 17:56:39',
      location: 'Ceará'
    })

    // DevOps

    const devops = await Topic.create({
      name: 'DevOps'
    })

    await devops.meetups().create({
      title: 'DevOps',
      description: 'O que é DevOps',
      date: '2019-04-25 17:56:39',
      location: 'Bahia'
    })

    await devops.meetups().create({
      title: 'DevOps AWS',
      description: 'Meetup de DevOps AWS',
      date: '2019-04-25 17:56:39',
      location: 'Bahia'
    })

    // Gestão

    const gestao = await Topic.create({
      name: 'Gestão'
    })

    await gestao.meetups().create({
      title: 'Gestão',
      description: 'O que é Gestão',
      date: '2019-04-25 17:56:39',
      location: 'Florianópolis'
    })

    await gestao.meetups().create({
      title: 'Gestão Financeira',
      description: 'Meetup de Gestão',
      date: '2019-04-25 17:56:39',
      location: 'Florianópolis'
    })

    // Marketing

    const marketing = await Topic.create({
      name: 'Marketing'
    })

    await marketing.meetups().create({
      title: 'Marketing',
      description: 'O que é Marketing',
      date: '2019-04-25 17:56:39',
      location: 'São Paulo'
    })

    await marketing.meetups().create({
      title: 'Marketing multinível',
      description: 'Meetup de Marketing',
      date: '2019-04-25 17:56:39',
      location: 'São Paulo'
    })
  }
}

module.exports = DatabaseSeeder
