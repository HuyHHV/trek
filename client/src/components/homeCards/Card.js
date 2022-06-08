import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    WrapItem,
    useColorModeValue,
    Button,
    IconButton
  } from '@chakra-ui/react';

import {  AddIcon } from '@chakra-ui/icons'
import BlogTags from './BlogTags'

import {ADD_TO_LIST} from '../../utils/mutations';
import { QUERY_ME, QUERY_SINGLE_PROFILE } from '../../utils/queries';

function Card(props) {
  
  const { userId } = useParams();

  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const user = data?.me || data?.user || {};
  const [addWantToGoList, { error, listData }] = useMutation(ADD_TO_LIST);

  const handleClick = async (event) => {
    const locationId = event.target.id
    const addedLocation = {
      variables:{
        userId:user._id,
        locationId:locationId
      }
    }
    try{
      const {locationData} = await addWantToGoList(addedLocation)
    }
    catch(error) {console.error(error.networkError.result.errors);}
  };
  return (
    <>
    {props.cards.map(card => (
        <WrapItem 
        width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }} 
        boxShadow={'2xl'}
        rounded={'md'}
        p="2em"
        key={card._id}
        border='1px' 
        borderColor='gray.400'
        transition="0.3s ease-in-out"
        _hover={{
          transform: 'scale(1.05)',
        }}
        >
        <Box w="100%">
          <Box position="relative">
            <Image
              boxSize="20em"
              transform="scale(1.0)"
              src={card.src} //source of the image
              alt={card.name}
              w = "100%"
              h = "10em"
            />
            <Button 
              onClick={handleClick}
              id= {card._id}
              aria-label='Add to list'
              size='sm' 
              position="absolute"
              top="5%" left="85%"
              bg={'orange.300'}
              color={'white'}
              _hover={{
                bg: 'orange.400',
              }}
            ><AddIcon id={card._id} onClick={handleClick}/>
            </Button>
          </Box>
          
          <BlogTags  tags={card.tags}/>
          
          <Heading fontSize="xl" marginTop="2">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {card.name} 
            </Link> 
          </Heading>
          <Heading fontSize="md" marginTop="2">
                Description
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            Street: {card.street}
          </Text>
          <Text as="p" fontSize="md" marginTop="2">
            Suburb: {card.suburb}
          </Text>
          {/* <BlogAuthor
            name="John Doe"
            date={new Date('2021-04-06T19:01:27Z')}
          /> */}
        </Box>
      </WrapItem>
    ))}
    </>
  )
}

export default Card