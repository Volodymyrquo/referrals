import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import arrow from '../assets/images/users/arrow.svg'
import monay from '../assets/images/users/monay.svg'
import st from '../assets/images/users/1st.svg'
import nd from '../assets/images/users/nd.svg'
import rd from '../assets/images/users/rd.svg'
import th from '../assets/images/users/th.svg'

const leadersSheet = [
  { place: '1', reward: st, sup: 'st', name: 'Jacob Jones', sum: '$252,750' },
  { place: '2', reward: nd, sup: 'nd', name: 'Floye Miles', sum: '$210,505' },
  { place: '3', reward: rd, sup: 'rd', name: 'Eleanor Pena', sum: '$150,750' },
  { place: '4', reward: th, sup: 'th', name: 'Arlene McCoy', sum: '$85,750' },
  { place: '5', reward: th, sup: 'th', name: 'Eleanor Pena', sum: '$75,750' },
  { place: '6', reward: th, sup: 'th', name: 'Arlene McCoy', sum: '$65,650' },
  { place: '7', reward: th, sup: 'th', name: 'Eleanor Pena', sum: '$55,550' },
  { place: '8', reward: th, sup: 'th', name: 'Arlene McCoy', sum: '$45,450' },
  { place: '9', reward: th, sup: 'th', name: 'Eleanor Pena', sum: '$35,350' },
  { place: '10', reward: th, sup: 'th', name: 'Arlene McCoy', sum: '$25,250' },
]

const BlockLeaderboard = () => {
  return (
    <div className='leaderboard-block'>
      <h3 className='leaderboard-block__title'>Leaderboard</h3>
      <table>
        <tbody>
          {leadersSheet.map((item) => (
            <tr key={uuidv4()}>
              <td>
                {item.place}{' '}
                <sup className='leaderboard-block__sup'>{item.sup}</sup>
              </td>
              <td>
                <img
                  src={item.reward}
                  className='leaderboard-block__img-coin'
                />
              </td>
              <td>{item.name}</td>
              <td>
                <img
                  className='leaderboard-block__img-coin'
                  src={monay}
                  alt=''
                />
                {item.sum}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href='/referrals' className='leaderboard-block__link'>
        Go to Leaderboard page
        <img src={arrow} alt='arrow' />
      </a>
    </div>
  )
}
export default BlockLeaderboard
