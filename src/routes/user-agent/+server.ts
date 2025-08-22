import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request, url }) => {
	console.log(...request.headers);
	console.log(request.url);

	console.log(url.searchParams.get('test2'));
	return json(
		{
			userAgent: request.headers.get('user-agent')
		},
		{
			headers: {
				'x-custom-header': 'potato'
			}
		}
	);
};
