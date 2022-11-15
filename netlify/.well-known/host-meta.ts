import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  const redirectUrl = "https://tstv.me/well-known/host-meta?resource=";
  console.log(event);
  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({}),
  };
};

export { handler };
