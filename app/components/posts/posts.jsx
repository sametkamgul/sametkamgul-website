import usePosts from "@/app/hooks/usePosts";
import { Flex, Link, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Posts = () => {
  const { isLoading, data } = usePosts();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data?.items);
  }, [data, data?.items]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex width="full" justifyContent="center" gap="2rem" flexDir="column">
        {isLoading ? (
          <Stack alignItems="center">
            <Spinner width="3rem" height="3rem" />
          </Stack>
        ) : (
          posts?.map((p, idx) => (
            <VStack key={idx} alignItems="center" justifyContent="center">
              <Text fontSize="1.5rem" padding="1rem" textAlign="center" width={{base: "100%%", sm: "75%"}}>
                {p.title}
              </Text>
              <Link href={p.link} isExternal={true}>
                <Text textDecoration="underline" fontStyle="italic">
                  read more
                </Text>
              </Link>
            </VStack>
          ))
        )}
      </Flex>
    </motion.div>
  );
};

export default Posts;
