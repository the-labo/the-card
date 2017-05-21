'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheCardStyle from './TheCardStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Card of the-component
 */
class TheCard extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children
    } = props
    return (
      <div {...htmlAttributesFor(props, { except: [ 'className' ] })}
           {...eventHandlersFor(props, { except: [] })}
           className={classnames('the-card', className)}
      >
        {children}
      </div>
    )
  }

  static Header (props) {
    const { className, children } = props
    return (
      <h3 {...htmlAttributesFor(props, { except: [ 'className' ] })}
          {...eventHandlersFor(props, { except: [] })}
          className={classnames('the-card-header', className)}>
        {children}
      </h3>
    )
  }

  static Body (props) {
    const { className, children } = props
    return (
      <div {...htmlAttributesFor(props, { except: [ 'className' ] })}
           {...eventHandlersFor(props, { except: [] })}
           className={classnames('the-card-body', className)}>
        {children}
      </div>
    )
  }
}

TheCard.Style = TheCardStyle

TheCard.propTypes = {}

TheCard.defaultProps = {}

TheCard.displayName = 'TheCard'

export default TheCard
