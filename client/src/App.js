import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import NotFound from './views/NotFound';

function App() {
    return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/products" />
        <Route element={<Detail/>} path="/products/:id" />
        <Route element={<NotFound/>} path="/*" />
      </Routes>                         
    </div>
    );
}
export default App;