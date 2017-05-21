'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

const TWITTER_COLOR = '#1da1f2'

/** Style for TheCard */
const TheCardStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-card-style', className) }
            styles={ TheCardStyle.data(options) }
  />
)

TheCardStyle.displayName = 'TheCardStyle'
TheCardStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheCardStyle.defaultProps = {
  options: {}
}

TheCardStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    dominantColor = ThemeValues.dominantColor,
    textColor = ThemeValues.textColor,
    overlayBorderColor = ThemeValues.overlayBorderColor,
    overlayBackgroundColor = ThemeValues.overlayBackgroundColor,
    contentPadding = ThemeValues.contentPadding,
    contentWidth = ThemeValues.contentWidth
  } = options
  return Object.assign({}, ...[
    asStyleData('.the-card', {
      '&': {
        color: textColor,
        backgroundColor: overlayBackgroundColor,
        border: `1px solid ${overlayBorderColor}`,
        boxShadow: `2px 2px 4px rgba(0,0,0,0.33)`,
        borderRadius: '4px',
        margin: '16px 32px',
        maxWidth: contentWidth
      },
      '.the-card-header': {
        padding: `${contentPadding}px ${contentPadding * 2}px`,
        margin: 0,
        fontWeight: 'normal'
      },
      '.the-card-body': {
        padding: `${contentPadding}px ${contentPadding * 2}px`
      }
    }),
    asStyleData('.the-twitter-card', {
      '&': {
        backgroundColor: TWITTER_COLOR,
        border: `4px solid ${TWITTER_COLOR}`,
        padding: '4px'
      },
      '.the-twitter-card-snippet': {
        background: 'white',
        borderRadius: '4px'
      },
      '.the-twitter-card-inner': {
        color: 'white',
        fontSize: 'smaller',
        padding: '4px'
      },
      '.twitter-tweet': {
        margin: 0,
        overflow: 'hidden'
      }
    })
  ])
}

export default TheCardStyle
