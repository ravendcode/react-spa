import React, { PropTypes } from 'react'
import Nav from './Nav'
import Home from './Home'
import gulpLogo from '../assets/images/gulp.svg'
import reactLogo from '../assets/images/react.svg'
import webpackLogo from '../assets/images/webpack-logo.png'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <header>
          <img src={gulpLogo} alt="Gulp Logo" className="gulp-logo" />
          <img src={reactLogo} alt="React Logo" className="react-logo" />
          <img src={webpackLogo} alt="Webpack Logo" className="webpack-logo" />
          <h1>React Webpack</h1>
        </header>
        <Nav />
        {this.props.children || <Home />}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

App.defaultProps = {
  children: null
}
