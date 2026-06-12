import { useState } from 'react'
import Header from './components/Header';
import {Footer} from './components/Footer';
import {ProductList} from './components/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center"><h1>ShopHUB</h1></section>
      <Header />
      <ProductList />
      <Footer name="Lê Li La" />
    </>
  )
}

export default App
