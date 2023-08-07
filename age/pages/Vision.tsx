
import '@fontsource/montserrat'
import GreenTips from './components/GreenTips';
import styles from '@/styles/Home.module.css'
import { ListItem,List,VStack,Box,ButtonGroup,Divider,Stack,SimpleGrid,Grid, GridItem,Text,Heading,Button, Container, Center, Flex, Card, CardHeader, CardBody, CardFooter, Menu, MenuItem, MenuButton, MenuList, Spacer} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import FullscreenDropdownMenu from './components/FullscreenDropdownMenu'
export default function Vision(){
    return(
        <>
    <Flex align="center" p={4}>
      <Spacer />
      <FullscreenDropdownMenu />
    </Flex>
        <Center> 
       
<Heading mt={10}>Green Tips 💚</Heading>
</Center>   
<Container maxH={"auto"} mt={3} maxW={"auto"} centerContent>
  <Grid templateAreas={`"div1"
  "div2"`} gridTemplateRows={'1fr'} gridTemplateColumns={'1fr'}>
    <GridItem area={"div1"}>
<GreenTips />
    </GridItem>
    <GridItem area={"div2"}>
      <Center>
   
</Center>
    </GridItem>
    
  </Grid>

</Container>                 
                    
            
        </>
    )
}