import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { SearchBar } from './SearchBar';
import { Table } from './Table';
import {Form} from './Form'
//import AWS from './aws-config'



function App() {
  const [count, setCount] = useState(0)



  return (
    <>

      <SearchBar/>
      <h1>Agregar Datos</h1>
      {/*<Form/>*/}
      <h1>Datos</h1>
      <Table/>
    </>
  )
}

export default App
