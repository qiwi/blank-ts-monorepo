import  { expect } from "earljs"
import { test } from "uvu"

import { foo } from '../../main/ts'

test('', () => {
  expect(foo).toEqual('bar')
})

test.run()
