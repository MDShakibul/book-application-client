import { IBook } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import defaulBook from '@/assets/images/default_book.png';

interface IProps {
  book: IBook;
}

export default function ProductCard({ book }: IProps) {
  const handleAddProduct = (product: IBook) => {
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[500px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img src={defaulBook} alt="product" />
          <h1 className="text-xl font-semibold mt-2">Book Name</h1>
        </Link>
        {/* <p className="text-sm">Author: {book?.price}</p>
        <p className="text-sm">Genre: {book?.price}</p>
        <p className="text-sm">Date: {book?.price}</p> */}
      </div>
    </div>
  );
}
