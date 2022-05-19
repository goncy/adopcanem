import {Box} from "@chakra-ui/react";
import React from "react";

interface MeetBuddyCardProps {
  thumbnail: string;
}

const MeetBuddyCard: React.FC<MeetBuddyCardProps> = (props) => {
  const {thumbnail} = props;

  return (
    <Box
      backgroundImage={thumbnail}
      backgroundPosition="center center"
      backgroundSize="cover"
      borderRadius="2xl"
      height="300px"
      overflow="hidden"
      position="relative"
      width="200px"
    />
  );
};

export default MeetBuddyCard;
