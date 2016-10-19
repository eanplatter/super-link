import React from 'react'
import { Link } from 'react-router'

export default class SuperLink extends React.Component {
  parseTo(to) {
    let parser = document.getElementById('a')
    parser.href = to
    return parser
  }

  isInternal(toLocation) {
    return window.location.host === toLocation.host
  }

  const { to, children, ...rest } = this.props
  const loc = this.parseTo(to)
  const isInternal = this.isInternal(loc)
  if (isInternal) {
    return (
      <Link to={toLocation.pathname} {...rest}>
        {children}
      </Link>
    )
  } else {
    return (
      <a href={to} target="_blank" {...rest}>
        {children}
      </a>
    )
  }
}
