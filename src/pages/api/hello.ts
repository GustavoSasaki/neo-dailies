// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface SymolHoleInfo {
  start: number
  end: number
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SymolHoleInfo>
) {

  getUpdatedInfo().then(updatedInfo => {
    console.log(updatedInfo)
    res.status(200).json(updatedInfo)
  })
}

function getUpdatedInfo() {
  return fetch('https://www.jellyneo.net/?go=symolhole', { next: { revalidate: 3600 * 8 } }).then(async x => {
    return await x.text();
  }).then(function (html) {
    const regexCapture = regexPattern.exec(html);

    console.log(regexCapture)

    return {
      start: parseInt(regexCapture?.[1] ?? ''),
      end: parseInt(regexCapture?.[2] ?? ''),
    }

  })
}

const regexPattern = /<span class="text-bigger">XX:(\d+):00 to XX:(\d+):59/