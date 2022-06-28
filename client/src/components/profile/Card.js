import { 
        Image, 
        Text, 
        VStack,
        HStack,
        Heading,
        Box,
        Divider,
        Button
        } from '@chakra-ui/react';
import React  from 'react';

import {useQuery,useMutation} from '@apollo/client';
import {REMOVE_LOCATION_FROM_LIST,ADD_TO_DISCOVERED} from '../../utils/mutations'
import {QUERY_ME} from '../../utils/queries';
import getLocation from '../../utils/getUserLocation'
import getDistanceFromLatLonInKm from '../../utils/getDistanceFromLatLonInKm';
function Card(prop) {
    const card = prop.card;   

    // Remove location from want-to-go list from mutation
    const [removeLocationInList] = useMutation(REMOVE_LOCATION_FROM_LIST, {
        update(cache, { data: { removeLocationInList } }) {
        try {
            cache.writeQuery({
            query: QUERY_ME,
            data: { me: removeLocationInList },
            });
        } catch (e) {
            console.error(e);
        }
        },
    })

    const [addToDiscoveredList] = useMutation(ADD_TO_DISCOVERED)

    const removeCard = async(locationId) => {
        try {
            const { data } = await removeLocationInList({
                variables: { locationId },
            });
            } catch (err) {
            console.error(err);
            }
    }
   
    // check if user is near to the location they want to checkin
    const checkin = async() => {
        let [locationLat, locationLon] = card.geolocation.split(',');
        try {
            const location = await getLocation();
            const currentLat = location.coords.latitude;
            const currentLon = location.coords.longitude;
            // console.log(location.coords.longitude)

            // caculate distance between user location and location want to check in
            const result=getDistanceFromLatLonInKm(locationLat,locationLon,currentLat,currentLon)
            console.log(result);
            // return true if user is within 100m radius from the location otherwise false
            if (result<0.2) return true;
            return false
        }
        
        catch(error) {
            console.log(error)
            if (error.PERMISSION_DENIED) {
                prompt("Check-in unsuccessful, user has denined the request for geolocation")
            }
        }
    }

    const handleClick= async(event) => {
        const button = event.target
        // if remove button is clicked
        if (button.innerText === "Remove") 
        return removeCard(card._id)

        // if checkin button is clicked
        const checkinResult = await checkin();

        if (checkinResult) {
            await removeCard(card._id);
            try {
               const { data } = await addToDiscoveredList({
                    variables: { locationId:card._id},
                });
                console.log("done")
                } catch (err) {
                console.error(err?.networkError.result.errors);
                }
        }

        };
        
    return (
            <VStack>
                <HStack 
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
                <HStack >
                  <Button
                      onClick={handleClick}  
                      id={card._id}
                      bg={'orange.400'}
                      color={'white'}
                      _hover={{
                          bg: 'orange.500',
                      }}
                  >
                      Check in
                  </Button>
                  <Button
                      onClick={handleClick} 
                      id={card._id}
                      bg={'orange.400'}
                      color={'white'}
                      _hover={{
                          bg: 'orange.500',
                      }}
                  >
                    Remove
                  </Button>                             
                </HStack>
                <Divider color="gray.300" marginTop="4" />      
            </VStack>
      
  )
}

export default Card