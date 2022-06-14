import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Heading,
    VStack,
  } from '@chakra-ui/react'

import {useQuery} from '@apollo/client'
import {QUERY_ALL_USERS} from '../utils/queries'

function RankingTable() {
    const {data,error} = useQuery(QUERY_ALL_USERS)
    let users = data?.users || [];
    console.log(users);
    const sortedUsers = [...users]
    sortedUsers.sort((a,b) =>  b.level-a.level);
    console.log(sortedUsers)
  return (
    <Flex 
        justifyContent={"center"} 
        w="100%"
        h="75vh"
        align={"center"}
        >
            <VStack
                w={"75%"}
                boxShadow={'2xl'}
                rounded={'md'}
                border='1px' 
                borderColor='gray.600'
            >
                <Heading pt="1em">Ranking</Heading>    
                <TableContainer w="full" p="2em" >
                    <Table 
                        variant='striped' 
                        colorScheme='gray'>
                        <Thead>
                        <Tr>
                            <Th>Rank</Th>
                            <Th>Username</Th>
                            <Th>Level</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        {sortedUsers.map((user,index) => (
                            <Tr>
                                <Td>{index+1}</Td>
                                <Td>{user.username}</Td>
                                <Td>{user.level}</Td>
                            </Tr>
                        ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
            
    </Flex>
   
  )
}

export default RankingTable