import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Social } from "../../typings";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      console.log(req);
      const socials: Social[] = await sanityClient.fetch(query);

      res.status(200).json({ socials });
    }