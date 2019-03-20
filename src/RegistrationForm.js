import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default (props) => {
    return (<section className='registrationForm'>
            <Form onSubmit={props.formSubmitted}>
                <h1>Регистрация
                    <span>
                                <p>
                            На отборочные турниры до конца 25го марта
                        </p>
                    </span>
                </h1>
                <FormGroup>
                    <Label for="teamName"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="teamName"
                        id="teamName"
                        placeholder="Название Команды"
                    />
                </FormGroup>
                <p>Данные Капитана</p>
                <FormGroup>
                    <Label for="firstName"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Имя"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Фамилия"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="vkUrl"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="url"
                        name="vkUrl"
                        id="vkUrl"
                        placeholder="VK URL"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="capitanSteam"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="capitanSteam"
                        id="capitanSteam"
                        placeholder="Steam Капитана"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </FormGroup>
                <p>Данные Игроков</p>
                <FormGroup>
                    <Label for="playerTwoSteam"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="playerTwoSteam"
                        id="playerTwoSteam"
                        placeholder="Steam Игрока #2"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="playerThreeSteam"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="playerThreeSteam"
                        id="playerThreeSteam"
                        placeholder="Steam Игрока #3"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="playerFourSteam"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="playerFourSteam"
                        id="playerFourSteam"
                        placeholder="Steam Игрока #4"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="playerFiveSteam"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="playerFiveSteam"
                        id="playerFiveSteam"
                        placeholder="Steam Игрока #5"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="substituteSteam"></Label>
                    <Input
                        onChange={props.valueChanged}
                        type="text"
                        name="substituteSteam"
                        id="substituteSteam"
                        placeholder="Steam Замены"
                    />
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="radio"/> Я ознакомился с регламентом и правилами проведения турнира
                    </Label>
                </FormGroup>

                <Button type='submit' className='registrationButton' color="danger" disabled={!props.formIsValid} >Отправить
                </Button>
            </Form>
        </section>
    )
}