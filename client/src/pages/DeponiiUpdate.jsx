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

class DeponiiUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            grad: '',
            adresa: '',
           
        }
    }

    handleChangeInputGrad = async event => {
        const grad = event.target.value
        this.setState({ grad })
    }

    handleChangeInputAdresa = async event => {
        const adresa = event.target.value
        this.setState({ adresa })
    }

    handleUpdateDeponii = async () => {
        const { id, grad,adresa } = this.state
        
        const payload = {grad,adresa}

        await api.updateDeponijaById(id, payload).then(res => {
            window.alert(`Deponijata e update-irana`)
            this.setState({
                grad: '',
                adresa: '',
            
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const deponii = await api.getDeponijaById(id)

        this.setState({
            grad: deponii.data.data.grad,
            adresa: deponii.data.data.adresa,
           
        })
    }

    render() {
        const { grad,adresa } = this.state
        return (
            <Wrapper>
                <Title>Пријави депонија</Title>

                <Label>Grad </Label>
                <InputText
                    type="text"
                    value={grad}
                    onChange={this.handleChangeInputGrad}
                />

                <Label>Adresa </Label>
                <InputText
                    type="text"
                    value={adresa}
                    onChange={this.handleChangeInputAdresa}
                />

                <Button onClick={this.handleUpdateDeponii}>Update </Button>
                <CancelButton href={'/deponii/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default DeponiiUpdate