import React, { useEffect, useRef, useState } from 'react'

const Countdown = () => {
    const [days, setDays] = useState(12);
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(12);
    const [seconds, setSeconds] = useState(12);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startCountdown = () => {
        setIsRunning(true);
    };

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setSeconds(prev => {
                    if (prev > 0) return prev - 1;
                    if (minutes > 0 || hours > 0 || days > 0) {
                        if (minutes > 0) {
                            setMinutes(m => m - 1);
                            return 59;
                        } else if (hours > 0) {
                            setHours(h => h - 1);
                            setMinutes(59);
                            return 59;
                        } else if (days > 0) {
                            setDays(d => d - 1);
                            setHours(23);
                            setMinutes(59);
                            return 59;
                        }
                    }
                    clearInterval(timerRef.current);
                    setIsRunning(false);
                    return 0;
                });
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning, days, hours, minutes]);


    return (
        <div className='w-full h-screen bg-gradient-to-r from-gray-800 to-gray-700 flex flex-col gap-3 items-center'>
            <h1 className='text-white my-20 text-4xl font-serif font-bold '>CountDown Timer</h1>
            <div className='flex gap-7 w-[500px] h-auto text-center items-center justify-center'>
                <div>
                    <input type='number' value={days} onChange={(e) => setDays(e.target.value)} className='border-[1px] border-white rounded-lg p-[4px] m-2 text-5xl text-white bg-transparent text-center w-20 font-bold' />
                    <p className='text-white'>Days</p>
                </div>

                <div>
                    <input type='number' value={hours} onChange={(e) => setHours(e.target.value)} className='border-[1px] border-white rounded-lg p-[4px] m-2 text-5xl text-white bg-transparent text-center w-20 font-bold' />
                    <p className='text-white'>Hours</p>
                </div>

                <div>
                    <input type='number' value={minutes} onChange={(e) => setMinutes(e.target.value)} className='border-[1px] border-white rounded-lg p-[4px] m-2 text-5xl text-white bg-transparent text-center w-20 font-bold' />
                    <p className='text-white'>Minutes</p>
                </div>

                <div>
                    <input type='number' value={seconds} onChange={(e) => setSeconds(e.target.value)} className=' border-[1px] border-white rounded-lg p-[4px] m-2 text-5xl text-white bg-transparent text-center w-20 font-bold' />
                    <p className='text-white'>Seconds</p>
                </div>

            </div>

            <div className='flex gap-7 w-[500px] h-auto text-center items-center justify-center'>
                <button
                    onClick={startCountdown}
                    className='bg-white text-gray-800 font-bold px-4 py-2 rounded-lg mt-8 hover:bg-gray-200'
                >
                  {isRunning ? 'Running...' : 'Start Countdown'}
                </button>
                <button onClick={() => { clearInterval(timerRef.current); setIsRunning(false); }}
                     className='bg-white text-gray-800 font-bold px-4 py-2 rounded-lg mt-8 hover:bg-gray-200'>
                        Pause
                        </button>
                <button onClick={() => { clearInterval(timerRef.current); setDays(0); setHours(0); setMinutes(0); setSeconds(0); setIsRunning(false); }}
                     className='bg-white text-gray-800 font-bold px-4 py-2 rounded-lg mt-8 hover:bg-gray-200'>
                        Reset
                        </button>

            </div>

        </div>
    )
}

export default Countdown
