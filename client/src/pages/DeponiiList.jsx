import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class DeponiiList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deponiis: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDeponii().then(deponiis => {
            this.setState({
                deponiis: deponiis.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { deponiis, isLoading } = this.state
        console.log('TCL: DeponiiList -> render -> deponiis', deponiis)

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
        if (!deponiis.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={deponiis}
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