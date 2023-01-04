import React from 'react';
import Form from './components/form';
import './index.css';
import '../fonts/Raleway/static/Raleway-Regular.ttf';
import PreloadImages from './components/preload';


export default function App() {
  return (
    <div className='App'>

      <PreloadImages />
      <Form />
    </div>
  );
}
