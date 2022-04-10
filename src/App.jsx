import React from 'react'

import IconFacebook from './assets/images/icon-facebook.svg'
import IconInstagram from './assets/images/icon-instagram.svg'
import IconTwitter from './assets/images/icon-twitter.svg'
import IconYoutube from './assets/images/icon-youtube.svg'
import IconUp from './assets/images/icon-up.svg'
import IconDown from './assets/images/icon-down.svg'


const SocialCard = ({IconSocial, Icon, BorderTop, Follows, ColortextToday='text-green-500', FollowsToday}) =>{
  return (
      <article className={`bg-[#F0F3FA] rounded-md border-t-8 ${BorderTop} p-8 text-center hover:brightness-90 cursor-pointer transition ease-in delay-75`}>
        <div className='flex justify-center items-center'>
          <img src={IconSocial}alt="IconFacebook" className='mr-2'/>
          <p className='font-semibold text-slate-700'>@lorem</p>
        </div>
          <p className='font-bold text-6xl'>{Follows}</p>
          <p className='tracking-[0.40em] text-gray-400 mb-2'>FOLLOWERS</p>
          <div className='flex justify-center items-center'>
            <img src={Icon} alt="iconUp" className='mr-2' />
            <p className={`font-semibold ${ColortextToday}`} >{FollowsToday}</p>
          </div>
        </article>
  )
}

const App = () => {
  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <div className=''>

      </div>
      <section className='grid gap-3 mx-4  md:grid-cols-4 :grid-cols-2'>
        <SocialCard IconSocial={IconFacebook} Icon={IconUp} BorderTop={'border-blue-600'} Follows='1987' FollowsToday='12' />
        <SocialCard IconSocial={IconTwitter} Icon={IconUp} BorderTop={'border-sky-500'}  Follows='1044' FollowsToday='99' />
        <SocialCard IconSocial={IconInstagram} Icon={IconUp} BorderTop={'border-orange-500'}  Follows='11k' FollowsToday='1099'/>
        <SocialCard IconSocial={IconYoutube} Icon={IconDown} BorderTop={'border-red-500'}  Follows='8239' FollowsToday='144' ColortextToday='text-red-500' />
      </section>
    </div>
  )
}

export default App