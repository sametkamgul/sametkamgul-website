"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePosts;

var _reactQuery = require("@tanstack/react-query");

function usePosts() {
  return (0, _reactQuery.useQuery)({
    queryKey: ["posts"],
    queryFn: function queryFn() {
      return fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sametkamgul", {
        method: "GET"
      }).then(function (r) {
        return r.json();
      });
    }
  });
}