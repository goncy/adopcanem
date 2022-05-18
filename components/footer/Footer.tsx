import React from 'react'
import { Box,Text, Container, HStack, Stack } from '@chakra-ui/react';

interface FooterProps {

}

 const Footer: React.FC<FooterProps> = ({}) => {
    return (
      <Box bg="#F8F3E3" color="black">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          {/* Top */}

          {/* Bottom */}
          <HStack width="full" justifyContent="space-between">
            {/* Logo */}

          </HStack>
        </Container>
      </Box>
    );
}

export default Footer
