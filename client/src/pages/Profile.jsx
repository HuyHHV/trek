import {
    Container,
    Stack,
    Flex,
    Box,
  } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import StatsCard from '../components/profile/StatsCard';


function Login() {
  

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
              <StatsCard/>
        </Flex>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Login