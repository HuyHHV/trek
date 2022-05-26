import React from 'react'
import { HStack,Tag} from '@chakra-ui/react';

function BlogTags(props) {
  return (
    <HStack spacing={2} marginTop={3}>
      {props.tags.map(tag => (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                {tag}
          </Tag>
      
      ))}
    </HStack>
  )
}

export default BlogTags