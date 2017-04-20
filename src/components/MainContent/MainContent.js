import React from 'react'
import css from './MainContent.css'
import queroVisitar from '../../img/quero-visitar.jpg'
import visiteComOsMelhores from '../../img/visite-com-os-melhores.jpg'
import alugueSemFiador from '../../img/alugue-sem-fiador.jpg'


class MainContent extends React.Component {
  render () {
    return (
      <div className="main-content">
        <div className='how-it-works'>
          <span className='question'>Como funciona o QuintoAndar?</span>
          <div className='response'>
         	Usamos tecnologia e design para simplificar a locação de imóveis residenciais.
			Somos o jeito mais simples e seguro de alugar um imóvel.
          </div>
          <div className='horizontal-line' />
          <div className='content-cards-wrapper'>
            <div className='content-card'>
              <img src={queroVisitar} />
              <h2 className="title">Escolha e agende</h2>
              <h3 className="details">Fotos de qualidade, busca pelo mapa e filtros exclusivos. Fácil de usar para não precisar falar com ninguém.
               Você mesmo agenda pelo site as suas visitas com os melhores corretores.</h3>
            </div>
            <div className='content-card'>
              <img src={visiteComOsMelhores} />
              <h2 className="title">Visite com os melhores</h2>
              <h3 className="details">Corretores selecionados para garantir um atendimento bacana, fácil e eficaz. Visite os imóveis selecionados com quem sabe tudo sobre o lugar onde você quer morar.</h3>
            </div>
            <div className='content-card'>
              <img src={alugueSemFiador} />
              <h2 className="title">Alugue sem fiador</h2>
              <h3 className="details">O seguro-fiança é por nossa conta. Você não precisa se preocupar em pedir ajuda pra ninguém, não precisa correr atrás de uma seguradora nem precisa depositar três meses de aluguel de uma vez. É mais fácil, e você não paga nada a mais por isso.</h3>
            </div>
          </div>
        </div>
      </div>
  )
  }
}
export default MainContent
