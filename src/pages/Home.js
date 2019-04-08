import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { Header } from 'commons'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header header={<FormattedMessage id="app.home.title" />} showBack showMore />
        <ul style={{ fontSize: '20px' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clockRecord">打卡记录</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
