import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Heading } from "@chakra-ui/react";
import { FaUtensils } from "react-icons/fa";

const Index = () => {
  const [recipeName, setRecipeName] = useState("");
  const [headline, setHeadline] = useState("");
  const [subheadline, setSubheadline] = useState("");

  const handleSplit = () => {
    const lowerCaseRecipeName = recipeName.toLowerCase();
    let headlinePart = "";
    let subheadlinePart = "";

    const predefinedSplits = ["bakt torsk", "alt-i-ett pastagryte", "risoni", "selleririsotto med svinefilet", "kyllingbryst og risoni", "krydderstekt lyrfilet", "vegetarisk chili sin carne"];

    for (let split of predefinedSplits) {
      if (lowerCaseRecipeName.includes(split)) {
        headlinePart = split.charAt(0).toUpperCase() + split.slice(1);
        subheadlinePart = recipeName.replace(new RegExp(headlinePart, "i"), "").trim();
        break;
      }
    }

    if (!headlinePart) {
      const words = recipeName.split(" ");
      const midIndex = Math.floor(words.length / 2);
      headlinePart = words.slice(0, midIndex).join(" ");
      subheadlinePart = words.slice(midIndex).join(" ");
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
