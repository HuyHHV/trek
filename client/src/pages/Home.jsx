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
import {ADD_TO_LIST} from '../utils/mutations';
import {QUERY_LOCATIONS} from '../utils/queries'
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
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];
  console.log(locations)
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