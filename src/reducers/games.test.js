import chai, { expect } from 'chai';
import games from './games';

describe('games reducer', () => {
  const reducer = games
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
