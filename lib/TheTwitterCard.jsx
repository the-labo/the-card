'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import TheCard from './TheCard'
import TheCardStyle from './TheCardStyle'

/**
 * Card for twitter
 */
class TheTwitterCard extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      children,
      className,
      snippet,
    } = props
    return (
      <TheCard {...htmlAttributesFor(props, { except: [ 'className' ] })}
               {...eventHandlersFor(props, { except: [] })}
               className={classnames('the-twitter-card', className)}
      >
        <div className='the-twitter-card-snippet'
             dangerouslySetInnerHTML={{ __html: snippet }}
        >
        </div>
        <div className='the-twitter-card-inner'>{children}</div>
      </TheCard>
    )
  }
}

TheTwitterCard.propTypes = {
  /** Tweet embed snippet */
  snippet: PropTypes.string.isRequired,
}

TheTwitterCard.defaultProps = {}

TheTwitterCard.displayName = 'TheTwitterCard'

export default TheTwitterCard
