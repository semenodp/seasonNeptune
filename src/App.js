import React, {Component} from 'react';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
} from 'reactstrap';
import RegistrationForm from './components/RegistrationForm';
import Joi from 'joi';
import Box from './components/Box';


import './App.css';


const schema = Joi.object().keys({
    teamName: Joi.string().min(1).max(30).required(),
    firstName: Joi.string().min(1).max(100).required(),
    lastName: Joi.string().min(1).max(30).required(),
    vkUrl: Joi.string().min(1).required(),
    capitanSteam: Joi.string().min(1).max(30).required(),
    email: Joi.string().min(1).required(),
    playerTwoSteam: Joi.string().min(1).max(30).required(),
    playerThreeSteam: Joi.string().min(1).max(30).required(),
    playerFourSteam: Joi.string().min(1).max(30).required(),
    playerFiveSteam: Joi.string().min(1).max(30).required(),
    substituteSteam: Joi.string().min(1).max(30).required(),
    mobile: Joi.string().min(1).max(30).required()

});

const API_URL = 'http://localhost:5000/api/register';

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
        },
        sendingForm: false,
        sentForm: false
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    formIsValid = (formInput) => {

        const result = Joi.validate(formInput, schema);
        console.log(result.error);

        return !result.error;
    };

    formSubmitted = (event) => {
        event.preventDefault();
        const formInput = {
            teamName: this.state.formInput.teamName,
            firstName: this.state.formInput.firstName,
            lastName: this.state.formInput.lastName,
            vkUrl: this.state.formInput.vkUrl,
            capitanSteam: this.state.formInput.capitanSteam,
            email: this.state.formInput.email,
            playerTwoSteam: this.state.formInput.playerTwoSteam,
            playerThreeSteam: this.state.formInput.playerThreeSteam,
            playerFourSteam: this.state.formInput.playerFourSteam,
            playerFiveSteam: this.state.formInput.playerFiveSteam,
            substituteSteam: this.state.formInput.substituteSteam,
            mobile: this.state.formInput.mobile

        };

        if (this.formIsValid(formInput)) {
            //     this.setState({
            //         sendingMessage: true
            //     });
            this.sendForm(formInput)
                .then((result) => {
                    setTimeout(() => {
                        this.setState({
                            sentForm: true
                        });
                    }, 1000);
                });
        }
    };

    sendForm = (formInput) => {
        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formInput)
        }).then(res => res.json())
    };

    valueChanged = (event) => {
        const {name, value} = event.target;
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
                            <ul className="nav-items navbar">
                                <li className='nav-item'>
                                    <a href="/">Информация</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="/">Регистрация</a>
                                </li>
                                <li className='nav-item'>
                                    <img className='logoDreamBig' src={require('./images/logo_DreamBig.png')} alt=""/>
                                </li>
                                <li className='nav-item'>
                                    <a href="/">Соотрудничество</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="/">Контакты</a>
                                </li>
                            </ul>
                        </Collapse>
                    </Navbar>

                    <div className="header-content grid">
                        <h1>Season Neptune</h1>
                        <img className='logoNeptune' src={require('./images/logo_Neptune.png')} alt=""/>
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
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'Shape.svg'}
                                font={'blog-item-content'}
                            />
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'trophy.svg'}
                                font={'blog-item-content'}
                            />
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'camera.svg'}
                                font={'blog-item-content'}
                            />
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'4.png'}
                                font={'blog-item-content'}
                            />
                        </div>
                    </div>
                </section>

                <section className="landing-section-two section-blog">
                    <div className="container">
                        <h2>Отборочная Часть</h2>


                        <div className="blog-home grid">

                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'world.svg'}
                                font={'blog-item-content-blue'}
                            />
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'four.png'}
                                font={'blog-item-content-blue'}
                            />
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'rouble.svg'}
                                font={'blog-item-content-blue'}
                            />
                            <Box
                                text={'Все игры проходят на LAN'}
                                img={'twitch.svg'}
                                font={'blog-item-content-blue'}
                            />
                        </div>
                    </div>
                </section>
                {
                    !this.state.sentForm ?
                        <RegistrationForm
                            teamName={this.state.teamName}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            mobile={this.state.mobile}
                            vkUrl={this.state.vkUrl}
                            capitanSteam={this.state.capitanSteam}
                            email={this.state.email}
                            playerTwoSteam={this.state.playerTwoSteam}
                            playerThreeSteam={this.state.playerThreeSteam}
                            playerFourSteam={this.state.playerFourSteam}
                            playerFiveSteam={this.state.playerFiveSteam}
                            substituteSteam={this.state.substituteSteam}
                            formSubmitted={this.formSubmitted}
                            valueChanged={this.valueChanged}
                            formIsValid={this.formIsValid}
                        />   :
                        <p>Thank for Submitting </p>
                }

                <section className="collaboration grid">
                    <div className="collaboration-content">
                        <h1>Сотрудничество</h1>
                        <p>
                            Мы стремимся создать качественный и удобный продукт для любительского киберспорта.
                            Предлагаем вам стать частью
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
                            <img className='social-item-img' src={require('./images/twitch.svg')} alt=""/>
                        </a>
                        <a href="/">
                            <img className='social-item-img' src={require('./images/twitch.svg')} alt=""/>
                        </a>
                        <a href="/">
                            <img className='social-item-img' src={require('./images/twitch.svg')} alt=""/>
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
