import { NextApiRequest, NextApiResponse } from "next";
// import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    
    // axios.get()

    res.status(200).json({
      
    })
  } else if (req.method === 'POST') {

  }
}