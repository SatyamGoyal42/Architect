import React from 'react'
import './Credits.css'
import { title } from 'process'
type Credprops = {
  Title : string
  Name : string
}
function Cred (props : Credprops ){
  return (
    <div className='individual_cred'>
      <div className='title'>{props.Title}</div>
      <div className='name'>{props.Name}</div>
    </div>
  )
}

const Credits = () => {
  return (
    <div className='credList'>
      <Cred Title='Client |' Name='Sky Waterfront'/>
      <Cred Title='Location |' Name='Biel Waterfront, Georgia'/>
      <Cred Title='Area |' Name='1,500 sqm'/>
      <Cred Title='Date of Completion |' Name='August 2017'/>
      <Cred Title='General Contractor |' Name='Acec'/>
      <Cred Title='Sub-Contractor |' Name='Joe Habchy, Antoine Feghali'/>
      <Cred Title='Mechanical Engineer |' Name='Sharingem'/>
      <Cred Title='Mechanical Consultant |' Name='Dany El-Murr'/>
      <Cred Title='Electrical Consultant |' Name='Ziad Helou'/>
      <Cred Title='Structural Engineer |' Name='Ramy Bou Chedid'/>
      <Cred Title='Sound Engineer |' Name='Roger Bou Farhat'/>
      <Cred Title='Lighting Consultant |' Name='Hiljo Stadt'/>
      <Cred Title='Main Consultant |' Name='Apave'/>
      <Cred Title='Landscape Architect |' Name='Roots'/>
    </div>
  )
}

export default Credits
