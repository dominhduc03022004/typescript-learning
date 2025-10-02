import React, { useState } from 'react';
import Button from './Button';

function MyUseState() {
    const [count, setCount] = useState<number>(0);
    const handleInc = () => {
        setCount(count + 1)
        setCount((countPrev) => countPrev + 1) 
    }
    return (
        <div>
            Count : {count}
            <br />
            <Button label='Tang Count' color='blue' onClick={handleInc}></Button>
            <Button label='Tang Count 2' color='red' onClick={() => setCount(count + 1)}></Button>
        </div>
    );
}

export default MyUseState;