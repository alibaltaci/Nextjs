# CSR (Client Side Rendering) 

- CSR'de, indirilmesi ve ayrıştırılması için daha fazla JavaScript gerektirdiğinden, ilk sayfa yüklemesi SSR'ye kıyasla daha uzun sürer.
- Sadece değişen kısımlar tekrar yüklenir.
- Sonraki yüklemer SSR dan daha hızlıdır.
- Daha çok Dinamik içerik barındıran uygulamalarda.
- Kullanıcılar Güncel web tarayıcılarına sahipse CSR kullanmak daha avantajlıdır.
- CSR, yoğun etkileşimli uygulamalar için veritabanıyla ilgili darboğazların önlenmesine yardımcı olabilir.

# SSR (Server Side Rendering)

- Sunucu tarafında fetch işlemi

- Daha çok Static içerik barındıran uygulamalarda. (Yazılı medya uygulamaları)

- SSR sunucularına yönelik ekstra talep, uygulamanın çok sayıda kullanıcısı varsa, önemli ölçüde daha fazla bulut bütçesinin tüketilebileceği anlamına gelir. Sunucu ölçeklenebilirliği bir sorunsa, örneğin ölçeklenebilir bulut tabanlı sunucu olanakları kullanmıyorsanız, bu SSR için de bir sorun olabilir.

- `getServerSideProps`, Next.js, uygulamanın bu sayfaları oluşturmak için bir sunucu gerektirdiğini bilir.

# SSG (Static Site Generation)

- calistirildiginda html sayfalari ureterek siteyi bir defalik hazirlayan programlar. boylece kullanici siteye geldiginde diskte hazir bulunan html dosyalarini okur, site sadece mevcut bulunan dosyalardan ibarettir, dinamik olarak kullanici girdiginde uretilmez.
- Next.js, kutudan çıkar çıkmaz, yapabileceği tüm sayfaları statik olarak oluşturmaya çalışır. Bunu, bir uygulamanın verilerini nasıl getirdiğini algılayarak yapar.
- `getStaticProps`, Next.js bu verileri derleme zamanında getirir ve size tamamen statik bir sayfa bırakır.
- **Revalidate :**
    - Atanan zaman aralığında içeriği doğrular ve güncellemeleri yapar.
- **Force Revalidate**
    - Sayfayı o an yenimek istersek kullanılır.


## Kayaklar

- https://www.youtube.com/watch?v=kdXKz1UWc3E&t=276s
- https://kruschecompany.com/ssr-or-csr-for-progressive-web-app/#:~:text=In%20CSR%2C%20the%20initial%20page,needed%20to%20generate%20the%20template.
- https://www.freecodecamp.org/news/static-site-generation-with-nextjs/
- https://www.siberegitmen.com/next-js-nedir/#:~:text=SSR%20ve%20SSG&text=React.js%20ise%20client%20taraf%C4%B1nda,ziyaret%C3%A7iye%20%C3%B6nceden%20olu%C5%9Fturulmu%C5%9F%20sayfalar%20g%C3%B6nderir.