# The Forms of Page Pre-rendering
 - Static generation 
 - Server side rendering


# npm run build

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)


# getStaticProps keys

## Revalidate

* dev oratamında geçersizdir.
* producition ortamında önemlidir. npm run build - npm start

## notFound

* true - false değerleri alır.
* true ayarlanırsa 404 sayfası döner. (npm run build / start yapmak lazım)

## redirect 

* yönlendirmek için 

