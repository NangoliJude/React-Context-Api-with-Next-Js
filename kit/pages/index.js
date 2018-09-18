import Head from "next/head";
import styled from "styled-components";

import { MainContext } from "../components";
const H1 = styled.h1`
  color: #0d2b3e;
`;

const P = styled.p`
  color: #7b7c7d;
`;
const Index = () => {
  return (
    <section>
      <Head>
        <title>React Context Api and Next Js and Styled Components</title>
      </Head>

      <MainContext.Consumer>
        {stateData => {
          const { name, ContextNext, styledcomponent } = stateData.state;
          return (
            <div>
              <H1>{ContextNext}</H1>
              <P>{styledcomponent}</P>
              <em>{name}</em>
            </div>
          );
        }}
      </MainContext.Consumer>
    </section>
  );
};

export default Index;
