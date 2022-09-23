# The Forms of Page Pre-rendering
 - Static generation 
 - Server side rendering


# npm run build

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)


# Revalidate

* dev oratamında geçersizdir.
* producition ortamında önemlidir.