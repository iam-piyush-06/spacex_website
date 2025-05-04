import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to SpaceX</h1>
      <p>Explore space with innovation and passion.</p>
    </motion.div>
  );
};

export default Home;