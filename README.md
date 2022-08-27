- Metadata için head componenti.
- Aksi belirtilmediği sürece CSR.

## **CSR**

- İlk yükleme uzun bütün yük browser tarafında.
- JS kocunun compile edilmesi beklenir.
- Kullanıcının maklinesi ya da interneti kötü ise kötü bir deneyim yaşatır.
- Browserların eski olması sıkıntı çıkartabilir.
- İlk yüklemeden sonraki işlemler oldukça hızlıdır. (Sadece gerekli olan kısımlar yenilendiği için.)

## **SSR**

- Render edilmeye hazır HTML sayfası gönderir.
- Daha ikinci aşamadan itibaren kullanıcının görüntüleye bileceği ama interaktif olmayan bir ekran gelir. (Statik olrak görünür ama etkileşime geçmek için hazır değil)
- JS kodu indirler ve React execute edildikten sonra sayfa tamamen hazır hale gelir. (Etkileşim Hazır)
- Tüm yük server üzerinde.
- Sayfanın ilk yüklenme hızı CSR göre daha hızlıdır.
- Sayfa yükleme işlemleri her sefenrinde baştan 4 adım uygulanarak yapıldığı için bu aşamalar bazında CSR göre daha yavaştır.
- SSR CSR göre daha iyi bir SEO deneyimi sağlar.
- Webpack ve babel işlemlkeri otomatik olarak halledilir.

## **Reack fast refresh**

- static file serving (Sunum)  `./public/`     `/`  url ine maplenir.
    - image ve asset dosyalarımızı public klasörümüzün altına yüklüyoruz.
    - public klasörü altına attığımız her svg , icon dosyaları `<Head>` kısmında `/` ile erişilebilir hale gelir. ( `href = “/favicon.ico”`)
    - Buraya önemsiz dosyalar konulmalır. Buradaki her şey Clint Side tarafında erişilebilir durumdadır. `(localhost:3000/favicon.ico)`

## **NOT FOUND**

- Otomatik gelen not found sayfasını costomize etmek için Pages klasörü altında 404.js adıda bir js sayfası oluşturuyoruz.
- Olmayan sayfa için hangi bildirim görünsün istiyorsak burada oluşturuyoruz.

## **Fast Refresh**

- Bir nextjs feature ıdır.
- Anlık feedback almamızı sağlar. Anlık değişiklikleri componentin state ini kaybetmeden bu sayede alırız.
- Default olarak bütün nextjs uygulamalarında aktiftir.
- Sadece değişiklik yapılan componenti re-render eder. Bunu yaparken de componentirn state ini preserve (korumak) edecek.
- Değişiklik yaptığımız dosya bir react componenti export etmiyorsa, hem bu dosya yeniden çalıştırılır hem de bu dosyayı import eden dosyalar yeniden çalıştırılır.
- React tree de olmayan dosyalar tarafına import edilmiş bir dosyayı editlersek fest refresh komple (full reload)  bir reload yapar.
- React componenti export eden bir dosyamız olsun, bir tane de react componenti olmayan bir value yu da export eden bir dosyamız olsun. Bu durumda full reload gerçekleşir.
- Bu durumda fast refresh i yeniden aktif hale getirebilmek için bunu başka bir dosyaya alıp o şekilde import etmek daha mantıklı olacaktır.

### **Runtime Error**

- Runtime Error olursa komple uygulamayı yüklemeden bu hatayı görebiliriz.

### **Limitation**

- Fast refresh için bazı limitler vardır.
- Local state ler class componentleri için korunmuyor. (Sadece function komponentleri ve Hook lar içi react component ın state korunur)
- Dosya içinde high-order component (HOC) (WrappedComponent) export edersek ve dönen component bir class component i ise state resetlenir ve korunmaz.

### **Tips**

- `// @refresh reset` Sayfanın/kodun herhangi bir yerine ekleyerek react componentinin state inin korunmaması gerektiğini belirtebiliriz. Böylece komple yeniden re-render eder.

## **<Head>**

- **`import { Head } from “next/head”`**
- Sayfalara Metadata vermek için

## **Stillendirme**

- ***Buillt-in-support*** —> .css ve .sass / .scss CSS in JS (styled-jsx) (StyledComponent) (Tailwind CSS) gibi CSS paketleri kullanılabilir.
- ***Global CSS*** —> `glabal.css` dosyası sadece `_app.js` içinde import edilir.
- ***CSS Modül Desteği*** —>  Home sayfası için `Home.module.css`
    - sayfadan sonra `.module.css` gelmesi gereklidir.
    - `import styles from “../styles/Home.module.css”`
    - `className={styles.container}` şeklinde kullanılır.
    - Sadece tanımlandığı component için çalışır. (Component tabanlı)
    - Unique className oluşturulur.
    - Sayfa incelendiğinde stiller `class=”Home_container_###...”` şeklinde görünecektir.
- ***CSS in JS***
    - Birden fazla className atanabilir.
    
    ```jsx
    <h1 className="greenColor bigText" >About</h1>
    
    <style jsx>{`
    		.greenColor {
    				color: green;
    		}
    		
    		.bigText{
    				font-size: 156px;
    		}
    `}
    </style>
    ```
    

