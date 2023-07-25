
import '@fontsource/montserrat'
import styles from '@/styles/Home.module.css'
import { ButtonGroup,Divider,Stack,SimpleGrid,Grid, GridItem,Text,Heading,Button, Container, Center, Flex, Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
export default function OurWork(){
    return(
        <>
        
        <Container maxW="auto" className={styles.container} centerContent>
  <SimpleGrid columns={2}>
  <Link href={"/"}>Home</Link>
  <Link href={"/OurWork"}>Our Work</Link>
  </SimpleGrid>
  
</Container>
        <Center>     
<Heading mt={10} className={styles.container}>Our Work</Heading>
</Center>   
<Container maxH={"auto"} mt={3} maxW={"auto"} centerContent>
<SimpleGrid spacing={4} columns={2}>
<Card maxW='sm'>
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={"#3CA50A"}>Age Green energy Powerpoint</Heading>
      <Text color={"#3CA50A"}>
        Find out about different Green Energy sources
      </Text>
    
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Container centerContent>
      <Button variant='solid' color={'white'} bg={"#3CA50A"}>
        <Link href={"\AGE energy types.pptx"}>Download</Link>
      </Button>
      </Container>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={"#3CA50A"}>Age Wallpaper</Heading>
      <Text color={"#3CA50A"}>
        This is our goal
      </Text>
    
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Container centerContent>
      <Button variant='solid' color={'white'} bg={"#3CA50A"}>
        <Link href={"\age wallpaper.jpg"} target="_blank">Download</Link>
      </Button>
      </Container>
  </CardFooter>
</Card>

</SimpleGrid>
</Container>                 
                    
            
        </>
    )
}