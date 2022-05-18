import React, {useEffect, useState} from "react";
import {IconButton, IconButtonProps} from "@chakra-ui/react";
import {motion, Variants} from "framer-motion";
import {FaChevronUp as UpIcon} from "react-icons/fa";

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {duration: 0.1, ease: "easeOut"},
  },
  tap: {
    scale: 0.9,
    transition: {duration: 0.1, ease: "easeOut"},
  },
  hover: {
    scale: 1.05,
    transition: {duration: 0.1, ease: "easeOut"},
  },
};

const MotionIconButton = motion<IconButtonProps>(IconButton);

const ScrollToTop: React.FC = ({...props}) => {
  const [showButton, setShowButton] = useState(false);
  const bgColor = "blackAlpha.800";
  const activeBgColor = "blackAlpha.700";

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // show the button after scrolling down 400px or more
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  if (!showButton) return null;

  return (
    <MotionIconButton
      _active={{bg: activeBgColor}}
      _focus={{bg: activeBgColor}}
      _hover={{bg: activeBgColor}}
      animate="animate"
      aria-label="Scroll to top"
      bg={bgColor}
      border="none"
      borderRadius={9999}
      bottom={{
        base: "20px",
        md: "70px",
        lg: "70px",
        xl: "20px",
      }}
      boxShadow="rgba(0, 0, 0, 0.19) 0px 4px 12px, rgba(0, 0, 0, 0.23) 0px 4px 4px"
      color="white"
      fontSize="20px"
      icon={<UpIcon />}
      initial="initial"
      pos="fixed"
      right="20px"
      size="lg"
      variant="solid"
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      zIndex={9999}
      onClick={scrollToTop}
      {...props}
    />
  );
};

export default ScrollToTop;
