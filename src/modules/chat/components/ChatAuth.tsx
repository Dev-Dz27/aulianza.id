import { signIn } from 'next-auth/react';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import Button from '@/common/components/elements/Button';

const ChatAuth = () => {
  return (
    <div className='flex flex-col border-t dark:border-neutral-600'>
      <div className='py-3 px-4 text-center text-neutral-700 dark:text-neutral-300'>
        <p className='text-sm'>Please sign in to start chatting</p>
        <Button
          onClick={() => signIn()}
          className='flex items-center justify-center shadow-sm border hover:scale-[101%] transition duration-300 !bg-white w-full mt-2 mb-2'
        >
          <GoogleIcon size={18} />
          <span className='text-black'>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default ChatAuth;
