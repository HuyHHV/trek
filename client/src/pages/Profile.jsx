import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text
  } from '@chakra-ui/react';

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
            <Box
              position={'relative'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              The list go here
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export default Login