import { Box } from '@chakra-ui/react';
import React from 'react'

interface MeetBuddyCardProps {
  thumbnail: string;
}

const MeetBuddyCard: React.FC<MeetBuddyCardProps> = (props) => {
  const { thumbnail } = props;
  return (
    <Box
      borderRadius="2xl"
      height="300px"
      width="200px"
      overflow="hidden"
      position="relative"
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundImage={thumbnail}
      />
    );
}

export default MeetBuddyCard;
