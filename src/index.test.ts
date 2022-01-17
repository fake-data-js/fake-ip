import { expect, test } from 'vitest'
import { fakeIP } from '@/index'

test('fakeIP', () => {
  expect(typeof fakeIP()).toBe('string')
})
