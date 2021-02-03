import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateDeponii extends Component {
    updateDeponija = event => {
        event.preventDefault()

        window.location.href = `/deponii/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateDeponija}>Update</Update>
    }
}

class DeleteDeponii extends Component {
    deleteDeponija = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Дали саката да ја избришете депонијата ${this.props.id} ?`,
            )
        ) {
            api.deleteDeponijaById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteDeponija}>Delete</Delete>
    }
}

class DeponiiList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deponii: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDeponii().then(deponii => {
            this.setState({
              deponii: deponii.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { deponii, isLoading } = this.state
        console.log('TCL: DeponiiList -> render -> deponii', deponii)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'grad',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'adresa',
                filterable: true,
            },
           
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteDeponii id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateDeponii id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!deponii.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={deponii}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default DeponiiList
