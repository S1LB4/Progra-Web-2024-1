import './Body.css';
import React, { useState, useEffect} from 'react';
import { Button } from '../Button/Button';
import { img } from '../Data/imgs.jsx'

export function Body() {
    const[counter,setCounter]=useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showImage, setShowImage] = useState(true);

    const handleClickCounter =(value)=>{
        if(value === 'add'){
            setCounter(counter +1)
        }else if (value === 'subtract' && counter > 0){
            setCounter(counter -1)
            setCurrentImageIndex(0)
        }else if (value === 'reset'){
            setCounter(0)
            setShowImage(0);
        }
    }

    useEffect(() => {
        if (counter >= 20 && currentImageIndex === 0) {
          setCurrentImageIndex(1)
        } else if (counter >= 60 && currentImageIndex === 1) {
          setCurrentImageIndex(2)
        } else if (counter >= 100 && currentImageIndex === 2) {
          setCurrentImageIndex(3)
        } else if (counter >= 140 && currentImageIndex === 3) {
          setCurrentImageIndex(4)
        } else if (counter >= 160 && currentImageIndex === 4) {
          setCurrentImageIndex(5)
        }
      }, [counter, currentImageIndex])

  return (
    <>
       <h1>Irritated</h1>
       <div className='container'>
        <Button onClick={() => handleClickCounter('subtract')}> Let it Sleep </Button>
        {showImage && <img src={img[currentImageIndex]} alt='Counter Image' className='image-transition' />}

        <Button onClick={() => handleClickCounter('add')}> Wake it Up </Button>
      </div>
                <h2>{counter}</h2>
                <Button onClick={() => handleClickCounter('reset')}>Reset</Button>

    </>
  );
}
