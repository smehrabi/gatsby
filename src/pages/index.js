import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import UserCont from './UserCont';
 
const Page = styled.div`
  width: 100%;
  max-width: 1260px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
 
const IndexPage = () => (
  <Layout>
    <Page>
      <UserCont />
    </Page>
  </Layout>
);
 
export default IndexPage;