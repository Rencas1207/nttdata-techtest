import { Skeleton, Stack, StackDivider } from '@chakra-ui/react';

const LoadingComponent = ({ count = 8 }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <Skeleton key={index} height="45px" />
  ));

  return (
    <Stack divider={<StackDivider borderColor="gray.200" />}>{skeletons}</Stack>
  );
};

export default LoadingComponent;
