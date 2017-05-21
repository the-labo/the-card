/**
 * Test for TheTwitterCard.
 * Runs with mocha.
 */
'use strict'

import TheTwitterCard from '../lib/TheTwitterCard'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-twitter-card', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheTwitterCard />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
