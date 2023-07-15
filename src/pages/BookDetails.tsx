import BookReview from '@/components/BookReview';
import { Button } from '@/components/ui/button';
import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaulBook from '@/assets/images/default_book.png';

export default function ProductDetails() {
  const { id } = useParams();

  //! Temporary code, should be replaced with redux
  const [data, setData] = useState<IBook[]>([]);
  useEffect(() => {
    fetch('../../public/data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  //! Temporary code ends here

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={defaulBook} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Tile book</h1>
          <p className="text-xl">Author: {}</p>
        </div>
      </div>
      <BookReview />
    </>
  );
}
