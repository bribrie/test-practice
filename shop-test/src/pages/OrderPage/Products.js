import React from "react";

const Products = ({ name, imagePath }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "70%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          min="0"
          name="quantity"
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;
