import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('use effect ran');
    setTimeout(() => {
      // router.go(1); // move forward in history
      // router.go(-1) // move backward in history
      router.push('/'); // redirect user to the homepage after 3 sec
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
