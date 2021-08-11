import React from 'react'
import 'common-library/src/assets/scss/styles.scss'
import BlockCalculator from './components/BlockCalculator.jsx'
import BlockCode from './components/BlockCode.jsx'
import BlockInviteUsers from './components/BlockInviteUsers.jsx'
import BlockLeaderboard from './components/BlockLeaderboard.jsx'
import BlockQRCode from './components/BlockQRCode.jsx'

const App = () => {
  return (
    <div style={{ padding: '30px' }}>
      <section className='referrals-page__header'>
        <div className='referrals-page__inner'>
          <BlockCalculator />
          <BlockCode />
        </div>
        <BlockLeaderboard />
      </section>
      <BlockQRCode />
      <BlockInviteUsers />
    </div>
  )
}

export default App
