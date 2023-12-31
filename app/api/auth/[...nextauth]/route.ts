import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { options } from './options';

async function auth(req: NextApiRequest, res: NextApiResponse) {
	// Do whatever you want here, before the request is passed down to `NextAuth`
	return await NextAuth(req, res, options);
}

export { auth as GET, auth as POST };
