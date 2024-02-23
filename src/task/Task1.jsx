import React from "react";

const CenteredContent = () => {
  return (
    <div style={styles.head}>
      <img src="https://via.placeholder.com/150" alt="" style={styles.img} />
      <h1 style={styles.h1}>Hello, World!</h1>
    </div>
  );
};

const styles = {
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  img: {
    width: "150px",
    height: "150px",
    marginBottom: "20px",
  },
  h1: {
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default CenteredContent;
