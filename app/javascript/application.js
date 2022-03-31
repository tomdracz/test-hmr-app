import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<p>Hello, World!!</p>);
});
