// src/App.js

import React, { useState } from 'react';
import { generateCodes, buildHuffmanTree } from './Huffman';
import Display from './Display';

function App() {
  const [inputText, setInputText] = useState('');
  const [huffmanCodes, setHuffmanCodes] = useState({});
  const [encodedMessage, setEncodedMessage] = useState('');
  const [totalBits, setTotalBits] = useState(0);

  const encodeHuffman = () => {
    const frequencies = {};
    for (let char of inputText) {
      frequencies[char] = (frequencies[char] || 0) + 1;
    }

    const huffmanTree = buildHuffmanTree(frequencies);
    const huffmanCodes = generateCodes(huffmanTree);
    
    let encodedMessage = '';
    for (let char of inputText) {
      encodedMessage += huffmanCodes[char] + ' ';
    }

    const totalBits = encodedMessage.replace(/ /g, '').length;

    setHuffmanCodes(huffmanCodes);
    setEncodedMessage(encodedMessage.trim());
    setTotalBits(totalBits);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Codificação de Huffman</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Digite sua mensagem aqui..."
      />
      <br />
      <button onClick={encodeHuffman}>Codificar</button>
      <Display huffmanCodes={huffmanCodes} encodedMessage={encodedMessage} totalBits={totalBits} />
    </div>
  );
}

export default App;