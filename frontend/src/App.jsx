import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Teams from './components/Teams'

const Content = styled.div`
margin: 0 auto;
text-align:center;
font-family: Arial;
background-color:rgb(242,242,242);
`;

const App = () => {
    return (
        <Content>
            <Header/>
            <Teams/>
        </Content>
    )
}

export default App;
