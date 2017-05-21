/**
 * Test for TheCardStyle.
 * Runs with mocha.
 */
'use strict'

import TheCardStyle from '../lib/TheCardStyle'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-card-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheCardStyle />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
