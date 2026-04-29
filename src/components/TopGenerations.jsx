import React from 'react';
import Photocard from './Photocard';

const TopGenerations = async () => {
    const res = await fetch ('https://pixgen-murex.vercel.app/data.json')
    const photos= await res.json()
    const topPhotos = photos.slice(0,8)
    console.log(topPhotos)
    return (
        <div>
        <h1 className='font-bold text-center m-5 text-5xl'>Top Generations</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {topPhotos.map (photo =>
            <Photocard key={photo.id} photo={photo}></Photocard>)}
        </div>
        </div>
    );
};

export default TopGenerations;