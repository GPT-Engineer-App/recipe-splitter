import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Heading } from "@chakra-ui/react";
import { FaUtensils } from "react-icons/fa";

const Index = () => {
  const [recipeName, setRecipeName] = useState("");
  const [headline, setHeadline] = useState("");
  const [subheadline, setSubheadline] = useState("");

  const handleSplit = () => {
    const words = recipeName.split(" ");
    let headlinePart = "";
    let subheadlinePart = "";

    if (words.length > 1) {
      const midIndex = Math.floor(words.length / 2);
      headlinePart = words.slice(0, midIndex).join(" ");
      subheadlinePart = words.slice(midIndex).join(" ");
    } else {
      headlinePart = recipeName;
    }

    setHeadline(headlinePart);
    setSubheadline(subheadlinePart);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" textAlign="center">
          Recipe Name Splitter
        </Heading>
        <Input placeholder="Enter recipe name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
        <Button leftIcon={<FaUtensils />} colorScheme="teal" onClick={handleSplit}>
          Split Name
        </Button>
        {headline && (
          <Box textAlign="center" mt={4}>
            <Text fontSize="2xl" fontWeight="bold">
              {headline}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {subheadline}
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
