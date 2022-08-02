import  { expect } from "earljs"
import { test } from "uvu"

import {
  baz,
  foo
} from '../../main/ts'

test('', () => {
  expect(foo).toEqual('bar')
  expect(baz).toLooseEqual({})
})

test.run()
