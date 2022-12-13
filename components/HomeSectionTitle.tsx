import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h1"
      fontSize={{ base: 'lg', md: '4xl' }}
      fontWeight="black"
      color="ghostVerse.color2.darker"
      mb={4}
      mx="auto"
    >
      {title}
    </Text>
  );
};
