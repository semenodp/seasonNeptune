import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Label, Input, FormGroup, Form, Button,
} from 'reactstrap';
import RegistrationForm from './RegistrationForm';
import Joi from 'joi';

import './App.css';


const schema = Joi.object().keys({
  teamName: Joi.string().min(1).max(30).required(),
  firstName: Joi.string().min(1).max(100).required(),
});

class App extends Component {
  state = {
    // isOpen: false
    formInput: {
      teamName: '',
      firstName: '',
      lastName: '',
      vkUrl: '',
      capitanSteam: '',
      email: '',
      playerTwoSteam: '',
      playerThreeSteam: '',
      playerFourSteam: '',
      playerFiveSteam: '',
      substituteSteam: ''
    }
  };

  // toggle() {
  //     this.setState({
  //         isOpen: !this.state.isOpen
  //     });
  // }
  formIsValid = () => {
    const formInput = {
      teamName: this.state.formInput.teamName,
      firstName: this.state.formInput.firstName,
    };
    const result = Joi.validate(formInput, schema);

    return !result.error;
  }

  formSubmitted = (event) => {
    event.preventDefault();
    // if (this.formIsValid()) {
    //     this.setState({
    //         sendingMessage: true
    //     });
    //     const message = {
    //         name: this.state.userMessage.name,
    //         message: this.state.userMessage.message,
    //         latitude: this.state.location.lat,
    //         longitude: this.state.location.lng
    //     };
    //     sendMessage(message)
    //         .then((result) => {
    //             setTimeout(() => {
    //                 this.setState({
    //                     sendingMessage: false,
    //                     sentMessage: true
    //                 });
    //             }, 4000);
    //         });
    // }
  }

  valueChanged = (event) => {
    const {name, value} = event.target;
    console.log(event.target.formInput);
    this.setState((prevState) => ({
          formInput: {
            ...prevState.formInput,
            [name]: value
          }
        })
    )
  };

  render() {
    // this.toggle = this.toggle.bind(this);
    return (
        <div className='grid'>
          <section className="navigation-main grid">
          <nav className="navigation grid">
            <ul className="navigation-items">
              <li className="navigation-items-item">
                <a href="/">Информация</a>
              </li>
              <li className="navigation-items-item">
                <a href="/">Регистрация</a>
              </li>
              <li className="navigation-items-item">
                <img src="src/logo_DreamBig.png" alt="logo" width="100" height="60"/>
              </li>
              <li className="navigation-items-item">
                <a href="/">Сотрудничество</a>
              </li>
              <li className="navigation-items-item">
                <a href="/">Контакты</a>
              </li>
            </ul>
          </nav>
          </section>
          <header className="main-header grid">
            <div className="header-content grid">
              <h1>Season Neptune</h1>
              <img className='logoNeptune' src={require('./logo_Neptune.png')} alt=""/>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Adipisci alias at commodi fugiat
                impedit iste magnam.
              </p>
            </div>


          </header>
          <RegistrationForm
              teamName = {this.state.teamName}
              firstName= {this.state.firstName}
              lastName= {this.state.lastName}
              mobile={this.state.mobile}
              vkUrl= {this.state.vkUrl}
              capitanSteam = {this.state.capitanSteam}
              email= {this.state.email}
              playerTwoSteam= {this.state.playerTwoSteam}
              playerThreeSteam= {this.state.playerThreeSteam}
              playerFourSteam= {this.state.playerFourSteam}
              playerFiveSteam={this.state.playerFiveSteam}
              substituteSteam= {this.state.substituteSteam}
              formSubmitted = {this.formSubmitted}
              valueChanged = {this.valueChanged}
              formIsValid = {this.formIsValid}
          />
          <section className="collaboration grid">
            <div className="collaboration-content grid">
              <h1>Сотрудничество</h1>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Adipisci alias at commodi fugiat
                impedit iste magnam.
              </p>
              <button>

              </button>
            </div>

          </section>

          <footer>

          </footer>

        </div>

    );
  }
}

export default App;
