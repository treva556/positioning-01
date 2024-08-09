
import React from 'react';
import '../App.css';

function First() {
  return (
    <div className="App">
      <header className="bg-blue-950 p-6 text-white text-4xl" >
      </header>
  <p className=' p-5 text-red-600 font-mono'>  1. Center Align Links:</p>

      <nav class="flex justify-center p-4 bg-gray-800 text-white">
  <a href="/" class="mx-4 hover:underline">Pg 1</a>
  <a href="pg2" class="mx-4 hover:underline">Pg 2</a>
  <a href="#" class="mx-4 hover:underline">Pg 3</a>
  <a href="#" class="mx-4 hover:underline">Pg 4</a>
</nav>

Aligning Links to Far Ends:

Flexbox Method

<nav class="flex justify-between p-4 bg-gray-800 text-white">
  <a href="#" class="hover:underline">Home</a>
  <a href="#" class="hover:underline">About</a>
  <a href="#" class="hover:underline">Services</a>
  <a href="#" class="hover:underline">Contact</a>
</nav>
  <p className=' text-red-600'> 2. Fixed and Responsive Column Widths:   </p>
<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
  <div class="col-span-1 md:col-span-2">Item 1</div>
  <div class="col-span-1 md:col-span-2">Item 2</div>
  <div class="col-span-1">Item 3</div>
  <div class="col-span-1">Item 4</div>
</div>

Basic Grid Setup:
<div class="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
  <div class="p-4 bg-slate-500">Item 1</div>
  <div class="p-4">Item 2</div>
  <div class="p-4">Item 3</div>
  <div class="p-4">Item 4</div>
  <div class="p-4">Item 5</div>
  <div class="p-4">Item 6</div>
</div>

<p className=' text-red-600'>3. Vertical centering Grid;</p>

<div class="grid place-items-center h-15">
  <div class="w-1/2 bg-slate-600">
     Your content here
  </div>
</div>

                    Flexbox
 <div class="flex items-center h-15">
  <div class="w-1/2 bg-slate-600">
     Your content here
  </div>
</div>  


<p className=' text-red-600'>4. Horizontal centering: Auto </p>

<div class="w-1/2 mx-auto bg-slate-600">
   Your content here
</div>


Flex
<div class="flex justify-center">
  <div class="w-1/2 bg-slate-500" >
     Your content here
  </div>
</div>


   <p className=' text-red-600'> 5.  Singe column to multi column layout   </p>  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-red-100">
  <div class="p-4">Item 1</div>
  <div class="p-4">Item 2</div>
  <div class="p-4">Item 3</div>
  <div class="p-4">Item 4</div>
  <div class="p-4">Item 5</div>
  <div class="p-4">Item 6</div>
</div>

<div class="p-4 flex items-center justify-center bg-red-300">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="p-20 bg-slate-100">Item 1</div>
    <div class="p-20 bg-white">Item 2</div>
    <div class="p-4 bg-white w-28 border border-red-900">Item 3</div>
    <div class="p-4 border border-t-blue-400">Item 4</div>
  </div>
</div>

single column layout
<div class="flex flex-col md:flex-row">
  <div class="flex-1 p-4">Item 1</div>
  <div class="flex-1 p-4">Item 2</div>
  <div class="flex-1 p-4">Item 3</div>
</div>
    </div>
  );
}

export default First;



