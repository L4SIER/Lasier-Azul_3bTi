import { useState } from 'react'
import logo from './assets/Logo_da_Azul.svg'
import './App.css'

function App() {


  return (
    <>
    <main>
      <section className="foto">
      </section>
      <section className='log'>
        <img src={logo} alt="" />
        
        <div className='login'>
        <h3>fazer login</h3>
        <p>login:</p>
        <input type="text" placeholder='digite o usuario' />
        <p>senha:</p>
        <input type="text" placeholder='digite a senha'/>
        <a className='link'>esqueci meu login ou senha</a>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
