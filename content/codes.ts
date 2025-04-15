import { StatusCode } from "../types";

export const statusCodes: StatusCode[] = [
  // 100s: Informational responses
  {
    code: 100,
    title: "Continue",
    description:
      "The server has received the request headers and wants the client to continue, like when Taylor asks the crowd to keep singing along.",
    gifPath: "/gifs/100.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100",
  },
  {
    code: 101,
    title: "Switching Protocols",
    description:
      "The server is changing protocols, like when Taylor switches musical genres between albums.",
    gifPath: "/gifs/101.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101",
  },
  {
    code: 102,
    title: "Processing",
    description:
      "The server is processing the request but no response is available yet, like waiting for Taylor to announce her next tour dates.",
    gifPath: "/gifs/102.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102",
  },
  {
    code: 103,
    title: "Early Hints",
    description:
      "The server is sending some response headers before the final HTTP message, like Taylor dropping Easter eggs before a new album.",
    gifPath: "/gifs/103.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103",
  },

  // 200s: Successful responses
  {
    code: 200,
    title: "OK",
    description:
      "Everything worked as expected, just like a perfect Taylor Swift concert.",
    gifPath: "/gifs/200.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200",
  },
  {
    code: 201,
    title: "Created",
    description:
      "The request succeeded and a new resource was created, like when Taylor writes a new hit song.",
    gifPath: "/gifs/201.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201",
  },
  {
    code: 202,
    title: "Accepted",
    description:
      "The request has been accepted for processing but not completed yet, like when Taylor accepts an award but hasn't given her speech.",
    gifPath: "/gifs/202.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202",
  },
  {
    code: 203,
    title: "Non-Authoritative Information",
    description:
      "The returned data is from a third party, not the original server, like hearing Taylor Swift news from fan accounts instead of her official page.",
    gifPath: "/gifs/203.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203",
  },
  {
    code: 204,
    title: "No Content",
    description:
      "The request succeeded but returns no content, like those moments of silence before Taylor starts playing a surprise song.",
    gifPath: "/gifs/204.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204",
  },
  // {
  //   code: 205,
  //   title: "Reset Content",
  //   description:
  //     "The request succeeded and the client should reset the document view, like when Taylor completely reinvents her image between eras.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205",
  // },
  // {
  //   code: 206,
  //   title: "Partial Content",
  //   description:
  //     "The server is delivering only part of the resource, like when Taylor performs just a snippet of an old song in her concerts.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206",
  // },
  // {
  //   code: 207,
  //   title: "Multi-Status",
  //   description:
  //     "The message body contains multiple status responses, like when Taylor announces multiple projects at once.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207",
  // },
  // {
  //   code: 208,
  //   title: "Already Reported",
  //   description:
  //     "The members of a DAV binding have already been enumerated, like when Swifties already know all the lyrics before the song is officially released.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208",
  // },
  // {
  //   code: 226,
  //   title: "IM Used",
  //   description:
  //     "The server has fulfilled the request using the response from a previous request, like when Taylor reuses elements from previous eras in her new work.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226",
  // },

  // 300s: Redirection messages
  // {
  //   code: 300,
  //   title: "Multiple Choices",
  //   description:
  //     "The request has more than one possible response, like choosing which Taylor era is your favorite.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300",
  // },
  // {
  //   code: 301,
  //   title: "Moved Permanently",
  //   description:
  //     "The resource has been moved permanently, like when Taylor permanently switched from country to pop music.",
  //   gifPath: "/gifs/301.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301",
  // },
  {
    code: 302,
    title: "Found",
    description:
      "The resource is temporarily located elsewhere, like when Taylor makes surprise appearances at other artists' concerts.",
    gifPath: "/gifs/302.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302",
  },
  // {
  //   code: 303,
  //   title: "See Other",
  //   description:
  //     "The response can be found at another URI, like when Taylor directs fans to a different platform for exclusive content.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303",
  // },
  // {
  //   code: 304,
  //   title: "Not Modified",
  //   description:
  //     "The resource hasn't been modified since the last request, like when Taylor performs a classic song exactly as fans remember it.",
  //   gifPath: "/gifs/304.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304",
  // },
  // {
  //   code: 305,
  //   title: "Use Proxy",
  //   description:
  //     "The requested resource must be accessed through a proxy, like needing to go through Ticketmaster to get Taylor Swift concert tickets.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305",
  // },
  // {
  //   code: 306,
  //   title: "Switch Proxy",
  //   description:
  //     "No longer used. Originally meant 'Subsequent requests should use the specified proxy', like Taylor's deprecated old website redirecting to her new one.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/306",
  // },
  // {
  //   code: 307,
  //   title: "Temporary Redirect",
  //   description:
  //     "The resource is temporarily at another URI, like when Taylor temporarily changes her social media to promote a new album.",
  //   gifPath: "/gifs/307.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307",
  // },
  {
    code: 308,
    title: "Permanent Redirect",
    description:
      "The resource has been permanently moved to another URI, like how Taylor permanently moved her older albums to her re-recordings.",
    gifPath: "/gifs/308.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308",
  },

  // 400s: Client error responses
  {
    code: 400,
    title: "Bad Request",
    description:
      "The server cannot process the request due to a client error, like when fans try to decode Taylor's hints with far-fetched theories.",
    gifPath: "/gifs/400.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400",
  },
  {
    code: 401,
    title: "Unauthorized",
    description:
      "Authentication is required but has failed or not been provided, like trying to access a Taylor Swift secret listening party without an invitation.",
    gifPath: "/gifs/401.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401",
  },
  // {
  //   code: 402,
  //   title: "Payment Required",
  //   description:
  //     "Reserved for future use. You need to pay to continue, like needing to purchase Taylor's album to hear all the songs.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402",
  // },
  {
    code: 403,
    title: "Forbidden",
    description:
      "The client does not have access rights to the content, like when you can't access Taylor's private Instagram account.",
    gifPath: "/gifs/403.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",
  },
  {
    code: 404,
    title: "Not Found",
    description:
      "The resource couldn't be found, like trying to find Taylor's secret messages.",
    gifPath: "/gifs/404.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404",
  },
  {
    code: 405,
    title: "Method Not Allowed",
    description:
      "The request method is known but not supported by the target resource, like trying to get Taylor to perform a song she's retired from her setlist.",
    gifPath: "/gifs/405.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405",
  },
  // {
  //   code: 406,
  //   title: "Not Acceptable",
  //   description:
  //     "The server can't generate a response that the client will accept, like when Taylor releases a new genre that some fans aren't ready for yet.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406",
  // },
  // {
  //   code: 407,
  //   title: "Proxy Authentication Required",
  //   description:
  //     "The client must authenticate with the proxy first, like needing a fan club membership to access exclusive Taylor content.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407",
  // },
  // {
  //   code: 408,
  //   title: "Request Timeout",
  //   description:
  //     "The server timed out waiting for the request, like when Ticketmaster crashes during Taylor Swift ticket sales.",
  //   gifPath: "/gifs/408.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408",
  // },
  // {
  //   code: 409,
  //   title: "Conflict",
  //   description:
  //     "The request conflicts with the current state of the server, like when two Taylor Swift concerts are scheduled at the same time in different cities.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409",
  // },
  // {
  //   code: 410,
  //   title: "Gone",
  //   description:
  //     "The resource requested is no longer available and will not be available again, like when Taylor removes a song from streaming platforms.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410",
  // },
  // {
  //   code: 411,
  //   title: "Length Required",
  //   description:
  //     "The request did not specify the length of its content, like a Taylor song that ends abruptly without resolution.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411",
  // },
  // {
  //   code: 412,
  //   title: "Precondition Failed",
  //   description:
  //     "The server does not meet one of the preconditions in the request, like when Taylor's concert doesn't include the song you were most hoping to hear.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412",
  // },
  // {
  //   code: 413,
  //   title: "Payload Too Large",
  //   description:
  //     "The request is larger than the server is willing to process, like trying to bring too many friendship bracelets to a Taylor Swift concert.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413",
  // },
  // {
  //   code: 414,
  //   title: "URI Too Long",
  //   description:
  //     "The URI requested by the client is longer than the server is willing to interpret, like the longest Taylor Swift song title you can imagine.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414",
  // },
  // {
  //   code: 415,
  //   title: "Unsupported Media Type",
  //   description:
  //     "The media format is not supported by the server, like trying to play a Taylor Swift vinyl on a digital-only device.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415",
  // },
  // {
  //   code: 416,
  //   title: "Range Not Satisfiable",
  //   description:
  //     "The range specified in the request's Range header field cannot be fulfilled, like asking Taylor to hit notes outside her vocal range.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416",
  // },
  // {
  //   code: 417,
  //   title: "Expectation Failed",
  //   description:
  //     "The expectation given in the request's Expect header field could not be met, like when Taylor's surprise songs aren't the ones fans predicted.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417",
  // },
  {
    code: 418,
    title: "I'm a teapot",
    description:
      "The server refuses to brew coffee because it's a teapot, as whimsical as Taylor's lyrics.",
    gifPath: "/gifs/418.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418",
  },
  // {
  //   code: 421,
  //   title: "Misdirected Request",
  //   description:
  //     "The request was directed at a server that is not able to produce a response, like sending fan mail to the wrong Taylor Swift address.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421",
  // },
  // {
  //   code: 422,
  //   title: "Unprocessable Entity",
  //   description:
  //     "The request was well-formed but contained semantic errors, like lyrics that sound like Taylor but don't make sense in context.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422",
  // },
  // {
  //   code: 423,
  //   title: "Locked",
  //   description:
  //     "The resource that is being accessed is locked, like Taylor's unreleased songs kept in a vault.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423",
  // },
  // {
  //   code: 424,
  //   title: "Failed Dependency",
  //   description:
  //     "The request failed due to failure of a previous request, like not being able to buy merchandise because you couldn't get concert tickets.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424",
  // },
  // {
  //   code: 425,
  //   title: "Too Early",
  //   description:
  //     "The server is unwilling to risk processing a request that might be replayed, like Taylor refusing to reveal details about an album before launch day.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425",
  // },
  // {
  //   code: 426,
  //   title: "Upgrade Required",
  //   description:
  //     "The client should switch to a different protocol, like when Taylor asks fans to move from her old website to her new one.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426",
  // },
  // {
  //   code: 428,
  //   title: "Precondition Required",
  //   description:
  //     "The origin server requires the request to be conditional, like needing to verify you're a fan club member before accessing Taylor's secret content.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428",
  // },
  {
    code: 429,
    title: "Too Many Requests",
    description:
      "The user has sent too many requests in a given time, like repeatedly refreshing Taylor's website when tickets are about to go on sale.",
    gifPath: "/gifs/429.webp",
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429",
  },
  // {
  //   code: 431,
  //   title: "Request Header Fields Too Large",
  //   description:
  //     "The server is unwilling to process the request because its header fields are too large, like trying to include every Taylor Swift song title in your email subject.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431",
  // },
  // {
  //   code: 451,
  //   title: "Unavailable For Legal Reasons",
  //   description:
  //     "The resource is unavailable for legal reasons, like when Taylor's music temporarily disappears during rights negotiations.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451",
  // },

  // 500s: Server error responses
  // {
  //   code: 500,
  //   title: "Internal Server Error",
  //   description:
  //     "Something went wrong on our end, like when Taylor's mic cuts out mid-performance.",
  //   gifPath: "/gifs/500.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500",
  // },
  // {
  //   code: 501,
  //   title: "Not Implemented",
  //   description:
  //     "The server does not support the functionality required to fulfill the request, like asking for Taylor's unreleased songs from a streaming service.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501",
  // },
  // {
  //   code: 502,
  //   title: "Bad Gateway",
  //   description:
  //     "The server got an invalid response while working as a gateway, like getting conflicting information about Taylor's tour dates from different sources.",
  //   gifPath: "/gifs/502.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502",
  // },
  // {
  //   code: 503,
  //   title: "Service Unavailable",
  //   description:
  //     "The server is not ready to handle the request, like when Taylor's website crashes due to too many fans trying to access tour information.",
  //   gifPath: "/gifs/503.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503",
  // },
  // {
  //   code: 504,
  //   title: "Gateway Timeout",
  //   description:
  //     "The server acting as a gateway timed out waiting for a response, like the endless wait for Taylor to announce her next album.",
  //   gifPath: "/gifs/504.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504",
  // },
  // {
  //   code: 505,
  //   title: "HTTP Version Not Supported",
  //   description:
  //     "The HTTP version used in the request is not supported by the server, like trying to play Taylor's digital music on a gramophone.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505",
  // },
  // {
  //   code: 506,
  //   title: "Variant Also Negotiates",
  //   description:
  //     "The server has an internal configuration error, like when two different Taylor Swift fan sites claim to be the official one.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506",
  // },
  // {
  //   code: 507,
  //   title: "Insufficient Storage",
  //   description:
  //     "The server is unable to store the representation needed to complete the request, like not having enough space for your complete Taylor Swift collection.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507",
  // },
  // {
  //   code: 508,
  //   title: "Loop Detected",
  //   description:
  //     "The server detected an infinite loop while processing the request, like listening to Taylor's songs on repeat endlessly.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508",
  // },
  // {
  //   code: 509,
  //   title: "Bandwidth Limit Exceeded",
  //   description:
  //     "Server has exceeded the bandwidth limit; not in HTTP standard but used by some providers, like streaming too many Taylor Swift videos in one day.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
  // },
  // {
  //   code: 510,
  //   title: "Not Extended",
  //   description:
  //     "Further extensions to the request are required for the server to fulfill it, like needing additional verification to access Taylor's VIP content.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510",
  // },
  // {
  //   code: 511,
  //   title: "Network Authentication Required",
  //   description:
  //     "The client needs to authenticate to gain network access, like needing to verify your identity before joining Taylor's official fan network.",
  //   gifPath: "/gifs/200.webp",
  //   mdnLink: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511",
  // },
];

export const getStatusCodeByCode = (code: number): StatusCode | undefined => {
  return statusCodes.find((status) => status.code === code);
};
