import React, {Component} from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
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
    isOpen: false,
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
      substituteSteam: '',
      mobile: ''
    }
  };

  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
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
    this.toggle = this.toggle.bind(this);
    return (
        <div className='wrapper grid'>
          <header className="main-header grid">
            <Navbar color="light" light expand="md">
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <ul className="nav-items" navbar>
                  <li className='nav-item'>
                    <a href="#">Информация</a>
                  </li>
                  <li className='nav-item'>
                    <a href="#">Регистрация</a>
                  </li>
                  <li className='nav-item'>
                    <img className='logoDreamBig' src={require('./logo_DreamBig.png')} alt=""/>
                  </li>
                  <li className='nav-item'>
                    <a href="#">Соотрудничество</a>
                  </li>
                  <li className='nav-item'>
                    <a href="#">Контакты</a>
                  </li>
                </ul>
              </Collapse>
            </Navbar>

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

          <section className="landing-section section-blog">
            <div className="container">
              <h2>Основная Часть</h2>


              <div className="blog-home grid">

                <div className="blog-item">
                  <img className='blog-item-img' src={require('./Shape.svg')} alt=""/>
                  <div className="blog-item-content">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>


                <div className="blog-item">
                  <img className='blog-item-img' src={require('./trophy.svg')} alt=""/>
                  <div className="blog-item-content">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>


                <div className="blog-item">
                  <img className='blog-item-img' src={require('./camera.svg')} alt=""/>
                  <div className="blog-item-content">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>


                <div className="blog-item">
                  <img className='blog-item-img' src={require('./4.png')} alt=""/>
                  <div className="blog-item-content">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>



              </div>
            </div>
          </section>

          <section className="landing-section-two section-blog">
            <div className="container">
              <h2>Отборочная Часть</h2>


              <div className="blog-home grid">

                <div className="blog-item">
                  <img className='blog-item-img' src={require('./world.svg')} alt=""/>
                  <div className="blog-item-content-blue">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>


                <div className="blog-item">
                  <img className='blog-item-img' src={require('./four.png')} alt=""/>
                  <div className="blog-item-content-blue">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>


                <div className="blog-item">
                  <img className='blog-item-img' src={require('./rouble.svg')} alt=""/>
                  <div className="blog-item-content-blue">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>


                <div className="blog-item">
                  <img className='blog-item-img' src={require('./twitch.svg')} alt=""/>
                  <div className="blog-item-content-blue">
                    <p>Все игры проходят на LAN</p>
                  </div>
                </div>



              </div>
            </div>
          </section>

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
            <div className="collaboration-content">
              <h1>Сотрудничество</h1>
              <p>
               Мы стремимся создать качественный и удобный продукт для любительского киберспорта. Предлагаем вам стать частью
                нашего проекта. Вместе сможем достигнуть больших результатов.
              </p>
              <Button type='submit' className='RegistrationButton' color="primary">
                Написать нам
              </Button>
            </div>
          </section>
          <footer className="footer grid">
            <h1>Контакты</h1>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <h3>Общие вопросы</h3>
                <p>egpetrovich13@gmail.com</p>
              </div>
              <div className="footer-contact-item">
                <h3>Общие вопросы</h3>
                <p>egpetrovich13@gmail.com</p>
              </div>
            </div>
            <div className="social">
              <a href="/">
                <img className='social-item-img' src={require('./twitch.svg')} alt=""/>
              </a>
              <a href="/">
                <img className='social-item-img' src={require('./twitch.svg')} alt=""/>
              </a>
              <a href="/">
                <img className='social-item-img' src={require('./twitch.svg')} alt=""/>
              </a>
            </div>
            <p className="footer-final">
              DreamBig 2019
            </p>
          </footer>

        </div>

    );
  }
}

export default App;
