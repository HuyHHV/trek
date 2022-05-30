import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure
  } from '@chakra-ui/react';

  import LoginForm from './LoginForm';
  import SignupForm from './SignUpForm';
  
  export default function SimpleCard() {
    const signupModal = useDisclosure();
    const loginModal = useDisclosure()
    return (
      <Flex
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
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.300',
                  }}
                  onClick={signupModal.onOpen}
                  >
                   Sign up with your email
                </Button>
                
                {/* sign up form */}
                <Modal isOpen={signupModal.isOpen} onClose={signupModal.onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <SignupForm/>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='red' mr={3} onClick={signupModal.onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

              <Stack 
              spacing={7}
              position={'relative'}
              py = {4} 
              >
                <Divider/>
                <Text>Already has an account?</Text>

                <Button
                 bg={'red.400'}
                 color={'white'}
                 _hover={{
                   bg: 'red.300',
                 }}
                 onClick={loginModal.onOpen}
                 >
                  Login
                </Button>

                

                {/* log in form */}
                <Modal  isOpen={loginModal.isOpen} onClose={loginModal.onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <LoginForm/>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='red' mr={3} onClick={loginModal.onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }