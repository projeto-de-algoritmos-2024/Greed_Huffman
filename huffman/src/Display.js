import React from 'react';

const Display = ({ mode, huffmanCodes, encodedMessage, decodedMessage, totalBits, treeSize }) => {
  return (
    <div>
      {mode === 'encode' ? (
        <>
          <h2>Código Huffman:</h2>
          <div className="huffman-codes">
            {Object.entries(huffmanCodes).map(([char, code]) => (
              <div key={char}>
                {char}: "{code}"
              </div>
            ))}
          </div>
          <h2>Mensagem Codificada:</h2>
          <pre>{encodedMessage}</pre>
          <h2>Total de Bits:</h2>
          <pre>{totalBits}</pre>
          <h2>Tamanho da Árvore:</h2>
          <pre>{treeSize}</pre> 
        </>
      ) : (
        <>
          <h2>Mensagem Decodificada:</h2>
          <pre>{decodedMessage}</pre>
        </>
      )}
    </div>
  );
};

export default Display;
