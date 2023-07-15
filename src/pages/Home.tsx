import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
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
        <h1 className="text-6xl font-black text-center text-primary mb-2">
          Latest Books
        </h1>
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
