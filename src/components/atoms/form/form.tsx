"use client"
import {SetStateAction, useState} from 'react';

function Form() {
 
  return (
  //Form
    <div>
      <div>
        <p>Name:</p>
        <input className=' border rounded-md border-black m-2'
        type="text"
        id="name"
        name="name"
        // onChange={(e) => setMessage(e.target.value)}
        value="name"
        placeholder='Name'
      />
      </div>
      <div className="ime"><p>Image</p>
      <button className=' m-2 ms-2 me-2 border rounded-md border-y-fuchsia-200 '><p className=' text-12'>Select</p></button>
      </div>

    </div>
  );
};

export {Form};
