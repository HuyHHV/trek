import React,  {  useState } from 'react'
import { 
    Text,
    Select,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Image,
    Button,
    HStack,
    Tag,
    CloseButton
 } from '@chakra-ui/react';
import {  AddIcon } from '@chakra-ui/icons'
import Dropzone  from './Dropzone';
import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../../utils/mutations';
import imgurAPI from '../../utils/imurAPI';

function ImgUploader({ onFileAccepted }) {

  const [addLocation, { error, data }] = useMutation(ADD_LOCATION);
  // form states 
  const [formState, setFormState] = useState({
    name: '',
    street: '',
    suburb:'',
    src: ''
  });

  // drop states for drop/input image
  const initialDropState= {
    files: [],
    dropState: false
  }
  const [dropState, setDropState] = useState(initialDropState); 
  // state for adding tagss with dropdown bar
  const [selectedValue, setSelect] = useState();
  const [tags,setTags] = useState([])


  // on dropping/ uploading image 
  const importFile = (imgs) => {
    setDropState(
      {
        files: [imgs].map(img => Object.assign(img, {
      src: URL.createObjectURL(img)
    })),
        onDrop:true
  });
  };
  
  
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
    // Upload the photo to Imgur API, with return result as an URL
    const returnedURL = await imgurAPI(dropState.files[0]);
    // console.log(returnedURL);
    // fetching photo information to database using mutation
    console.log(tags)
    try {  
      const newphotoData = { variables: { ...formState, src:returnedURL, tags:tags }};
      // console.log(newphotoData)
      const { data } = await addLocation(newphotoData);
      window.location.reload(); 

    } 
    catch (e) {
      console.log(e)
      console.error(e.networkError.result.errors);
    }
  };

  // handle change for dropdown bar
  const handleSelect = (event) => {
    event.preventDefault();
    const selectedTag = event.target.value
    setSelect(selectedTag)
  }
  // handle click buttons
  const handleClick = (event) => {
    if (tags.indexOf(selectedValue) === -1 && selectedValue) {
      setTags((oldArray) => oldArray.concat(selectedValue));
    }
  }
  const removeTag = (event) => {
    // console.log(event.target.id);
    const removedTag= event.target.id;
    setTags(currentTags => currentTags.filter(tag => {
      return tag !== removedTag
    }))
  }
  return (
    <form onSubmit={handleFormSubmit}>
        <VStack space={4}>
          <Text>Enter location infor and upload your image in the form below</Text>
          <FormControl 
          autoComplete='off'
          isRequired
          >
              <FormLabel>Location name</FormLabel>
              <Input
              autoComplete='off'
              type="text"
              name='name'
              value={formState.name}
              onChange={handleChange}   
                />
          </FormControl>
          <FormControl 
          isRequired
          >
              <FormLabel>Street name</FormLabel>
              <Input
              autoComplete="off"
              type="text"
              name='street'
              value={formState.street}
              onChange={handleChange}
              />
          </FormControl>
          <FormControl 
          isRequired
          >
              <FormLabel>Suburb</FormLabel>
              <Input
              autoComplete='off'
              type="text"
              name='suburb'
              value={formState.suburb}
              onChange={handleChange}
              />
          </FormControl>
          <FormControl isRequired>
            <HStack>
              <Select 
                isRequired
                placeholder='Add tags'
                w="70%"
                onChange={handleSelect}
                >
                <option value='Monument'>Monument</option>
                <option value='ArtWork'>ArtWork</option>
                <option value='Heritage'>Heritage</option>
                <option value='Building'>Building</option>
              </Select>
              <Button onClick={handleClick}>
                <AddIcon/>
              </Button>
            </HStack>
            {tags && tags.map((tag,index) => 
              <Tag
              m = "0.5em" 
              size={'md'} 
              variant="solid" 
              colorScheme="orange" 
              key={index}>
                {tag} 
                <Button size={"xs"} id={tag} onClick ={removeTag}>X </Button>
              </Tag>)}
          </FormControl>
          {dropState.onDrop ? 
          (<Image src={dropState.files[0].src}/>) 
          :(<Dropzone onFileAccepted={importFile}/>) }
          
          <Button colorScheme='red' mr={3} type='submit'>
                Submit
          </Button>

        </VStack>
    </form>
        
);
  
}

export default ImgUploader