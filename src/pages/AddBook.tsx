import { Button } from '@/components/ui/button';
import { DatePickerWithPresets } from '@/components/ui/datePickerWithPreset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IProduct } from '@/types/globalTypes';

import { useState } from 'react';

export default function AddBook() {

  //! Dummy Data

  const products: IProduct[] = [];

  //! **

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
      <div className="max-w-3xl w-full">
        <h1 className="mb-2">Book Information</h1>
        <div className="h-[35vh] border border-gray-300 rounded-md p-10 overflow-auto">
          <div className="flex gap-5">
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="book_title">Book Title</Label>
                <Input type="text" id="book_title" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="author">Author</Label>
                <Input type="text" id="author" className="mt-2" />
              </div>
            </div>
            <div className="w-full space-y-5">
              <div>
                <Label htmlFor="genre">Genre</Label>
                <Input type="text" id="genre" className="mt-2" />
              </div>
              <div className="w-full flex flex-col mt-">
                <Label className="mb-4" htmlFor="name">
                  Date
                </Label>
                <DatePickerWithPresets />
              </div>
            </div>
          </div>
          <div className='mt-8 text-center'>

          <Button>Add Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
