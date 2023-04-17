import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import './style.css';

export default function App() {
  const [starCount, setStartCount] = useState([1, 2, 3, 4, 5]);
  const [rating, setRating] = useState();
  return (
    <div>
      {starCount.map((val) => {
        return (
          <>
            <FaRegStar
              color={rating + 1 > val ? 'red' : 'blue'}
              onClick={() => setRating(val)}
            />
          </>
        );
      })}
    </div>
  );
}
