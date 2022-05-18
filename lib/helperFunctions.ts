import { PET_PHOTOS } from "./constants";

/**
 *
 * @returns A random pet photo from the ones declared in the constats array.
 */
export const getRandomPetPhoto = (): string => {
  const randomIndex = Math.floor(Math.random() * PET_PHOTOS.length);
  return PET_PHOTOS[randomIndex];
}
