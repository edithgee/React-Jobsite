import React from "react";
import styled from "styled-components"
import './App.css';

function App() {
  return (
    <Main>
        <Header>
          <Logo>

          </Logo>
          Clever Jobs 
        </Header>
      <Container>
        <Filter>
          <input type="text" placeholder="Search">
            <button>Find</button>

          </input>
        </Filter>
        <Count>

        </Count>
        <Card>

        </Card>

      </Container>

    </Main>

  );
}

export default App;


const Main = styled.div `
background-color: blue;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;

`

const Header = styled.div`
background-color: yellow;
height:5%;
display: flex;
justify-content: start;

`
const Logo = styled.div`
background-image: url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png);
`

const Container =styled.div`
background-color: green;
height: 95%;
width:70%;
margin-top: 0;
margin-left: 112.5px;
margin-bottom: 0;
`

const Filter = styled.div`
background-color: purple;
height: 10%;

`
const Card = styled.div`
background-color: pink;
height: 33%;
width: 33%;
`

const Count = styled.div`
height:3%;
background-color: aquamarine;
`

const input = styled.div`
width: 600px;
`
