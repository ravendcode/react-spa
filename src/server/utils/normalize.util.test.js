import expect from 'expect'
import { normalizePort } from './normalize.util'

describe(__filename, () => {
  describe('#normalizePort()', () => {
    it('should return number', () => {
      expect(normalizePort('3000')).toBe(3000).toBeA('number')
      expect(normalizePort('test')).toBe('test').toBeA('string')
    })
  })
})
