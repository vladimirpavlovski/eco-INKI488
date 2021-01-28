import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class DeponiiInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            grad: '',
            adresa: ''
            
        }
    }

    handleChangeInputName = async event => {
        const grad = event.target.value
        this.setState({ grad })
    }

    handleChangeInputRating = async event => {
        const adresa = event.target.value
        this.setState({ adresa })
    }

  

    handleIncludeMovie = async () => {
        const { grad, adresa } = this.state
        
        const payload = { grad, adresa}

        await api.insertDeponija(payload).then(res => {
            window.alert(`Депонијата е успешно зачувана`)
            this.setState({
                grad: '',
                adresa: ''
               
            })
        })
    }

    render() {
        const { grad, adresa } = this.state
        return (
            <Wrapper>
                <br></br>
               
                <Title>Пријави диви депонии</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={grad}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="text"
                    value={adresa}
                    onChange={this.handleChangeInputRating}
                />

               

                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href={'/deponii/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default DeponiiInsert