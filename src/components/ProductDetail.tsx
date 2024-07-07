// src/components/ProductDetail.tsx
"use client"
import { useState } from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

const ProductDetail = ({ product }: Props) => {
  const [claimed, setClaimed] = useState(product.claimed);

  const handleClaim = async () => {
    const response = await fetch(`/api/claim/${product.id}`, {
      method: 'POST',
    });

    if (response.ok) {
      setClaimed(true);
    }
  };

  const handleRefund = async () => {
    const response = await fetch(`/api/refund/${product.id}`, {
      method: 'POST',
    });

    if (response.ok) {
      setClaimed(false);
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      {claimed ? (
        <div>
          <p>Game information: [Your game details here]</p>
        </div>
      ) : (
        <div>
          <button onClick={handleClaim}>Claim</button>
          <button onClick={handleRefund}>Refund</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
