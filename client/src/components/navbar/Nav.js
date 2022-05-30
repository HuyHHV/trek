import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import NavLink from './NavLink';
import Auth from '../../utils/auth';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faUser, faRankingStar} from '@fortawesome/free-solid-svg-icons';

const navlinks = [
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: '/'
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    link: '/profile'
  },
  {
    icon: <FontAwesomeIcon icon={faRankingStar} />,
    link: '/ranking'
  }
];


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Trek</Box>
          <HStack
              as={'nav'}
              spacing={4}
              display={{  md: 'flex' }}>
              {navlinks.map((navlink) => (
                <NavLink link= {navlink.link} icon = {navlink.icon} />
              ))}
            </HStack> 

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
             
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/adventurer-neutral/your-custom-seed.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/adventurer-neutral/your-custom-seed.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem> 
                    <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                  </MenuItem>
            
                  <MenuItem>
                    <Button onClick={logout}>
                      Logout
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}