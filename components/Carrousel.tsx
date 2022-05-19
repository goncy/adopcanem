import React, {useCallback, useEffect, useRef, useState} from "react";
import {Stack, HStack, Button} from "@chakra-ui/react";
import {motion, useAnimation} from "framer-motion";

import useResizeObserver from "../hooks/useResizeObserver";

const Carrousel: React.FC<{children: JSX.Element[]}> = ({children}) => {
  const carrouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperCurrentWidth = useResizeObserver(wrapperRef);
  const wrapperPrevWidth = useRef<number>(0);
  const [carrouselPageIdx, setCarrouselPageIdx] = useState<number>(0);
  const carrouselItemsSpacing = 18; // pixel units
  const animationControls = useAnimation();
  const calculateDistance = useCallback(() => {
    let carrouselRestDistance: number = 0;
    let carrouselItemsWidth: number = 0;

    if (carrouselRef.current) {
      const widthMappedItems = Array.from(carrouselRef.current.children)
        .slice(carrouselPageIdx)
        .map((child) => {
          return child.clientWidth;
        });

      carrouselItemsWidth = widthMappedItems[0];
      carrouselRestDistance = widthMappedItems.reduce((prev, curr) => {
        if (isNaN(prev)) return 0 + curr;
        if (isNaN(curr)) return 0 + prev;

        return prev + curr;
      });
    }
    const trailingSpace =
      carrouselRestDistance < wrapperCurrentWidth
        ? wrapperCurrentWidth - carrouselRestDistance - carrouselItemsSpacing
        : 0;

    const totalTrailingSpace = trailingSpace ? Math.abs(trailingSpace) - carrouselItemsSpacing : 0;
    const dist = carrouselPageIdx * (carrouselItemsWidth + carrouselItemsSpacing);

    return [dist, totalTrailingSpace];
  }, [carrouselPageIdx, wrapperCurrentWidth]);
  const [maxReached, setMaxReached] = useState<boolean>(false);

  // Restarts carrousel in case of resizing
  useEffect(() => {
    if (maxReached && wrapperPrevWidth.current !== wrapperCurrentWidth) {
      setCarrouselPageIdx(0);
      setMaxReached(false);
    }
    wrapperPrevWidth.current = wrapperCurrentWidth;
  }, [maxReached, wrapperCurrentWidth]);

  useEffect(() => {
    if (carrouselPageIdx === 0) {
      animationControls.start({
        x: "0px",
        transition: {ease: "easeOut", duration: 1},
      });
      setMaxReached(false);

      return;
    }
    const [distance, trailingSpace] = calculateDistance();

    if (trailingSpace) {
      setMaxReached(true);
    }
    animationControls.start({
      x: `-${distance - trailingSpace}px`,
      transition: {ease: "easeOut", duration: 0.5},
    });
  }, [animationControls, calculateDistance, carrouselPageIdx]);

  return (
    <Stack height={"max"} paddingTop={70} position={"relative"} width={"full"}>
      <Stack ref={wrapperRef} overflow={"hidden"} width={"full"}>
        <MotionStack
          ref={carrouselRef}
          alignItems={"stretch"}
          animate={animationControls}
          spacing={`${carrouselItemsSpacing}px`}
          width={"max-content"}
        >
          {children}
        </MotionStack>
      </Stack>
      {carrouselPageIdx >= 1 && (
        <Button
          bg={"primary.400"}
          border={"4px solid"}
          borderColor={"blackAlpha.400"}
          borderRadius={"full"}
          fontSize={"2xl"}
          left={"-5"}
          position={"absolute"}
          size={"lg"}
          top={"40%"}
          variant={"unstyled"}
          onClick={() => {
            if (maxReached) setMaxReached(false);
            setCarrouselPageIdx((old) => old - 1);
          }}
        >
          {"<--"}
        </Button>
      )}
      {!maxReached && (
        <Button
          bg={"primary.400"}
          border={"4px solid"}
          borderColor={"blackAlpha.400"}
          borderRadius={"full"}
          fontSize={"2xl"}
          position={"absolute"}
          right={"-5"}
          size={"lg"}
          top={"40%"}
          variant={"unstyled"}
          onClick={() => {
            setCarrouselPageIdx((old) => old + 1);
            if (wrapperPrevWidth.current !== wrapperCurrentWidth) {
              wrapperPrevWidth.current = wrapperCurrentWidth;
            }
          }}
        >
          {"-->"}
        </Button>
      )}
    </Stack>
  );
};
const MotionStack = motion(HStack);

export default Carrousel;
