import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';

const dummyComments = [
  {
    body: "test",
    userEmail: "user_1@gmail.com",
    createdAt: "sdfsdf"
  },
  {
    body: "test",
    userEmail: "user_1@gmail.com",
    createdAt: "sdfsdf"
  }
];

export default function ProductReview() {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea className="min-h-[30px]" />
        <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
          <FiSend />
        </Button>
      </div>

      <div className="mt-10">
        {dummyComments.map((comment, index) => (
          <div key={index} className="gap-3 items-center mb-5">
            <div className="flex gap-3 items-center mb-1">
              <h1 className="text-md font-semibold">{comment.userEmail}</h1>
              <p>{comment.createdAt}</p>
            </div>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
