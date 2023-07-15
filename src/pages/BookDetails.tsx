import BookReview from '@/components/BookReview';
import { Button } from '@/components/ui/button';
import { IBook } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import defaulBook from '@/assets/images/default_book.png';
import { Delete, Edit, List, Save } from 'lucide-react';
import Swal from 'sweetalert2'; 

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

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[40%]">
          <img src={defaulBook} alt="" />
        </div>
        <div className="w-[40%] space-y-3">
          <h1 className="text-3xl font-semibold">Tile book</h1>
          <p className="text-xl">Author:</p>
          <p className="text-xl">Genre:</p>
          <p className="text-xl">Publication Date:</p>
        </div>
        <div className="w-[20%] space-y-3 flex-row">
          <Link to='/edit-book'>
          <Button className="flex">
            <div className="flex items-center">
              <Edit className="mr-2 h-3 w-3" /> Edit
            </div>
          </Button>
          </Link>
          <Button className="flex" variant="destructive" onClick={handleDelete}>
            <div className="flex items-center">
              <Delete className="mr-2 h-3 w-3" /> Delete
            </div>
          </Button>
          <Button className="flex" variant="outline">
            <div className="flex items-center">
              <List className="mr-2 h-3 w-3" /> Add Wish List
            </div>
          </Button>
          <Button className="flex" variant="secondary">
            <div className="flex items-center">
              <List className="mr-2 h-3 w-3" /> Add Running List
            </div>
          </Button>
          <Button className="flex" variant="link">
            <div className="flex items-center">
              <Save className="mr-2 h-3 w-3" /> Complete
            </div>
          </Button>
        </div>
      </div>
      <BookReview />
    </>
  );
}
