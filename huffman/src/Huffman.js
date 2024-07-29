// src/utils/huffman.js

// Função para construir a árvore de Huffman
export const buildHuffmanTree = (frequencies) => {
    let nodes = Object.keys(frequencies).map(char => ({ char, freq: frequencies[char] }));
    while (nodes.length > 1) {
      nodes.sort((a, b) => a.freq - b.freq);
      let left = nodes.shift();
      let right = nodes.shift();
      let node = { left, right, freq: left.freq + right.freq };
      nodes.push(node);
    }
    return nodes[0];
  };
  
  // Função para gerar os códigos de Huffman
  export const generateCodes = (tree, prefix = '', codeMap = {}) => {
    if (tree.char) {
      codeMap[tree.char] = prefix;
    } else {
      generateCodes(tree.left, prefix + '0', codeMap);
      generateCodes(tree.right, prefix + '1', codeMap);
    }
    return codeMap;
  };
  