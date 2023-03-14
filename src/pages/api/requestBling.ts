import type { NextApiRequest, NextApiResponse } from 'next'


export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { query, method,url } = req
    switch (method) {
        case 'POST':

        console.log(query)
        console.log(method)
        console.log(url)
        break
    }

}