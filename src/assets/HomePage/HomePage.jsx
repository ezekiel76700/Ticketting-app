// import React from "react";
// import "./App.css"; // Optional CSS file for styles
import backgroundImg from '../Img/pup.jpeg';
function CustomerSupportPortal() {
  return (
    <div style={styles.page}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Customer Support Portal®</h1>
        <p style={styles.description}>
          The Portal that allows you to log and monitor cases pertaining to your
          organization. No need to call or send an email—simply click the button
          below to get started.
        </p>
        {/* Login Button */}
        <button style={styles.button}>Login Using Your Email</button>
      </header>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <span>© 2018-2020 Interswitch Nigeria</span>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Main Site
          </a>
          <a href="#" style={styles.footerLink}>
            Reseller Agent
          </a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    width: "100vw",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#F0CEFF",
  },
  header: {
    textAlign: "center",
    padding: "50px 20px",
    color: "#ffffff",
    backgroundImage: `url(${backgroundImg})`, // Replace with your actual image URL
    backgroundSize: "cover", // Ensures the image covers the entire header area
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent the image from repeating
    minHeight: "300px", // Set a height for the header
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center the content vertically
  },
  title: {
    fontSize: "2em",
    margin: "0 0 20px",
  },
  description: {
    fontSize: "1em",
    margin: "0 0 40px",
  },
 
  button: {
    backgroundColor: "#ffffff",
    color: "#8829B7",
    padding: "16px 16px",
    border: "none",
    borderRadius: "4px", 
    fontSize: "0.9em", 
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    width: "200px", 
    maxWidth: "80%", 
    margin: "0 auto", 
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #ddd",
    fontSize: "0.9em",
  },
  footerLinks: {
    marginTop: "10px",
  },
  footerLink: {
    margin: "0 10px",
    color: "#8829B7",
    textDecoration: "none",
  },
};

export default CustomerSupportPortal;

