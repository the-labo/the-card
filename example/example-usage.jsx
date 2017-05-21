'use strict'

import React from 'react'
import { TheCard, TheTwitterCard, TheCardStyle } from 'the-card'

const snippet = `
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">【ぺんぺん】むにっ💓聞こえなーい👂　!????  メイちゃん最後の何ポーズ? <a href="https://twitter.com/hashtag/%E9%B3%A5%E7%BE%BD%E6%B0%B4%E6%97%8F%E9%A4%A8?src=hash">#鳥羽水族館</a>　<a href="https://twitter.com/hashtag/%E3%83%A9%E3%83%83%E3%82%B3?src=hash">#ラッコ</a> <a href="https://t.co/gxjmouCl4R">pic.twitter.com/gxjmouCl4R</a></p>&mdash; 鳥羽水族館（TOBA　AQUARIUM） (@TOBA_AQUARIUM) <a href="https://twitter.com/TOBA_AQUARIUM/status/865753937319649280">2017年5月20日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
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
