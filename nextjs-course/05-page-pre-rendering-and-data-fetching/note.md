# The Forms of Page Pre-rendering
 - Static generation 
 - Server side rendering


# npm run build

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

# Static Generation 
# getStaticProps keys

## Revalidate

* dev oratamında geçersizdir.
* producition ortamında önemlidir. npm run build - npm start

## notFound

* true - false değerleri alır.
* true ayarlanırsa 404 sayfası döner. (npm run build / start yapmak lazım)

## redirect 

* yönlendirmek için 

# getStaticPaths

## fallback

* false --> tüm sayfalar önceden oluşturulacak. Başka oluşturulması gereken sayfa yok.

* true --> Listelenen ve önceden oluşturulan sayfalar dışında oluşturulacak sayfalar var. Parametreden gelen ve listede olmayan sayfaları o an dinamik olarak oluştur. ( az ziyaret edilen sayfalar için. Bu sayfaları oluşturmak zaman ve kaynak kaybına neden olabileceği için bu yöntem kullanılmaktadır.)

## uayarı

* önceden yüklenmemiş sayfalara tıklayarak değilde arama çubuğundan manuel olarak gitmeye çalışırsak hata alırız.
* bunun sebebebi dynamic pre-generation işleminin biraz zaman olamasından kaynaklanmaktadır.
* Bu sorunu çözebilmek için bir loading fonksiyonu yazılabilir.

 * "blocking" --> Sayfanın sunucuda tamamen oluşturulması için Nextjs bekleyecek. Biraz daha uzun süren bir yaöntemdir. Verilerin alınmasının daha uzun sürdüğü durumlarda kullanıcılara eksik sayfa göstermememk için kullanılabilcek bir yöntemdir.


# Server Side Rendering (SSR)

# getServerSideProps

## not: 

Aynı dizinde birden fazla dinamik yola sahip "[]" dosya olursa çakışma yalanır.
Bu yüzden dinamik dosyaların gerekli olanlar alt klasörlere taşınabilir.


# Client Side Rendering ( SSR )

## Some Data doesn't need to be pre-rendered 

* Data changing  with high frequency ( e.g. stock data )

* Highly user-specific data ( e.g. lost orders in an online shop )

    *  Bu sayfaları önceden işlemeye gerek yok. Çünkü browserlar zaten bu verileri göremeyecek ve bunları pre-render etmek anlamsız olur.

* partial data ( e.g. data that's only used on a part of an page )

* Pre-fetching the data for page generation might not work or be required 

    * Traditional client-side data fetching ( e.g. useEffect() with fetch() is fine )     

# useSWR ( stale-while-revalidate )

## Kurulum
* dev modundan çık

```
 npm install swr

 import useSWR from "swr"
```

## SWR özellikler

* Nextjs tarafından sunulur fakat nextjs olmayan projelerde de kullanılabilir.

* HTTP isteği gönderir önbelleğe alma ve otomatik yeniden doğrulama ( güncel veriler için ), hata durumunda yeniden deneme gibi yerleşik özelliklere ( built in features ) sahiptir.  

* useSWR hook 'u en az bir argüman ister. Bu genelde fetch yapılacak URL 'dir.

* İkinci argüman olarak fether function ekelenebilir. Defaul değeri feth API 'dir.

# Clien Side ve Pre-Rendering birlikte kullanım.

## useSWR & getStaticProps

* useSWR ile çekilen verilerle sayfa oluşturulur ve database 'imizdeki anlık eklenen veriler browser 'da gösterilir. Fakat bu veriler sayfa ilk oluşturulurken ( getStaticPops ) olmadığı için sayfa incelendiğinde orada gözükmezler.

* npm run build --> npm run start --> sayfa kaynağına bak ( bu işlem sırasında database 'de olan veriler orad. Sonradan database 'e eklenen veriler ekranda görünür fakat kaynakta görünmez. )

# Summary

* CSR işlemlerinde fetch ile verileri çekersek yeni veriler eklendiğinde, güncel olarak bunları göremeyebiliriz.
* useSWR ile bu verileri görebiliriz. ( güncel verileri görmek için iyi )
* getStaticProps & useSWR kullanılırsa mevcut veriler ile sayfa oluşturulur ( page pre-rendering ) ve yeni eklenen veriler ile sayfa browser üzerinde güncellenir. Fakat sayfa kaynağı incelendiğinde, sadece başlangıç verileri görünür.