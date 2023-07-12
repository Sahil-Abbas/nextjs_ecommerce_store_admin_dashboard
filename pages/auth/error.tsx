'use client';

import { useParams } from 'next/navigation';
const AuthError = ({}) => {
	const params = useParams();
	console.log(params);

	return <div>AuthError</div>;
};

export default AuthError;
