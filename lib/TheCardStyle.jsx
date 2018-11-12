'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { asStyleData } from 'the-component-util'
import { TheStyle } from 'the-style'

const TWITTER_COLOR = '#1da1f2'

/** Style for TheCard */
const TheCardStyle = ({ className, id, options }) => (
  <TheStyle {...{ id }}
            className={classnames('the-card-style', className)}
            styles={TheCardStyle.data(options)}
  />
)

TheCardStyle.displayName = 'TheCardStyle'
TheCardStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheCardStyle.defaultProps = {
  options: {},
}

TheCardStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    contentPadding = ThemeValues.contentPadding,
    contentWidth = ThemeValues.contentWidth,
    dominantColor = ThemeValues.dominantColor,
    overlayBackgroundColor = ThemeValues.overlayBackgroundColor,
    overlayBorderColor = ThemeValues.overlayBorderColor,
    textColor = ThemeValues.textColor,
  } = options
  return Object.assign({}, ...[
    asStyleData('.the-card', {
      '.the-card-body': {
        padding: `${contentPadding}px ${contentPadding * 2}px`,
      },
      '.the-card-header': {
        fontWeight: 'normal',
        margin: 0,
        padding: `${contentPadding}px ${contentPadding * 2}px`,
      },
      '&': {
        backgroundColor: overlayBackgroundColor,
        border: `1px solid ${overlayBorderColor}`,
        borderRadius: '4px',
        boxShadow: `2px 2px 4px rgba(0,0,0,0.33)`,
        color: textColor,
        margin: '16px 32px',
        maxWidth: contentWidth,
      },
    }),
    asStyleData('.the-twitter-card', {
      '.the-twitter-card-inner': {
        color: 'white',
        fontSize: 'smaller',
        padding: '4px',
      },
      '.the-twitter-card-snippet': {
        background: 'white',
        borderRadius: '2px',
        padding: '4px',
      },
      '.twitter-tweet': {
        margin: 0,
        overflow: 'hidden',
      },
      '&': {
        backgroundColor: TWITTER_COLOR,
        border: `4px solid ${TWITTER_COLOR}`,
        padding: '4px',
      },
    })
  ])
}

export default TheCardStyle
