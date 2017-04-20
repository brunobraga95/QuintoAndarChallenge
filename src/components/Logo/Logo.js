import React from 'react'
import css from './Logo.css'

const Logo = (props) => {
  return (
  	<div className="logo" style={{...props.styles}} >
      <img src="//d29k9pp6ge5sv1.cloudfront.net/searchStaticProducao/910/img/compressed/5a-logo.svg.gz" /> 	
    </div>
  )
}
export default Logo