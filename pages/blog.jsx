import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/navbar";
import Posts from "@/app/components/posts/posts";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Navbar />
        <Posts />
      </Flex>
    </motion.div>
  );
};

export default Blog;
