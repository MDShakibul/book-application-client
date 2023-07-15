import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useParams } from 'react-router-dom'; // Import useParams to get the "id" parameter from the URL

export default function EditBook() {
  const { id } = useParams(); // Get the "id" parameter from the URL
  const { toast } = useToast();
  const [bookInfo, setBookInfo] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: ''
  });

  useEffect(() => {
    // Fetch the book details from the backend API using the "id" parameter
    // Replace this with your actual API endpoint
    fetch(`/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Populate the input fields with the fetched book details
        setBookInfo({
          title: data.title,
          author: data.author,
          genre: data.genre,
          publicationDate: data.publicationDate
        });
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

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
      publicationDate: dateValue,
    }));
  };

  const handleSubmit = () => {
    // Add your logic here to send a request to update the book details in the backend
    console.log('Updating book:', bookInfo);
    // Show a toast notification to indicate that the book has been updated
    toast({
      title: 'Success',
      description: 'Book updated successfully.',
    });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Edit Book Information</h1>
        <div className="h-[350px] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="book_title">Book Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={bookInfo.title}
                />
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  type="text"
                  id="author"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={bookInfo.author}
                />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input
                  type="text"
                  id="genre"
                  className="mt-2"
                  onChange={handleInputChange}
                  value={bookInfo.genre}
                />
              </div>
              <div className="w-full flex flex-col mt-">
                <Label className="mb-4" htmlFor="name">
                  Publication Date
                </Label>
                <DatePickerWithPresets
                  onChange={handleDateChange}
                  id="publicationDate"
                  value={bookInfo.publicationDate}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              className="mt-5 bg-primary text-white py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              Update Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
