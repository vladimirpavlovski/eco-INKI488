import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'
 
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class DeponiiList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deponija: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDeponii().then(deponija => {
            this.setState({
                deponija: deponija.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { deponija, isLoading } = this.state
        console.log('TCL: DeponiiList -> render -> deponija', deponija)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Grad',
                accessor: 'Grad',
                filterable: true,
            },
            {
                Header: 'Adresa',
                accessor: 'Adresa',
                filterable: true,
            },
            {
                Header: 'test',
                accessor: '__v',
                filterable: true,
            },
            
        ]

        let showTable = true
        if (!deponija.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <p>dsadasd</p>
                <input></input>
                {showTable && (
                    <ReactTable
                        data={deponija}
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