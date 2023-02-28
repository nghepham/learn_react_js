import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Service.css';
import $ from 'jquery';


export default function Service() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function onRequest() {
    fetch('https://my-json-server.typicode.com/nghepham/learn_react_js')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          console.log("error $error" + error);
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  function onRunJQuery() {
    $(document).ready(function() {
      console.log("Document ready!");
    });

    $('#btn-jquery').css('margin-left', '24px');
    sayHellow("Nghe");
  }

  const sayHellow = (test: String = "") => {
    console.log(`Welcome ${test}`);
  }

  return (
    <div id='list-container'>
      <div className='content'>
        <Button variant="contained" onClick={() => onRequest()}>Contained</Button>
        <Button id="btn-jquery" variant="contained" onClick={() => onRunJQuery()}>jQuery</Button>

      </div>
      <div id='section'>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title hello world!, i'm Nghe. I can learn and work on everything in the world! Good luck!</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
        <article className='card-item'>
          <img className='img-item' src='https://picsum.photos/300/200' alt='card' />
          <p className='card-title'>title</p>
        </article>
      </div>
    </div>
  )
}
