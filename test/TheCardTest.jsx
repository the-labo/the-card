/**
 * Test for TheCard.
 * Runs with mocha.
 */
'use strict'

import TheCard from '../lib/TheCard'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-card', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheCard />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
