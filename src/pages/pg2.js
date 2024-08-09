
import React from 'react';
import '../App.css';

function Sec() {
  return (
    <div className="App">
      <header className="bg-blue-950 p-2 text-white text-4xl" >
          Positionning manual
      </header>
  <div className=' bg-black text-white'>
    <div>
        1
    </div>
    <div>
        2
    </div>
    <div>
        3
    </div>
    
  </div>

  <div className='grid bg-black text-white justify-center grid-cols-3'>
    <div>
        1
    </div>
    <div>
        2
    </div>
    <div>
        3
    </div>
    
  </div>
  <div>

  <div className='flex bg-blue-700 text-white justify-center'>
    <div>
        1
    </div>
    <div>
        2
    </div>
    <div>
        3
    </div>
    
  </div>
  <div className='flex bg-blue-700 text-white justify-center mt-4 gap-4'>
    <div className=' p-20 bg-slate-300 text-black'>
        1
    </div>
    <div className=' p-4 border-l-4 border-t-red-600'>
        2
    </div>
    <div className=' p-4 border'>
        3
    </div>
  </div>

  <div className='flex  text-white justify-center mt-4 gap-8'>
    <div className=' p-20 bg-slate-300 text-black'>
        1
    </div>
    <div className=' p-20 bg-slate-300 text-black rounded-full'>
        2
    </div>
    <div className=' p-20 bg-slate-300 text-black border-b-slate-950'>
        3
    </div>
    
  </div>
 
<button class=" hover:ring-blue-500 mt-4 p-2 bg-red-200 ring-2 ring-blue-500/50 rounded-xl">Subscribe</button>


  </div>
    </div>
  );
}

export default Sec;


