import React from 'react'

export function FontAwesomeIcon({ icon, spin, ...rest }) {
  return <i className="fa" { ...rest }>{ icon }</i>
}
