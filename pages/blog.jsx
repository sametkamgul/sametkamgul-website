import Maintenance from "@/app/components/maintenance";
import Navbar from "@/app/components/navbar";
import Posts from "@/app/components/posts/posts";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Blog = () => {
  return (
    <Flex width="100%">
      <Navbar />
      <Posts />
    </Flex>
  );
};

export default Blog;
