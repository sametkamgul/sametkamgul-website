const navbar = {
  baseStyle: {
    nav: {
      backgroundColor: "softBlack",
      alignItems: "center",
      justifyContent: "space-between",
      position: "fixed",
      paddingLeft: "20px",
      paddingRight: "20px",
      top: "0",
      left: "0",
      right: "0",
      height: "64px",
      flexDirection: "row",
      "text-wrap": 'no-wrap'
    },
    navItem: {
      textDecoration: "none",
      fontSize: "1.4rem",
      color: "white",
      _hover: {
        color: "red",
      },
    },
  },
};

export default navbar;
