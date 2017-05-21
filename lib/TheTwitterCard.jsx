'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheCard from './TheCard'
import TheCardStyle from './TheCardStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Card for twitter
 */
class TheTwitterCard extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      snippet,
      children
    } = props
    return (
      <TheCard {...htmlAttributesFor(props, { except: [ 'className' ] })}
               {...eventHandlersFor(props, { except: [] })}
               className={classnames('the-twitter-card', className)}
      >
        <div dangerouslySetInnerHTML={{ __html: snippet }}
             className='the-twitter-card-snippet'
        >
        </div>
        <div className='the-twitter-card-inner'>{children}</div>
      </TheCard>
    )
  }
}

TheTwitterCard.propTypes = {
  /** Tweet embed snippet */
  snippet: PropTypes.string.isRequired
}

TheTwitterCard.defaultProps = {}

TheTwitterCard.displayName = 'TheTwitterCard'

export default TheTwitterCard
