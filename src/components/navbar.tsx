import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack boxSize={"60px"}>
      <Image src={logo} />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
