import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
  const action = login('myUID');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'myUID'
  })
})

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})
