import { SessionProvider } from 'next-auth/react';

interface AuthContextProps {
	Component: any;
	pageProps: any;
}

const AuthContext: React.FC<AuthContextProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default AuthContext;
