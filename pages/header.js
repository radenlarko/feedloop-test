import React from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      paddingInline={20}
      pt={10}
      flexDir="row"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      position="absolute"
    >
      <Flex flexDir="row" alignItems="center">
        <Box>
          <Image src="/FeedLoopLogo.svg" alt="logo feedloop" />
        </Box>
        <Flex ml={10}>
          <Text mr={5}>Product</Text>
          <Text mr={5}>Solutions</Text>
          <Text mr={5}>Blog</Text>
          <Text mr={5}>Company</Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex
          backgroundColor="white"
          width="140px"
          height="40px"
          justifyContent="center"
          alignItems="center"
          borderRadius="4px"
          borderWidth={1}
          borderColor="#D4D8DE"
        >
          <Text>Get Started</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
