import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='h-full bg-blue-800 p-4'>
            <div className='my-2 mb-4'>
                <h1 className='text-2x justify-center flex items-center text-white font-bold'>Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 flex justify-start items-center rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to='/categories'>Categories</Link>
                </li>
                <li className='mb-2 flex justify-start items-center rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to='/franchicies'>Franchicies</Link>
                </li>
                <li className='mb-2 flex justify-start items-center rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to='/products'>Products</Link>
                </li>
                <li className='mb-2 flex justify-start items-center rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to='/subproducts'>Sub Products</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
