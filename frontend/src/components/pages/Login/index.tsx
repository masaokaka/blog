import { UIButton } from '@/src/components/uiParts/UIButton';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push('/admin');
    return null;
  }
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn('github', {
      callbackUrl: '/admin',
    });
  };
  return (
    <div>
      <h1>ログインページ</h1>
      <div className="flex items-center justify-center">
        <UIButton
          type="submit"
          className="rounded bg-black p-2 text-white"
          isLink={false}
          onClick={handleLogin}
        >
          Sign In with Github
        </UIButton>
      </div>
    </div>
  );
};

export default LoginPage;
