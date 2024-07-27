import React, { useState } from "react";
import {
  Flex,
  Text,
  Input,
  VStack,
  Textarea,
  Button,
  useToast,
  Link,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "@/app/components/navbar";
import { useMutation } from "@tanstack/react-query";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

const Contact = () => {
  const recaptchaRef = React.createRef();
  const toast = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(200, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const templateParams = {
        name: `${values.firstName} ${values.lastName}`,
        sender: values.email,
        message: values.message,
        subject: "Contact Form",
      };

      const token = await recaptchaRef.current.executeAsync();

      if (token) {
        mutation.mutate(templateParams);
      }
    },
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: async (templateParams) => {
      const r = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(templateParams),
      });

      const data = await r.json();

      toast({
        title: data?.message,
        status: data?.error ? "error" : "success",
        duration: 1000,
        isClosable: true,
        position: "bottom",
        containerStyle: {
          backgroundColor: "softBlack",
          color: "white",
          borderRadius: "0.25rem",
        },
      });

      formik.resetForm();
      setFormSubmitted(true);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Flex width="100vw" height="100vh">
        <Navbar />
        <Flex alignItems="center" justifyContent="center" width="full">
          {formSubmitted ? (
            <VStack>
              <Text textAlign="center" fontSize="2xl">
                message is sent! I&apos;ll contact you
              </Text>
              <Box
                borderRadius="0.25rem"
                width="12rem"
                height="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="softBlack"
                color="white"
              >
                <Link href="/">
                  <Text textAlign="center" fontSize="2xl">
                    go home
                  </Text>
                </Link>
              </Box>
            </VStack>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <VStack width={{ base: "20rem", md: "30rem", lg: "40rem" }}>
                <Text fontSize="2rem" color="softBlack">
                  Contact me
                </Text>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="first name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  borderColor={
                    formik.touched.firstName && formik.errors.firstName
                      ? "red"
                      : "softBlack"
                  }
                />

                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  borderColor={
                    formik.touched.lastName && formik.errors.lastName
                      ? "red"
                      : "softBlack"
                  }
                />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  borderColor={
                    formik.touched.email && formik.errors.email
                      ? "red"
                      : "softBlack"
                  }
                />

                <Textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  borderColor={
                    formik.touched.message && formik.errors.message
                      ? "red"
                      : "softBlack"
                  }
                />

                <Button
                  type="submit"
                  width="full"
                  backgroundColor="softBlack"
                  color="white"
                  _hover={{
                    backgroundColor: "white",
                    color: "softBlack",
                    border: "1px solid",
                    borderColor: "softBlack",
                  }}
                  isLoading={mutation.isPending}
                >
                  send message
                </Button>
              </VStack>
            </form>
          )}
        </Flex>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          style={{ display: "inline-block" }}
          theme="dark"
          sitekey="6LeU6xYqAAAAAB-J4-ujWYjB00HqfoYH7Ao9EX6J"
        />
      </Flex>
    </motion.div>
  );
};

export default Contact;
