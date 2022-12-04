import React, { useState, createContext } from "react";
import Data from "../services/Fake Service/CoursesPage";

const { courses } = Data;

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState(courses);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
