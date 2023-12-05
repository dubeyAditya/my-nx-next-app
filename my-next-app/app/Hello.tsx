"use client"
import { useEffect, useState } from 'react';

export default function Hello() {

  const [message, setMessage] = useState('Hi from Next');

  useEffect(() => {
    (
      fetch('http://localhost:4200/api/hello')
      .then((res: any) => res.json()))
      .then((data: any) => {
        setMessage(data.message);
      });
  }, []);


  return <div id="welcome">
    <h1>
      <span> Hi there, </span>
      Welcome {message} 👋
    </h1>
  </div>
}