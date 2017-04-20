import React from 'react'
import css from './TopRightMenu.css'

const TopRightMenu = (props) => {
  return (
    <div className="top-right-menu">
      <div className="top-right-buttons anunciar-button">
        <a href="#">Anunciar Imovel</a>
      </div>
      <div className="top-right-buttons favorites-button">
        <img src="//d29k9pp6ge5sv1.cloudfront.net/searchStaticProducao/910/img/compressed/5a-favoritos-new.svg.gz" />
        <a href="#">Favorites</a>
      </div>
      <div className="divider"/>
      <div className="top-right-buttons enter-button">
        <a href="#">Entrar</a>
      </div>
    </div>
  )
}
export default TopRightMenu