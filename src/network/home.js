import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
  })
}