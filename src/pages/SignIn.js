import React, { useEffect, useState, useCallback } from 'react'
import './SignIn.css'

export default function SignIn() {

  const [textInput, setTextInput] = useState('');
  const onAddItem = useCallback(() => {
    if (textInput === "" || textInput === undefined || textInput === null) {
      return;
    }

    let eTodo = document.getElementById('todo-list');
    let newItemEle = document.createElement('li');
    let textNode = document.createTextNode(textInput);
    newItemEle.appendChild(textNode);
    newItemEle.id = 'item' + (eTodo.childElementCount + 1);

    let firstEle = eTodo.firstElementChild;
    eTodo.insertBefore(newItemEle, firstEle);
    setTextInput('');
    document.getElementById('todo-input').value = '';
  }, []);

  useEffect(() => {
    let dom = document.getElementById('todo-input');
    dom.addEventListener('input', function (e) {
      console.log(e.target.value);
      setTextInput(e.target.value);
    })
    dom.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        onAddItem()
      }
    })

    let form = document.getElementById('login-form');
    form.addEventListener('submit', function (e) {
      console.log(e.target.value);
      alert(e.target.value)
    })
  }, [onAddItem])


  return (
    <div id='login-container'>
      <h1>Sign In</h1>
      <form id='login-form'>
        <input id='username' type={'text'} name='username' placeholder='Enter your username' required={true} />
        <input id='pass' type={'password'} name='password' placeholder='Enter your password' required={true} />
        <input id='btn-submit' type={'submit'} value='Login' name='submit' />
      </form>

      <div id='addition_form'>
        <input id='todo-input' className='input-add' type={'text'} name='item-input' placeholder='Enter item' required />
        {/* <input id='btn-add' type={'submit'} value='Add' name='add' /> */}
        <button id='btn-add' type='button' name='add' onClick={onAddItem}>Add</button>
      </div>
      <section id='result' className='div-box'>
        <h1>List addition</h1>
        <ul id='todo-list'></ul>
      </section>
    </div>
  )
}
