import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';

const Rotefile = () => {

    const selector = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    return (

        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-3xl rounded-2xl bg-white p-8 text-center ">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800">
                    Counter
                </h3>

                <h5 className="mt-1 text-sm font-medium text-slate-400">
                    Redux state
                </h5>

                {/* Count */}
                <h1 className="my-8 text-6xl font-extrabold text-blue-600">
                    {selector}
                </h1>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => dispatch(decrement())}
                        className="flex h-12 w-20 items-center justify-center rounded-xl border-2 border-slate-200 bg-slate-50 text-2xl font-bold text-slate-700 transition-all duration-200 hover:border-red-400 hover:bg-red-50 hover:text-red-500 active:scale-95"
                    >
                        −
                    </button>

                    <button
                        onClick={() => dispatch(increment())}
                        className="flex h-12 w-20 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 active:scale-95"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Rotefile;