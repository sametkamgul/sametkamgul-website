const navbar = {
  baseStyle: {
    nav: {
      alignItems: "center",
      justifyContent: "space-between",
      position: "fixed",
      paddingLeft: "20px",
      paddingRight: "20px",
      top: "0",
      left: "0",
      right: "0",
      height: "4rem",
      flexDirection: "row",
      zIndex: "1000",
    },
    navItem: {
      textDecoration: "none",
      fontSize: "1.4rem",
      color: { base: "softBlack", lg: "white" },
      _hover: {
        color: "red",
      },
    },
    mobileNavTitle: {
      color: "softWhite",
      fontSize: "1.5rem",
    },
    mobileWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "end",
      width: "full",
      padding: "1rem",
      backgroundColor: "softBlack",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "1000"
    },
    desktopPageTitle: {
      fontSize: "2rem",
      color: "white",
    },
  },
};

export default navbar;
