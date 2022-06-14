import { HStack ,Image, Text, VStack,Heading,Divider, Box} from '@chakra-ui/react'
import React from 'react'

function Card(props) {
    console.log(props.cards)
  return (
      <>
        {props.cards.map(card => (
            <>
            <HStack 
                key={card._id} 
                justify="space-between" 
                w="full"
                transition="0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.05)',
                }}
                >
                <Box w = "30%">
                    <Image
                        src={card.src} //source of the image
                        alt={card.name}
                        h="5em"
                        w = "10em"
                        />
                </Box>
                <Box w={"full"}>
                    <VStack w="full" justify={'flex-start'}>
                        <Heading fontSize="xl" marginTop="2">
                        Name: {card.name} 
                        </Heading>
                        <Text as="p" fontSize="md" marginTop="2">
                            Street: {card.street}
                        </Text>
                        <Text as="p" fontSize="md" marginTop="2">
                            Suburb: {card.suburb}
                        </Text>
                    </VStack>
                </Box>
            </HStack>
            <Divider color="gray.300" marginTop="4" />
            </>
        ))}
      </>
  )
}

export default Card