## **Layout**

- Layout tüm sayfaları sarar ve tüm sayfalarda görünür. (Tüm sayfalarda ortak olacak şeyleri buraya ekleriz)
- Component ‘ler pages kalasörü ile aynı dizinde bir components kalsörü altında tutulur.
- components kalasörü altındaki component isimleri genelde büyük harfle (Layout.js), pages klasörü altındaki sayfa isimleri ise küçük harfle (index.js) başlar.
- Bir Layout componenti tanımlayalım

```jsx
import React from "react";
import styles from "../styles/Layout.module.css"; //Layout için tanımladığımız stilleri indirdik.

const Layout = ( { children } ) => {  // Layout un altında yer alacak sayfaları children ile temsil ettik.

	return( 
		<div calssName={styles.container}>
			<main className={styles.main}>
				<h1>Layout Tüm Sayfaları Sarar<h1>
				{children}
			</main>
		</div>
	) 

export default Layout; 
```

- Bu şekilde Layout tüm sayfalarda görünür. (Sayfaya gidip ayrıca Layout yazmaya gerek yok sanırım)

## **Routing (Nav - Link)**

- Link: Client Side Routing i sağlayan componentler dir.
- Bir sayfada olan hata diğer sayfaların çalışmasını engellemez.

```jsx
import Link from "next/link";

import styles from "../styles/Nav.module.css"; // Nav componentine özel stiller için.

const Nav = () => { 
	return (
		<nav className={ styles.nav } >
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;
```

- Nav ‘ı Layout ‘a ekleyelim...

```jsx
import React from "react";
import styles from "../styles/Layout.module.css"; //Layout için tanımladığımız stilleri indirdik.

import Nav from "./Nav";

const Layout = ( { children } ) => {  // Layout un altında yer alacak sayfaları children ile temsil ettik.

	return( 
		<>
			
			<Nav />

			<div calssName={styles.container}>
				<main className={styles.main}>
					<h1>Layout Tüm Sayfaları Sarar<h1>
					{children}
				</main>
			</div>

		</>
	) 

export default Layout; 
```

## **Pre-rendering and Data Fetching**

**Pre-rendering:**   Nextjs de tüm sayfalar default olarak Pre-render edilir. Yani Nextjs önceden gidip HTML  sayfalarını gider  yakalar ve oluşturur. Bunların Client-side JS tarafından yapılmasını beklemez. 

- Pre-rendering performanslı SEO işlemleri için olumlu bir özelliktir.
- Her oluşturulan HTML minimal JS kodu (fully functional) ile oluşturulur. Bu ***Code spliting*** açısından önemlidir.
- Bir sayfa browser tarafından yüklendiği zaman JS kodu çalışır ve onu interaktif hale (Kullanıcının etkileşim kurabileceği) dönüştürür.
- Bu process e ***hydration*** ismi verilir.

### **Pre-rendiring in olup olmadığını nasıl kontrol ederiz? (Check That Pre-renderin Happening)**

