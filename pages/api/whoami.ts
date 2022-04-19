import axios from "axios";
import { getData as projectGetData } from "./project";
import { getData as opensourceGetData } from "./opensource";
import type { NextApiRequest, NextApiResponse } from "next";

export interface WhoAmI {
  name: string;
  email: string;
  phone: string;
  birth: string;
  year: number; // 년차
  projectCount: number;
  opensourceCount: number;
}

async function getOpensourceCount() {
  let total = 0;
  const opensource = await opensourceGetData();
  await Promise.all(
    opensource.map(async (project, idx) => {
      const split = project.url.split("/");
      const owner = split.at(-2);
      const repo = split.at(-1);
      const result = await axios.get(
        `https://api.github.com/search/issues?q=author%3A${"AMATEURTOSS"}+type%3Apr+repo%3A${owner}/${repo}`
      );
      total += result.data.total_count;
    })
  );
  return total;
}

export const getData = async (): Promise<WhoAmI> => {
  const projectCount = (await projectGetData()).length;
  const opensourceCount = await getOpensourceCount();
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
    projectCount,
    opensourceCount,
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
