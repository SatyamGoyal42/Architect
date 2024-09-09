import React from 'react'
import UpperMid from '../../components/Individual_projectspage/UpperMid/UpperMid'
import LowerMid from '../../components/Individual_projectspage/LowerMid/LowerMid'
import Mid from '../../components/Individual_projectspage/Mid/Mid'
import Hero from '../../components/Individual_projectspage/Hero/Hero'
import Credits from '../../components/Individual_projectspage/Credits/Credits'
import './Ind_page.css'
const Ind_page = () => {
  return (
    <div className='Ind_page'>
      <Hero/>
      <UpperMid/>
      <Mid/>
      <LowerMid/>
      <Credits/>
    </div>
  )
}

export default Ind_page
