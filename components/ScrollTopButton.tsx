import React, {useEffect, useState, useCallback} from "react";
import {Button, VisuallyHidden} from "@chakra-ui/react";

import {ArrowUp} from "components/icons";
import {SCROLL_BUTTON_POSITION} from "lib/constants";

interface Props {
  limit: number;
  right?: number | string | object;
  bottom?: number | string | object;
  translateY?: string;
  accessibilityContent?: string;
}

const ScrollTopButton: React.FC<Props> = ({
  limit,
  right = SCROLL_BUTTON_POSITION.RIGHT,
  bottom = SCROLL_BUTTON_POSITION.BOTTOM,
  translateY = "30px",
  accessibilityContent = "Volver al inicio",
}) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScroll = useCallback((): void => {
    if (!hasScrolled && window.scrollY >= limit) {
      setHasScrolled(true);
    } else if (hasScrolled && window.scrollY < limit) {
      setHasScrolled(false);
    }
  }, [limit, hasScrolled]);

  const handleScrollTop = useCallback((): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Button
      _active={{backgroundColor: "#363636"}}
      _hover={{backgroundColor: "#363636"}}
      backgroundColor="#404040"
      bottom={bottom}
      height={68}
      opacity={hasScrolled ? "1" : "0"}
      pointerEvents={hasScrolled ? "initial" : "none"}
      position="fixed"
      right={right}
      rounded="full"
      transform={!hasScrolled ? `translateY(${translateY})` : ""}
      width={68}
      onClick={handleScrollTop}
    >
      <ArrowUp />
      <VisuallyHidden>{accessibilityContent}</VisuallyHidden>
    </Button>
  );
};

export default ScrollTopButton;
