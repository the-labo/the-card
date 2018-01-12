'use strict'

import React from 'react'
import { TheCard, TheTwitterCard, TheCardStyle } from 'the-card'

const snippet = `
<a class="twitter-grid" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">
National Park Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">

</script>
`

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheCardStyle/>
        <TheCard>
          <TheCard.Header>This is header</TheCard.Header>
          <TheCard.Body>This is body</TheCard.Body>
        </TheCard>

        <hr/>

        <TheTwitterCard snippet={snippet}>
          This is custom comment
        </TheTwitterCard>
      </div>

    )
  }
}

export default ExampleComponent
