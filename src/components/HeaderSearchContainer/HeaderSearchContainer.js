import React from 'react'
import css from './HeaderSearchContainer.css'

const HeaderSearchContainer = (props) => {
  return (
    <div className="header-search-container" style={{...props.style}}>
      <h1 className="slogan">O jeito fácil de alugar e morar</h1>
      <h2 className="sub-slogan">Alugue rápido, sem fiador e com segurança!</h2>
      <div className='search-input-wrapper'>
        <input className="search-input" placeholder="Busque por bairro, rua ou código do imóvel"></input>
        <div className='search-button'/>
      </div>
      <h3 className="sub-slogan">Apartamente em São Paulo, ABC e Campinas!</h3>
    </div>
  )
}
export default HeaderSearchContainer
