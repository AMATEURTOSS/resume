import type { NextApiRequest, NextApiResponse } from "next";

export interface WhoAmI {
  name: string;
  email: string;
  phone: string;
  birth: string;
  year: number; // 년차
}

export const getData = async (): Promise<WhoAmI> => {
  const currierStart = new Date("2022-02-21");
  const today = new Date();
  const whoAmI: WhoAmI = {
    name: "최영진",
    email: "amateur.toss@gmail.com",
    phone: "01092124699",
    birth: "2001-09-06",
    year:
      Math.abs(
        new Date(today.getTime() - currierStart.getTime()).getUTCFullYear() -
          1970
      ) + 1,
  };
  return whoAmI;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WhoAmI>
) {
  const whoAmI = await getData();
  res.status(200).json(whoAmI);
}
