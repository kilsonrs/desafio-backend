'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.get('/files/:id', 'FileController.show')
  Route.post('/users', 'UserController.store')
})

Route.group(() => {
  Route.get('/users', 'UserController.show')
  Route.put('/users', 'UserController.update')
  Route.post('meetups/:id/files', 'FileController.store')
  Route.post('meetups/:id/joins', 'EnrollmentController.store')
  Route.resource('meetups', 'MeetupController').apiOnly()
  Route.resource('topics', 'TopicController').apiOnly()
  Route.resource('inscriptions', 'InscriptionController').apiOnly()
}).middleware('auth')
