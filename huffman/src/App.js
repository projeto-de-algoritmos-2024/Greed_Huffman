import React, { useState } from 'react';
import { generateCodes, buildHuffmanTree } from './Huffman';
import Display from './Display';

function App() {
  const [inputText, setInputText] = useState('');
  const [huffmanCodes, setHuffmanCodes] = useState({});
  const [encodedMessage, setEncodedMessage] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');
  const [totalBits, setTotalBits] = useState(0);
  const [treeSize, setTreeSize] = useState(0); 
  const [mode, setMode] = useState('encode');

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
    const treeSize = inputText.length; 

    setHuffmanCodes(huffmanCodes);
    setEncodedMessage(encodedMessage.trim());
    setTotalBits(totalBits);
    setTreeSize(treeSize);
    setDecodedMessage('');
  };

  const decodeHuffman = () => {
    if (!inputText || !Object.keys(huffmanCodes).length) return;

    const reversedCodes = Object.entries(huffmanCodes).reduce((acc, [char, code]) => {
      acc[code] = char;
      return acc;
    }, {});

    let currentCode = '';
    let decodedMessage = '';

    for (let bit of inputText.replace(/ /g, '')) {
      currentCode += bit;
      if (reversedCodes[currentCode]) {
        decodedMessage += reversedCodes[currentCode];
        currentCode = '';
      }
    }

    setDecodedMessage(decodedMessage);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Codificação e Decodificação de Huffman</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Digite sua mensagem aqui..."
      />
      <br />
      <div>
        <label>
          <input
            type="radio"
            name="mode"
            value="encode"
            checked={mode === 'encode'}
            onChange={() => setMode('encode')}
          />
          Codificar
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="decode"
            checked={mode === 'decode'}
            onChange={() => setMode('decode')}
          />
          Decodificar
        </label>
      </div>
      <br />
      {mode === 'encode' ? (
        <button onClick={encodeHuffman}>Codificar</button>
      ) : (
        <button onClick={decodeHuffman}>Decodificar</button>
      )}
      <Display
        mode={mode}
        huffmanCodes={huffmanCodes}
        encodedMessage={encodedMessage}
        decodedMessage={decodedMessage}
        totalBits={totalBits}
        treeSize={treeSize} 
      />
    </div>
  );
}

export default App;
