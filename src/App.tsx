import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const App: React.FC = () => {
    return (
        <Container>
            <Square />
        </Container>
    );
};

export default App;
