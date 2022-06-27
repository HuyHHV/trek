import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Divider,
  Wrap,
  Container,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import Card from '../components/homeCards/Card';
import ImgUploader from '../components/imgUploader/ImgUploader';
import {QUERY_LOCATIONS} from '../utils/queries'

function Home() {
  const {isOpen,onOpen,onClose} = useDisclosure();
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];
  return (
    <Container maxW={'7xl'} p="6" h={"100vh"}>
      <Button
        onClick={onOpen}
        type='submit'
        bg={'orange.600'}
        color={'white'}
        _hover={{
          bg: 'orange.500',
        }}>
        Upload
      </Button>
      
      <Divider marginTop="2" />
      <Wrap spacing="30px" marginTop="5" h={"full"}>
             <Card cards={locations} />
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody py={20}>
              <ImgUploader />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='orange' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

    </Container>
    
  );
};

export default Home;