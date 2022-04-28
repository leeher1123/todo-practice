import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ToDoList />
    </Container>
  );
}

const Container = styled.div``;

export default App;
