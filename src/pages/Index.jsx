import React, { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Button, Text, Input, FormControl, FormLabel, Heading, Image, useToast } from "@chakra-ui/react";
import { FaPencilAlt, FaCheck, FaTrophy, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSubject, setActiveSubject] = useState(null);
  const toast = useToast();

  const handleLogin = () => {
    // Placeholder for login logic
    setIsLoggedIn(true);
    toast({
      title: "Logged in successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSubjectSelect = (subject) => {
    // Placeholder for subject selection logic
    setActiveSubject(subject);
  };

  const handleDrawingSubmit = () => {
    // Placeholder for drawing submission logic
    toast({
      title: "Drawing submitted successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleVote = () => {
    // Placeholder for voting logic
    toast({
      title: "Vote recorded!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <VStack spacing={4} align="stretch" p={5}>
        <HStack justifyContent="space-between">
          <Heading as="h1" size="lg">
            Draw & Win!
          </Heading>
          {isLoggedIn ? (
            <Button leftIcon={<FaUserCircle />} onClick={() => setIsLoggedIn(false)}>
              Logout
            </Button>
          ) : (
            <Button leftIcon={<FaUserCircle />} onClick={handleLogin}>
              Login / Register
            </Button>
          )}
        </HStack>
        <Box p={4} shadow="md" borderWidth="1px">
          <VStack spacing={4}>
            <Text>Select a subject to draw:</Text>
            <HStack spacing={4}>
              <Button onClick={() => handleSubjectSelect("Nature")}>Nature</Button>
              <Button onClick={() => handleSubjectSelect("Space")}>Space</Button>
              <Button onClick={() => handleSubjectSelect("Ocean")}>Ocean</Button>
            </HStack>
            {activeSubject && (
              <Text>
                Subject selected: <strong>{activeSubject}</strong>
              </Text>
            )}
          </VStack>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <FormControl id="file-upload">
            <FormLabel>Upload your drawing:</FormLabel>
            <Input type="file" />
            <Button leftIcon={<FaPencilAlt />} mt={2} colorScheme="teal" onClick={handleDrawingSubmit}>
              Submit Drawing
            </Button>
          </FormControl>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <VStack spacing={4}>
            <Text>Vote for your favorite drawings:</Text>
            {/* Placeholder for drawing entries */}
            <HStack spacing={4}>
              <Image boxSize="100px" src="https://images.unsplash.com/photo-1537884557178-342a575d7d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nfGVufDB8fHx8MTcwOTQzNDgyNHww&ixlib=rb-4.0.3&q=80&w=1080" />
              <Button leftIcon={<FaCheck />} colorScheme="green" onClick={handleVote}>
                Vote
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <VStack spacing={4}>
            <Text>Winners:</Text>
            <HStack spacing={4}>
              <FaTrophy color="gold" />
              <Text>User123</Text>
            </HStack>
            {/* More winners... */}
          </VStack>
        </Box>
        {/* Real-time updates and notifications would be implemented using WebSocket or a similar real-time data solution */}
      </VStack>
    </ChakraProvider>
  );
};

export default Index;
