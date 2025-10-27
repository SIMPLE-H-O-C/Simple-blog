import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <motion.div
      className="search-bar-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Form onSubmit={handleSubmit} className="w-100 d-flex justify-content-center">
        <InputGroup className="search-input-group">
          <Form.Control
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>
    </motion.div>
  );
};

export default SearchBar;
