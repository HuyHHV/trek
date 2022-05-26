import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Start your adventure today</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>

                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  <Stack direction={'row'} spacing = {4}>
                    <i class='fab fa-facebook-f'></i>
                    <Text>Log in with Facebook</Text>
                  </Stack>
                </Button>
                
                <Button
                  bg={'white'}
                  color={'black'}
                  _hover={{
                    bg: 'gray.100',
                  }}>
                  <Stack direction={'row'} spacing = {4}>
                  <i class='fab fa-google'></i>
                    <Text>Log in with Google</Text>
                  </Stack>
                </Button>
                
                <Button
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.300',
                  }}>
                  <Stack direction={'row'} spacing = {4}>
                    <Text>Sign up with your email</Text>
                  </Stack>
                </Button>

              <Stack 
              spacing={7}
              position={'relative'}
              py = {4} 
              _after={{
                content: "''",
                width: 'full',
                height: '2%',
                position: 'absolute',
                bottom: 120,
                left: 0,
                bg: 'gray.200',
                zIndex: 1,
              }}>

                <Text>Already has an account?</Text>

                <Button
                 bg={'red.400'}
                 color={'white'}
                 _hover={{
                   bg: 'red.300',
                 }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }