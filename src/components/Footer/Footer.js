import React from 'react'
import Logo from '../Logo/Logo.js'
import css from './Footer.css'

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <div className="top-sub-footer-wrapper">
      <div className="top-sub-footer">
        <div className="logo-wrapper">
      	  <Logo styles={{width: '240px', height: '40px'}} />
      	</div>
      	<div className="top-sub-footer-naviation-wrapper">
      	  <div>
      	    <ul className='top-sub-footer-naviation-list'>
      	      <li className='top-sub-footer-naviation-title'>QUANTO COBRAR?</li>
      	      <li><a>Calcule seu aluguel</a></li>
      	    </ul>
      	    <ul className='top-sub-footer-naviation-list'>
      	      <li className='top-sub-footer-naviation-title'>NAVEGUE</li>
      	      <li><a>Todos os imóveis</a></li>
      	      <li><a>Imóveis em São Paulo</a></li>
      	      <li><a>Imóveis em Campinas</a></li>
      	    </ul>
      	  </div>
      	  <div>
      	    <ul className='top-sub-footer-naviation-list'>
      	      <li className='top-sub-footer-naviation-title'>COMO FUNCIONA</li>
      	      <li><a>Para você corretor</a></li>
      	      <li><a>Para você inquilino</a></li>
      	      <li><a>Para você proprietário</a></li>
      	      <li><a>Indique um imóvel</a></li>
      	      <li><a>Ajuda</a></li>
      	    </ul>
      	  </div>
      	  <div>
      	    <ul className='top-sub-footer-naviation-list'>
      	      <li className='top-sub-footer-naviation-title'>O QUINTO ANDAR</li>
      	      <li><a>Quem somos</a></li>
      	      <li><a>Carreiras</a></li>
      	      <li><a>Imprensa</a></li>
      	      <li><a>Fale conosco</a></li>
      	    </ul>
      	  </div>
      	  <div>
      	    <ul className='top-sub-footer-naviation-list'>
      	      <li className='top-sub-footer-naviation-title'>FIQUE CONECTADO</li>
      	      <li><a>Quem somos</a></li>
      	      <li><a>Carreiras</a></li>
      	      <li><a>Imprensa</a></li>
      	      <li><a>Fale conoscp</a></li>
      	    </ul>
      	  </div>
      	</div>
      </div>
      <div className="social-networks-links-wrapper">
        <div className="social-networks-links">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
         <div className="helpful-links">
           <span>Quem somos</span>
           <span>Carreiras</span>
           <span>Fale conosco</span>
           <span>Ajuda</span>
         </div>       
      </div>
      </div>
      <div className="bottom-sub-footer">
        <div className="sub-footer-list">
          <span>Termos de uso</span>
          <span>Politica de privacidade</span>
          <span>® Quinto Andar Serviços Imobiliários Ltda. - CRECI-SP J24.344</span>
        </div>
      </div>
    </div>	
  )
}
export default Footer
