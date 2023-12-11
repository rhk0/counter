import { useState } from 'react';

export default function Homepage() {
  return (
    <>
    <div className=" pt-10 items-center justify-center text-center mx-auto text-red-800 underline decoration-solid">        
        <h1>This app created for increment and decrement</h1>
    </div>
    <div className='text-center flex' >
        
      <MyButton />
      <MyButton />
    </div>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }


function decrement(){
    setCount(count-1);
}
      return (
        <>
        
       <div className="p-2 flex items-center justify-center h-screen mx-auto">
       <button className='p-5' onClick={decrement}>
       - 
    </button>
    <p>{count}</p>
    <button className='p-5' onClick={increment}>
        +
    </button> 
       </div>

    
    </>
);
}


