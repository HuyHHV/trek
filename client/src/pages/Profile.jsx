import {
    Container,
    Stack,
    Flex,
  } from '@chakra-ui/react';

import StatsCard from '../components/profile/StatsCard';

import { useQuery } from '@apollo/client';

import { useParams } from 'react-router-dom';

import { QUERY_SINGLE_PROFILE, QUERY_ME, QUERY_WANT_TO_GO } from '../utils/queries';
import List from '../components/profile/List';

function Profile() {
  const {data,error} = useQuery(QUERY_ME);  
  const userData = data?.me || [];
  console.log(userData)
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'flex-start'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          position={'relative'}
          w={'full'}>
              <StatsCard profile={userData}/>
        </Flex>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          >
            <List locationId = {userData.want_to_go}/>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Profile