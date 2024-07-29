import { useQuery } from "@tanstack/react-query";

export default function useContents() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch(`/api/contentful`, {
        method: "GET",
      }).then((r) => r.json()),
  });
}
