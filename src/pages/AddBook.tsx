import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';


export default function AddBook() {
  const { toast } = useToast();
  const [bookInfo, setBookInfo] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate:''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBookInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const handleDateChange = (dateValue: string) => {
    setBookInfo((prevInfo) => ({
      ...prevInfo,
      date: dateValue,
    }));
  };

  const handleSubmit = () => {
    if (bookInfo.title.trim() === '' || bookInfo.author.trim() === '' || bookInfo.genre.trim() === '' || bookInfo.publicationDate.trim() === '') {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.'
      });
      return;
    }
    console.log(bookInfo);
  };



  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Book Information</h1>
        <div className="h-[350px] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="book_title">Book Title</Label>
                <Input type="text" id="book_title" className="mt-2" onChange={handleInputChange}/>
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input type="text" id="author" className="mt-2" onChange={handleInputChange}/>
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input type="text" id="genre" className="mt-2" onChange={handleInputChange}/>
              </div>
              <div className="w-full flex flex-col mt-">
                <Label className="mb-4" htmlFor="name">
                  Publication Date
                </Label>
                <DatePickerWithPresets onChange={handleDateChange}
                  id="date" />
              </div>
            </div>
          </div>
          <div className='mt-8 text-center'>

          <Button className="mt-5 bg-primary text-white py-2 px-4 rounded-md"
          onClick={handleSubmit}>Add Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
