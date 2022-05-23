import {Link, useColorModeValue} from '@chakra-ui/react'
import {Link as ReactLink} from 'react-router-dom'

import React from 'react'

function NavLink(props) {
  return (
  <Link as={ReactLink} to={props.link} 
    px={8}
    py={1}
    rounded={'md'}
    _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
    }}>
    {props.icon}
    </Link>
  )
}

export default NavLink