- Nextjs ‘de
    - JS ‘yi Browser ‘ımızda kapatacağız.
    - Developer Tools ‘u açıyoruz —> Ayarlar —> Debugger —> Disable JavaScript ‘i seçiyoruz.
    - Bu şekilde yapınca [localhost](http://localhost) olduğu için CSS yüklenmez.
    - Pre-render işlemi gerçekleştiği için statik bir HTML sayfasını görebiliriz.
- Create-reacta-app ile oluşturulmuş sayfada
    - Yukarıdaki gibi Disable JavaScript diyoruz.
    - create-react-app ‘de pre-render işlemi gerçekleşmediği için “You need to enable JavaScript to run this app. “ yazısını görürüz.
    - Statik olarak yakalanmış bir HTML sayfası görmüyoruz.
    
    ![Screenshot_1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8810869e-cde9-4998-ba25-a2e815885778/Screenshot_1.png)
    

### **Pre-rendering Methods: (Two Form Of Pre-rendering) (Static Generation - Server Side Rendering)**

- İkisi arasındaki fark bir HTML ‘in ne zaman oluşturulduğu ile alakalır.
- ***Statik Generation Pre-rendering:*** HTML build time ‘da oluşturulu. Her user requestinde korunur ve  tekrar tekrar oluşturulmaz. Bu yüzden Server Side Rendering ‘e göre daha hızlıdır.

![Screenshot_2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a9cc99c-96ef-4434-9405-4386e9492faf/Screenshot_2.png)

- Build time —> Package.json dosyamızda scriptlerimiz vardı bunlarda biri de next build ‘i

![Screenshot_1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15c2b64a-c40c-4011-9e50-fc7b34015698/Screenshot_1.png)

- yarn build dediğimizde buradaki “next build” çağrılır.
- Burası Statik Generation ‘ının gerçekleştiği kısımdır.
- ***Server Side Rendering:*** Her user requestinde (each request) yeni bir HTML oluşturur.

![Screenshot_3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2421b597-115a-42d5-8300-138be23ddb31/Screenshot_3.png)

> **NOT**: Development modunda (npm run dev / yarn dev) her sayfa her request ‘de pre-render edilir. Bu durum Static Generation ile oluşturulan sayfalar için de geçerlidir. Sadece Development ortamında geçerli bir olaydır.
> 

> Production modunda Static Generation sadece build time ‘da yapılır. Development modunda her requestde re-render edilir.
> 

### **Per-Page Basis (Sayfa Bazlı)**

- Nextjs ‘de sadece Static Generation (SSG), Server Side Renderin (SSR), Client Side Rendering (CSR) değil bunları sayfa bazlı da kullanabiliriz.
- Nextjs Pre-rendering formları arasında her sayfa için bir seçim yapmamıza izin verir.
- Bu şekilde hybrid nextjs uygulamaları yaratılabilir.

![Screenshot_2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a57466c-37bf-44a1-b9c0-50c54cc0df92/Screenshot_2.png)

### **Static Generation ve Server-Side Rendering seçim yapmak (When to use)**

- Nextjs ‘nin önerisi olabildiğince Static Generation kullanmak. Çünkü build time ‘de pre-render yapıp sonrasındaki her request ‘de bunu kullanmak daha hızlıdır.
    - ***Örnek Sayfalar:***
        - Marketing pages
        - Blog posts
        - E-commerce product listings
        - Help and documentation
- Farklı user request ‘lerinde tekrar tekrar oluştrulmasına gerek olmayan, hali hazırda bir tane olan sayflar için Static Generation.
- Sıkça güncellenen bir veriye sahipsek, user ‘ın url ‘e gireceği parametreler requestimizi etkiliyor ise ( Veriyi farklı parametrelere göre tekrardan yakalamamız gerekiyorsa ) o zaman her user requestinde re-render işlemi yapan Server-Side Rendering ‘i kullanmamız gerekir.
- Statik Generation ‘a göre daha yavaş olacak ama her zaman güncel (up to date) olacaktır.

## **getStaticProps:**

- Naxtjs içerisinde Static Generation yöntemini kullanarak veriyi yakalayabileceğimiz bir alan.
- getStaticProps kodun sadece Server Side ‘da çalışmasını sağlar.
- Sadece Nextjs componet ‘leirnden export edilebilir.
- Yani Components klasörü altındaki herhangi bir react componenti altından export edemem.
- Çünkü react ‘in bir component ‘i render edebilmesi için tüm verinin yakalanmış ve hazır olması gereklidir.
- Built Time ‘da çalışır ve sonrasındaki tüm request ‘ler için tekrar tekrar kullanılır. (Production ortamında)
- Development ortamında ise her request için yeniden oluşturulur.
- getStaticProps sadece içindeki kodun Server-Side ‘da çalıştığını garanti eder. Clint-Side ‘da çalışmayacağından emin olabiliriz.
- İçindeki kodlar JS Bundle ‘a da dahil edilmez. Yani hiçbir şekilde tarayıcıya gitmediğinden emin olabiliriz.

## **getServerSideProps**:

![Screenshot_4.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6928cdf-9db6-4984-a32d-72e5b7825e76/Screenshot_4.png)

- Her requestde sayfalar dinamik olarak yeniden oluşturulur.
- context parametresi alır ve user requestinde yeniden çağrılır.
- Context sayesinde url ‘deki parametrelere erişebiliriz.

## **getStaticPaths:**

![Screenshot_5.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3c54b1e-d555-4cd2-a730-fc530934aae8/Screenshot_5.png)

- getStaticProps ile kombineli olarak kullanılır.
- Sayfalarımızı build time ‘da static olarak oluşturabiliriz.
- Bir dökümantasyon sayfası hazırlamak istiyor olalım ve bunun hızlı bir şekilde oluşturulmasını istiyoruz. Gerekli olan tüm sayfaları run time yerine static olarak pre-fetchin (önceden getirme) yaptıralım.
- getStaticPaths sayesinde oluşturulması gereken HTML sayfalarını önceden oluşturabiliriz.
- getStaticPaths ile sayfa oluşturulur ve getStaticProps ile de sayfa için gerekli veriyi yakalarız.
- Kaç sayafamız olacağı biliniyor ise kullanılablir.
- Sayfanınn hızlı olmasını sağlar.
- **Fallback**:
    - Sayfa bulunamadığında hata gözükmesini sağlıyor.
    - 

## API Route ‘ları Oluşturmak

Nextjs ile kendi api router ‘larımız sunabiliriz.

Pages —> api folder —> create a folder —> index.js

- index.js:
    
    ```jsx
    import {videos} from "../../../videos"   // video api 'ı için oluşturduğum bilgileri alıyorum.
    
    export default (req, res) => {
    	res.status(200).json(videos);
    }; 
    ```
    
- Videolara id ile erişmek için [id].js:

```jsx
import {videos} from "../../../videos"  

export default (req, res) => {
	
	const { id } = req.query;  // id 'yi yakalıyoruz.

	const video = videos.find( (video) => video.id.toString() === id ); //video 'muzu buluyoruz.

	if(video){
		res.status(200).json(video);
	} else{
		res.(404).json({ 
			message: "Error. No such video!",
		})	
	}
}; 
```