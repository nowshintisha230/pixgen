import { FaHeartCircleExclamation, FaDownload } from "react-icons/fa6";
import { Card, Separator } from '@heroui/react';
import Image from 'next/image';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params; // ✅ await params

  const res = await fetch('https://pixgen-murex.vercel.app/data.json');
  const photos = await res.json();
  const photo = photos.find(p => p.id === Number(id));

  if (!photo) return <p>Photo not found.</p>; 

  return (
   <div className='flex justify-center p-4'>
  <Card className='w-56 sm:w-72 md:w-80 p-3'>
    <div className='relative size-40 sm:size-52 md:size-64 mx-auto'>
      <Image src={photo.imageUrl} alt={photo.title} fill className='object-cover rounded-xl' />
    </div>
    <h1 className='text-sm sm:text-base font-semibold mt-2'>{photo.title}</h1>
    <div className='flex gap-3 mt-1'>
      <div className='flex items-center gap-2 text-sm'>
        <FaHeartCircleExclamation />
        {photo.likes}
      </div>
      <Separator orientation='vertical' />
      <div className='flex items-center gap-2 text-sm'>
        <FaDownload />
        {photo.downloads}
      </div>
    
    </div>
    <h1>{photo.prompt}</h1>
  </Card>
</div>
  );
};

export default PhotoDetailsPage;