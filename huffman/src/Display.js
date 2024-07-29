// src/components/Display.js

import React from 'react';

const Display = ({ huffmanCodes, encodedMessage, totalBits }) => {
  return (
    <div>
      <h2>Código Huffman:</h2>
      <pre>{JSON.stringify(huffmanCodes, null, 2)}</pre>
      <h2>Mensagem Codificada:</h2>
      <pre>{encodedMessage}</pre>
      <h2>Total de Bits:</h2>
      <pre>{totalBits}</pre>
    </div>
  );
};

export default Display;
