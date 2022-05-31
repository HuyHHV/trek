import React from 'react';
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

const mockCardData = [
    {
      imgSrc : 'https://cdn.rundlemall.com/resized/images/Things-To-Do/47419/Malls-Balls_2407995d0ccda6fed38a12babfb09ef4_342145d4c633f7d42ec87a27ee1d2157.jpg',
      name : "The 'Mall's Balls",
      street: 'Rundle Mall',
      suburb: 'Adelaide',
      tags: ['artwork']
    },
    {
        imgSrc : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/60/80/77/photo2jpg.jpg?w=1200&h=-1&s=1',
        name : 'The Cedars',
        street: 'Heysen Road',
        suburb: 'Hahndorf',
        tags: ['building']
      },
     {
      imgSrc : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/09/e5/cf/cape-jaffa-lighthousecelebrati.jpg?w=1200&h=-1&s=1',
      name : 'Cape Jaffa Lighthouse',
      street: 'Marine Parade',
      suburb: 'Kingstone SE',
      tags: ['monument','building']
    }
  ]

function Home() {
  const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <Container maxW={'7xl'} p="12">
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

      <Divider marginTop="2" />
      <Wrap spacing="30px" marginTop="5">
             <Card cards={mockCardData} />
      </Wrap>
    </Container>
  );
};

export default Home;