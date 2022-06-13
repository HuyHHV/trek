import {
  Heading,
  Avatar,
  Box,
  Progress ,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';


export default function StatsCard(props) {
  const currentLv= props.profile.level;
  console.log(props.profile)
  const nextLv = currentLv + 1;
  return (
      <Box
        w={'75%'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://avatars.dicebear.com/api/adventurer-neutral/your-custom-seed.svg'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {props.profile.username}
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Discovered
              </Text>
            </Stack>
          </Stack>
          <HStack justify={'center'} spacing={2}>
            <Text borderRadius={'full'} background ={'green.400'} color={'gray.200'} p={1}> {currentLv}</Text>
            <Progress w={'70%'} colorScheme='green' size='sm' value={20} />
            <Text borderRadius={'full'} background ={'green.400'} color={'gray.200'} p={1}>{nextLv}</Text>
          </HStack>
          
          {/* <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button> */}
        </Box>
      </Box>
  );
}