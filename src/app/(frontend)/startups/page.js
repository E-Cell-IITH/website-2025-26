"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import StartUpsClient from './StartupsClient.js'

export default async function Alumni() {
  const payload = await getPayload({ config });

  const startups = await payload.find({
    collection: "startups",
    limit: 1000000000,
  });

//   console.log(startups.docs)

  return <StartUpsClient startups={startups.docs} />;
}
