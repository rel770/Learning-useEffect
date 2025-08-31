import { useState, useEffect } from "react";

function ExampleUseEffect4() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // This effect sets up and cleans up a timer
    useEffect(() => {
        let intervalId: number | undefined;

        if (isRunning) {
            console.log("Starting timer...");
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }

        // Cleanup function runs when component unmounts or dependencies change
        return () => {
            if (intervalId) {
                console.log("Cleaning up timer...");
                clearInterval(intervalId);
            }
        };
    }, [isRunning]); // Dependency on isRunning

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div>
            <h3>Timer: {seconds} seconds</h3>
            <div>
                <button onClick={handleStart} disabled={isRunning}>
                    Start Timer
                </button>
                <button onClick={handleStop} disabled={!isRunning} style={{ marginLeft: '10px' }}>
                    Stop Timer
                </button>
                <button onClick={handleReset} style={{ marginLeft: '10px' }}>
                    Reset Timer
                </button>
            </div>
            <p><small>Check console for setup and cleanup messages</small></p>
        </div>
    );
}

export default ExampleUseEffect4;
