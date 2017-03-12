import React from 'react'
import { Link, IndexLink } from 'react-router'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/todo" activeClassName="active">Todo</Link></li>
        </ul>
      </nav>
    </div>
  )
}
