import React from "react";
import { getBooks } from "../../data/data.js";
import { Link } from "react-router-dom";
const Books = () => {
  const books = getBooks();

  return (
    <div style={{ marginTop: " -8px", display: "flex" }}>
      <nav
        style={{
          borderLeft: "1px Solid #00f0ff",
          padding: "1rem ",
          backgroundColor: "#00f0ff",
        }}
      >
        <h3> کتاب ها ی من</h3>
        <input
          style={{
            marginTop: " 8px",
            borderRadius: "10px",
            border: "none",
            padding: "2px 15px",
          }}
          type="text"
          placeholder="جسته جوی کتاب..."
        />
        {books.map((book) => (
          <Link
            style={{
              display: "block",
              marginTop: "10px",
              textDecoration: "none",
              color: "red",
            }}
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Books;
