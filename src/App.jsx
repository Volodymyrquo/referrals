import React from 'react'
import BlockCalculator from './components/BlockCalculator'
import BlockCode from './components/BlockCode'
import BlockInviteUsers from './components/BlockInviteUsers'
import BlockLeaderboard from './components/BlockLeaderboard'
import BlockQRCode from './components/BlockQRCode'

const App = () => {
  return (
    <div>
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
