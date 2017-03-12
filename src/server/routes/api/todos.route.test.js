import expect from 'expect'
import request from 'supertest'
import app from '../../app'
import { todos } from './todos.route'

describe(__filename, () => {
  describe('#GET /api/todos', () => {
    it('should get all todos', (done) => {
      request(app)
        .get('/api/todos')
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(todos.length)
        })
        .end(done)
    })
  })
})
