import React from 'react'
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    WrapItem
  } from '@chakra-ui/react';
import BlogTags from './BlogTags'



// export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//       <Image
//         borderRadius="full"
//         boxSize="40px"
//         src="https://100k-faces.glitch.me/random-image"
//         alt={`Avatar of ${props.name}`}
//       />
//       <Text fontWeight="medium">{props.name}</Text>
//       <Text>—</Text>
//       <Text>{props.date.toLocaleDateString()}</Text>
//     </HStack>
//   );
// };
  


function Card(props) {
  return (
    <>
    {props.cards.map(card => (
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                transform="scale(1.0)"
                src={card.imgSrc} //source of the image
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </Link>
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
            {card.description}
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