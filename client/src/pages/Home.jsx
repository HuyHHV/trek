import React from 'react';
import {
  Divider,
  Wrap,
  Container,
} from '@chakra-ui/react';
import Card from '../components/card/Card';

const mockCardData = [
    {
      imgSrc : 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
      name : '1 sample',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: ['monument','building']
    },
    {
        imgSrc : 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        name : '2 sample',
        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tags: ['monument','building']
      },
     {
      imgSrc : 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
      name : '3 sample',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: ['monument','building']
    }
  ]

const Home = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Divider marginTop="2" />
      <Wrap spacing="30px" marginTop="5">
             <Card cards={mockCardData} />
      </Wrap>
    </Container>
  );
};

export default Home;