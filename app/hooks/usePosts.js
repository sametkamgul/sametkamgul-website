import { useQuery } from "@tanstack/react-query";

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sametkamgul`,
        {
          method: "GET",
        }
      ).then(r => r.json()),
  });
}
