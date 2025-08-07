"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import StartUpsClient from './StartupsClient.js'

export default async function StartUpsPage() {
  const payload = await getPayload({ config });

  const startups = await payload.find({
    collection: "startups",
    limit: 1000000000,
  });


  return <StartUpsClient startups={startups.docs} />;
}
