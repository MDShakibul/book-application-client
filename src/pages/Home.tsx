import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import { useEffect, useState } from 'react';
import { IProduct } from '@/types/globalTypes';
import BookCard from '@/components/BookCard';

export default function Home() {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Welcome to
            <br /> Book Store
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Find Book, Happy Reading
          </p>
          <div className="text-primary mt-8">
            <p>With us, ypu can read your favorite book online &</p>
            <p>help save your high street at the same time</p>
          </div>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <h1 className="text-5xl font-black text-primary text-center uppercase mt-10 mb-10">
          Latest Books
        </h1>
        <div className="container grid grid-cols-4 gap-12 pb-20">
          {data?.slice(0, 10).map((product) => (
            <BookCard product={product} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button className="mt-10" asChild>
            <Link to="/books">All Books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
