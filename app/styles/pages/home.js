const home = {
  baseStyle: {
    main: {
      gap: { base: "0.5rem", lg: "4rem" },
    },
    wrapper: {
      paddingTop: { base: "6rem", lg: "0rem" },
      gap: { base: "2rem", lg: "0rem" },
    },
    subWrapper: {
      gap: "2rem",
      padding: { base: "0rem", lg: "4rem" },
      direction: "column",
      alignItems: "center",
    },
    description: {
      textAlign: { base: "center", lg: "end" },
      alignItems: "center",
      color: "placeholderBlack",
      fontSize: { base: "1.5rem", lg: "2rem" },
      display: "flex",
    },
    subDescription: {
      fontSize: { base: "1rem", lg: "1.5rem" },
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      padding: "1rem",
    },
    icon: {
      boxSize: "5xs",
      borderRadius: "100%",
    },
  },
};

export default home;
