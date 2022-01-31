# CSR vs SSR

single page application

- has one HTML file
- naviagtion done inside itself
- client side rendering
- angular, etc frameworks are SPA
- rich interaction
- faster response
- web applications

cons:
- more js send to client
- performance issue
- pages slower to load
- SEO (search engine optimization) performance
- SEO is hard to do in SPA.

SSR:

- static pages
- SEO
- Initial page load

cons:
- Full page reload
- Slower page rendering
- \# request to server

when we need to CSR/SSR?

CSR:

- requests html files
- loads js and css
- js process
- visual to client

SSR:

- request HTML with some visual
- js loads
- visual to client

SSR libraries:

- GatsBy
    - static site genrator for react
    - text based web site
    - documentation site
- NextJs
    - dynamic full rich application
    - beyond static pages

## Understand JavaScript SEO
https://github.com/aneagoie/next-ssr 
A big argument for SSR is the SEO. But how does google bot crawl your website? This is a great resource to learn about the process here: https://developers.google.com/search/docs/guides/javascript-seo-basics
