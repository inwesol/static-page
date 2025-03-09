// app/api/redis-data/route.js (for App Router)
// or pages/api/redis-data.js (for Pages Router)

import { Redis } from "@upstash/redis";

const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function GET(request: Request) {
  try {
    const key = "explorer:allOccupations";
    const rows = await redisClient.json.get(key, "$.occupations.*");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log({ cacheError: error });
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
