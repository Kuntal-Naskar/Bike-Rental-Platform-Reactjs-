import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const Contact = () => {
    const {text} = useTypewriter({
        words:['Welcome', 'to', 'riders'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
        });
  return (
    <div>
    <h1>Saheli {' '}
    <span style={{fontWeight:'bold',color:'green'}}>
      {text}
    </span>
    <span style={{color:'red'}}><Cursor/></span>
  </h1>
  </div>
  )
}

export default Contact