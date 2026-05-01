import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeartCircleExclamation,FaDownload } from "react-icons/fa6";
const AllPhotos = async() => {
     const res = await fetch ('https://pixgen-murex.vercel.app/data.json')
    const photos= await res.json()
    
    return (
        <div>
            <h1 className='font-bold text-center m-5 text-5xl'>All Photos</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
    {photos.map(photo =>
        <Card className='border rounded-xl' key={photo.id}>
        
   <div className='relative w-full aspect-square'>
          <Image src={photo.imageUrl} alt="" fill className='object-cover rounded-xl'/>
          </div>
           <h1>{photo.title}</h1>
           <div className='flex gap-3'>
            <div className='flex items-center gap-2 '>
<FaHeartCircleExclamation />
{photo.likes}
            </div>
            <Separator orientation='vertical'></Separator>
            <div className='flex items-center gap-2 '>
<FaDownload />
{photo.downloads}
            </div>
           </div>
           <Chip className='absolute right-2 top-2 font-thin'>{photo.category}</Chip>
         <Link href={`/all-photos/${photo.id}`}> <Button className="w-full">View Details</Button></Link>
          </Card>)}
        </div>
        </div>
    );
};

export default AllPhotos;