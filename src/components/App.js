import React from 'react';

import styled from 'styled-components';
import oc from 'open-color';

// component import
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoInsert from './TodoInsert';
import TodoReset from './TodoReset';
import Footer from './Footer';

const Wrapper = styled.div`
  /* wrapper setting */

  {
      font: 400 16px 'Press Start 2P', cursive;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${oc.gray[2]};

      & h2 {
          font-size: 50px;
      }
  }
`;

const App = () => {
  

  return (
    <Wrapper>
      <h2>Hello Todo</h2>
      <TodoReset>Reset</TodoReset>
      <TodoInsert >Insert</TodoInsert>
      <VisibleTodoList />
      <Footer />
    </Wrapper>
  );
};

export default App;