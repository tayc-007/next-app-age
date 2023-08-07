import { Box, VStack, Text, Heading, List, ListItem,Container } from '@chakra-ui/react';

const GreenTips = () => {
  return (
    <Box p={4}>
    <Container maxW="xl">
      <Heading size="xl" mb={4}>
        🌍 Tips - How you can be part of the Green Solution 🌱
      </Heading>
      <Text>
        We are in the climate emergency. Being a citizen of the earth, we can also contribute to achieving a sustainable future. Every small step of us can make a huge difference.
      </Text>
      <Text>
        Living a more sustainable lifestyle can be very rewarding – but also a bit daunting. Thankfully there are many easy steps to follow that we can apply to everyday life: reduce, reuse, recycle, and repurpose.
      </Text>

      <VStack align="start" mt={4} spacing={4}>
        <Box>
          <Heading size="md">Reduce 🚫</Heading>
          <Text>
            The first step to this eco-friendly quartet is to reduce, which seems self-explanatory – just use less. Each year, we use 1 billion plastic shopping bags, creating 300,000 tons of landfill waste.
          </Text>
          <List>
            <ListItem>Bringing reusable bags to the grocery store and buying in bulk whenever you can.</ListItem>
            <ListItem>Using a washcloth instead of a paper towel when cleaning up kitchen messes.</ListItem>
            <ListItem>Taking shorter showers.</ListItem>
            <ListItem>Hand-washing dishes instead of using the dishwasher.</ListItem>
            <ListItem>Avoiding single-use plastics (plates, bowls, cups, Styrofoam, straws, water bottles, etc.).</ListItem>
          </List>
        </Box>

        <Box>
          <Heading size="md">Reuse ♻️</Heading>
          <Text>
            Next up to bat is reuse, which is as simple as it sounds. When you reuse products, you’re able to make use of them multiple times or in multiple ways. In less than 15 years, worldwide waste is expected to double. So, instead of throwing away, find a way to reuse items you would otherwise toss!
          </Text>
          <List>
            <ListItem>Purchase a reusable water bottle instead of using single-use plastic bottles.</ListItem>
            <ListItem>Use your old toothbrush to scrub small, hard-to-reach areas when cleaning the house.</ListItem>
            <ListItem>Turn your empty coffee tin into a storage container for your household items.</ListItem>
            <ListItem>Pop your used tea bags in the fridge then place on your eyes for a natural eye de-puffer.</ListItem>
            <ListItem>Turn a broken frame into an earring holder by attaching wire across the frame and hanging earrings from wire.</ListItem>
            <ListItem>Cut the top off of an old soda bottle and hang it from a tree with birdseed for an easy bird feeder.</ListItem>
          </List>
        </Box>

        <Box>
          <Heading size="md">Recycle ♻️</Heading>
          <Text>
            The third “R” on our list, recycling, is the process of turning waste into new materials or objects. In some cases, producing waste is inevitable. However, it is important to be aware of the waste you are producing and how to recycle as much of that waste as possible.
          </Text>
          <List>
            <ListItem>If you have to use a plastic spoon, clean it thoroughly and make sure it is recycled.</ListItem>
            <ListItem>Find a local recycling center to recycle old electronics or furniture.</ListItem>
            <ListItem>If you can’t find a use for old plastic or glass bottles and jars, give them a rinse and make sure they end up in the recycling bin.</ListItem>
          </List>
        </Box>

        <Box>
          <Heading size="md">Repurpose ♻️</Heading>
          <Text>
            Perhaps the most creative of the four R’s is to repurpose by taking a product you don’t use or haven’t used in a while and giving it a new life somewhere else. Here are a few of our favorite ways to repurpose items commonly thrown away that could be used for another job:
          </Text>
          <List>
            <ListItem>Have an old T-shirt? Instead of throwing it away, cut it up into squares or rectangles, and BOOM, you’ve got yourself new wash rags.</ListItem>
            <ListItem>Have an empty milk carton? Poke holes in the top of the cap and you’ve got yourself a DIY watering can.</ListItem>
            <ListItem>If you have any old jewelry, remove it from its base and hot glue a magnet to the back for new and improved fridge magnets.</ListItem>
            <ListItem>Reinvent your old CDs into cool coasters for your coffee table.</ListItem>
          </List>
        </Box>

        <Box>
          <Heading size="md">Refuse 🚫</Heading>
          <Text>
            Be smart to say no / refuse to accept if anyone wants to give you a promotional gift that you do not need or is unnecessary for you or your household.
          </Text>
        </Box>

        <Text>
          If you start implementing the four R’s into your everyday life, the difference you will have in the environment will become exponential. Once you’ve perfected them, start sharing them with your friends and showing them all the ways they can easily reduce, reuse, recycle, and repurpose. Who knows, maybe you’ll pick up some new tips along the way! 🌿💚😊
        </Text>
      </VStack>
    </Container>
  </Box>
  );
};

export default GreenTips;
