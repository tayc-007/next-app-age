
import '@fontsource/montserrat'
import styles from '@/styles/Home.module.css'
import { Box,Grid, GridItem,Text,Heading,Button, Container, Center, Flex,SimpleGrid, Spacer } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import FullscreenDropdownMenu from './FullscreenDropdownMenu'
export default function LandingPage(){
  return(
<>

<Flex align="center" p={4}>
      <Spacer />
      <FullscreenDropdownMenu />
    </Flex>
  

<Center height={"100vh"} className={styles.bgImage} bgImage={"https://wallpapers.com/images/featured/renewable-energy-f7ct6d63jjmy2z96.jpg"}>
        <Flex>
        <Grid templateAreas={`"main"`} gridTemplateRows={'1fr'} gridTemplateColumns={'1fr'} gap='1'>



<GridItem area={'main'} >



  <Container  centerContent textAlign={'center'} maxW="auto" >
    <Image alt="" src={"/age-logo-t 1.png"} height={"140"} width={"140"} />
    <Heading color={'#3CA50A'} fontSize={['34px','38px','48px']} fontWeight={700}>Advocacy For Green Energy
    </Heading>
    <Heading color='#3BB900' fontSize={['16px','18px','24px']} pb="4px" fontWeight={300} fontStyle={'italic'}>
      Empowering A Sustainable Future</Heading>
    <Heading color='#3BB900' fontSize={['16px','18px','24px']} pb='15px' fontWeight={300} fontStyle={'italic'}>Our
      Green Energy Platform</Heading>
    <Button bg={'#3BB900'} borderRadius={"14px"} w={['160px','180px','200px']} h={['40px','40px',"50px"]}
      maxH={'auto'}>
      <Link href='mailto:tayseer266@msn.com'>
      <Text fontWeight={300} fontSize={['16px','20px','24px']} fontStyle={'italic'} color={'white'}>Get In
        Touch</Text>
      </Link></Button>
      
  </Container>
</GridItem>

</Grid>
        </Flex>
   
      </Center>


</>
)
}