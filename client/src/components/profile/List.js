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
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        >
        <Box>
          <Stack spacing={0} align={'center'} mb={2}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Want-to-go
            </Heading>
          </Stack>
          <Divider mb={2}/>
          <VStack  
            spacing={2} 
            maxH="20em"
            overflow="hidden" 
            overflowY="scroll"
            >
            {cards.map((card,index) => (
                <Card card={card} key={index.toString()}/>
            )
            )}
          </VStack>
        </Box>
      </Box>
  )
}

export default List