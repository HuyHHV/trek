import React from 'react'
import {
    Heading,
    Box,
    Stack,
    useColorModeValue,
    VStack,
    Divider
  } from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_WANT_TO_GO} from '../../utils/queries';
import Card from './Card';
function List(props) {
  // Fetch location data from database
  const {data} = useQuery(
      QUERY_WANT_TO_GO,  
      {
      variables: { locationId: props.locationId},
      },
      );        
  const cards = data?.want_to_go || [];
  // console.log(cards)
  return (
    <Box
        w= '75%'
        maxH={'50%'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        >
        <Box p={6} >
          <Stack spacing={0} align={'center'} mb={2}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Want-to-go
            </Heading>
          </Stack>
          <Divider mb={2}/>
          <VStack  spacing={2}>
            {cards.map((card,index) => (
                <Card card={card} index={index}/>
            )
            )}
          </VStack>
        </Box>
      </Box>
  )
}

export default List