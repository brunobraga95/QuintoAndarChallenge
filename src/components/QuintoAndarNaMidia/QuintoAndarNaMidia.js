import React from 'react'
import Logo from '../Logo/Logo.js'
import css from './QuintoAndarNaMidia.css'
import midia from '../../img/midia.jpg'


const QuintoAndarNaMidia = (props) => {
  return (
    <div className="quinto-andar-na-midia">
      <h3>O QuintoAndar na mídia</h3>
      <div className="midia-organizations-wrapper">
        <a><img src={midia} /></a>
      </div>
    </div>	
  )
}
export default QuintoAndarNaMidia
