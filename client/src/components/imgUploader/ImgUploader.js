import React,  {  useState } from 'react'
import { 
    Text,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Image,
    Button
 } from '@chakra-ui/react';
import Dropzone  from './Dropzone';

import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../../utils/mutations';
import imgurAPI from '../../utils/imurAPI';

function ImgUploader({ onFileAccepted }) {
    // on drop image
    const [dropState, setDropState] = useState(false);
    const [file, setFile] = useState();
    const [uploadImg, setImg] = useState();
    const importFile = (img) => {
      console.log(img);
      setImg(img);
      Object.assign(img, {
        url: URL.createObjectURL(img)
      });
      setFile(img);
      setDropState(true);
    };
    const [formState, setFormState] = useState({
        name: '',
        street: '',
        suburb:'',
        URL: ''
      });
      const [addLocation, { error, data }] = useMutation(ADD_LOCATION);
    
      // update state based on form input changes
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      // submit form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        const URL = await imgurAPI(file);
        console.log(URL)
        setFormState({
          URL: URL
        });     
        console.log(formState);
        
        try {
          const { data } = await addLocation({
            variables: { ...formState },
          });

    
        } catch (e) {
          console.error(e);
        }
      };

  return (
    <form onSubmit={handleFormSubmit}>
        <VStack space={4}>
          <Text>Enter location infor and upload your image in the box below</Text>
          <FormControl>
              <FormLabel>Location name</FormLabel>
              <Input
              type="text"
              name='name'
              value={formState.name}
              onChange={handleChange}   
              />
          </FormControl>
          <FormControl>
              <FormLabel>Street name</FormLabel>
              <Input
              type="text"
              name='street'
              value={formState.street}
              onChange={handleChange}
              />
          </FormControl>
          <FormControl>
              <FormLabel>Suburb</FormLabel>
              <Input
              type="text"
              name='suburb'
              value={formState.suburb}
              onChange={handleChange}
              />
          </FormControl>
          {dropState ? 
          (<Image src={file.url}/>) 
          :(<Dropzone onFileAccepted={importFile}/>) }
          
          <Button colorScheme='red' mr={3} type='submit'>
                submit
              </Button>

        </VStack>
    </form>
        
);
  
}

export default ImgUploader