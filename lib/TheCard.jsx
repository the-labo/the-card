'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'

/**
 * Card of the-component
 */
class TheCard extends React.PureComponent {
  static Body (props) {
    const { children, className } = props
    return (
      <div {...htmlAttributesFor(props, { except: ['className'] })}
           {...eventHandlersFor(props, { except: [] })}
           className={classnames('the-card-body', className)}>
        {children}
      </div>
    )
  }

  static Header (props) {
    const { children, className } = props
    return (
      <h3 {...htmlAttributesFor(props, { except: ['className'] })}
          {...eventHandlersFor(props, { except: [] })}
          className={classnames('the-card-header', className)}>
        {children}
      </h3>
    )
  }

  render () {
    const s = this
    const { props } = s
    let {
      children,
      className,
    } = props
    return (
      <div {...htmlAttributesFor(props, { except: ['className'] })}
           {...eventHandlersFor(props, { except: [] })}
           className={classnames('the-card', className)}
      >
        {children}
      </div>
    )
  }
}

TheCard.propTypes = {}

TheCard.defaultProps = {}

TheCard.displayName = 'TheCard'

export default TheCard
