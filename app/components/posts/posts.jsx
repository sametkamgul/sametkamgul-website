import usePosts from "@/app/hooks/usePosts";
import { Flex, Link, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const { isLoading, data } = usePosts();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data?.items);
  }, [data, data?.items]);

  return (
    <Flex
      marginTop="10rem"
      width="full"
      justifyContent="center"
      gap="2rem"
      flexDir="column"
    >
      {isLoading ? (
        <Stack alignItems="center">
          <Spinner width="3rem" height="3rem"/>
        </Stack>
      ) : (
        posts?.map((p, idx) => (
          <VStack key={idx} alignItems="center" justifyContent="center">
            <Text fontSize="2rem">{p.title}</Text>
            <Link href={p.link} isExternal={true}>
              <Text textDecoration="underline" fontStyle="italic">
                read more
              </Text>
            </Link>
          </VStack>
        ))
      )}
    </Flex>
  );
};

export default Posts;
