// ZustandExample.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ZustandExample = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Zustand Example Page</h1>
      <p>
        This is an example page for Zustand. You are viewing the content for ID: {id}.
      </p>
      {/* Add your Zustand-related example content here */}
    </div>
  );
};

export default ZustandExample;
