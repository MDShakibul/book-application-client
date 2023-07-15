import BookCard from '@/components/BookCard';
import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';

export default function Products() {
  const [data, setData] = useState<IBook[]>([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
      <div className="container grid grid-cols-4 gap-12 pb-20">
        {data?.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
  );
}
