import React from 'react'
import {
    Heading,
    Box,
    Stack,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_WANT_TO_GO} from '../../utils/queries';
import Card from './Card';
function List(props) {
    // console.log(props.locationId)
    const {data,error} = useQuery(QUERY_WANT_TO_GO,  {
        variables: { locationId: props.locationId},
      });
    console.log(error?.networkError.result.errors)
    // console.log(data.want_to_go)
  return (
    <Box
        maxW={'75%'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Want-to-go
            </Heading>
          </Stack>
          <VStack  spacing={2}>
            {data?<Card cards={data.want_to_go}/>:<></>}
          </VStack>
        </Box>
      </Box>
  )
}

export default List