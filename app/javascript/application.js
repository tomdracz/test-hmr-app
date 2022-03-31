import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Test from './test';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Test />);
});
