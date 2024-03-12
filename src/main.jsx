import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx';
import './styles.css'
import { AddCategory } from './components/AddCategory.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GifExpertApp />
  </React.StrictMode>,
)
