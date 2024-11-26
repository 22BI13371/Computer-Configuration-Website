'use client';
import { useState } from "react";
import ProductCard from "@/components/build";
import products from "./testdata";
import "@/styles/test.css"

const ITEMS_PER_PAGE = 16;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div className="grid">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            picture={product.picture}
            title={product.title}
            specs={product.specs}
            price={product.price}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .pagination {
          margin-top: 16px;
          text-align: center;
        }
        .pagination button {
          margin: 0 4px;
          padding: 8px 12px;
          cursor: pointer;
        }
        .pagination button.active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
