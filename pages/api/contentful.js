import * as contentful from "contentful";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.CONTENTFUL_SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const data = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID);

    if (data?.fields?.content) {
      res.status(200).json(data.fields.content);
    } else {
      res
        .status(404)
        .json({ message: "contentful data is not found", error: true });
    }
  } else {
    res.status(200).json({ message: "method is not allowed", error: true });
  }
}
