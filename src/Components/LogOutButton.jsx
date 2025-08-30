"use client";

import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutButton = () => {
    return (
        <div>
            <button className='btn mb-10 mt-10' onClick={()=>signOut()}>LogOut</button>
        </div>
    );
};

export default LogOutButton;