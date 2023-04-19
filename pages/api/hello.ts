// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// the handler, with API Route Object
// 1. Create API based on Express Object Model
// 2. A Direct Data Access e.g. nodesql, msmsql, sequelize (ORM), mongooes 
// 3. Manage Dynamic API Routes

// THis will not be present into the Application Build
// that is delivered to browser
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // USe Swich-case ot if-else statement to detect the
  // request method for GET/POST/PUT/DELETE operations

  
  res.status(200).json({ name: 'Mahesh Sabnis 007' })
}
