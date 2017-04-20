import React from 'react'
import css from './SubHeader.css'

class TopRightMenu extends React.Component {
  constructor(props, context) {
  	super(props,context)
  	this.state = {
  		phone: ""
  	}
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.setNumbers = this.setNumbers.bind(this)
  }
  setNumbers(numbers, pos) {
  	let res = '('
  	numbers.forEach((number, i) => {
      if(i <= 1 || (i >=3 && i<=5) || (i >=7 && i<=9)) {
        res+=number
      }
      if(i === 2) {
      	res+= ')' + number
      }
      if(i === 6) {
      	res+= '-' + number
      }
      if(i === 10) {
      	res = res.substring(0, 8) + res[9] + '-' + res.substring(10, res.length) + number
      }
  	})
    this.setState({phone: res}, () => this.refs.input.selectionStart = this.refs.input.selectionEnd = pos);

  }
  handlePhoneDeleteCharacter(value) {
    let numbers = []
    let oldNumbers = []
    let pos = 0
    for(let i=0; i < value.length; i++) {
    	if(value[i] >= 0 && value[i] <= 9) {
    	  numbers.push(value[i])
    	}
    }
    for(let i=0; i < this.state.phone.length; i++) {
    	pos++;
    	if(this.state.phone[i] != value[i]) {
    		if(this.state.phone[i] >= 0 && this.state.phone[i] <=9) {
    			break
    		} else {
                this.setState({...this.state}, () => this.refs.input.selectionStart = this.refs.input.selectionEnd = i+1);
    			return
    		}
    	}
    }
    if(value == '(') {
    	this.setState({phone: ""})
    	return
    }
    this.setNumbers(numbers, pos - 1)
  }

  handlePhoneChange(event) {
    console.log(event)
    let value = event.target.value
    if (value.length < this.state.phone.length) {
    	this.handlePhoneDeleteCharacter(value)
    	return
    }
    if(value.length < 15) {
      let numbers = []
      for(let i=0; i < value.length; i++) {
      	value[i] >= 0 && value[i] <= 9 ? numbers.push(value[i]) : null 
      }
      let pos=0
      for(let i=0; i < value.length; i++) {
      	  pos++;
    	  if(this.state.phone[i] != value[i]) {
    	  	if(pos == 1 || pos == 9 || pos == 4) {
    	  		pos++;
    	  	}
    	  	break
    	  }
      }
      this.setNumbers(numbers, pos)
    }
  }
  handleTest (e) {
  	if(!(e.charCode >=48 && e.charCode <=57)) {
  		e.preventDefault()	
  	}
  }
  render () {
    return (
      <div className="sub-header">
        <div className="phones-outer-wrapper">
          <div className="phones-inner-wrapper">
            <div className="android-mobile" />
            <div className="iphone-mobile" />
          </div>
        </div>
        <div className="app-wrapper">
          <div className="app-store"/>
          <h1>
            Baixe o aplicativo QuintoAndar!
          </h1>
          <p>Receba o link para download no seu celular:</p>
          <div className="mobile-wrapper-input">
            <input ref="input" className="mobile-phone-number" placeholder="Insira seu número" onKeyPress={this.handleTest} value={this.state.phone} onChange={this.handlePhoneChange}></input>
            <div className="enviar-link">
              <a>Enviar link!</a>
            </div>
          </div>
        </div>
        <div className="top-right-buttons anunciar-button">
          <a href="#">Anunciar Imovel</a>
        </div>
      </div>
  )
  }
}
export default TopRightMenu
