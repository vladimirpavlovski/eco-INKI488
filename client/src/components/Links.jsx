import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    EКО ДРУШТВО
                   
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/deponii/list" className="nav-link">
                                Диви депонии
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/deponii/create" className="nav-link">
                                Пријави диви депонии
                            </Link>
                        </Item>
                    </List>
                   
                </Collapse>
               
            </React.Fragment>
            
        )
    }
}

export default Links