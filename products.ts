export type Product = {
  slug: string; name: string; category: 'Women' | 'Men'; price: number; compareAt?: number;
  description: string; badge?: string; color: string; sizes: string[]; image: string; outfit: string;
};

export const products: Product[] = [
  {slug:'sasha-luna-ivory',name:'Luna Ivory',category:'Women',price:7490,compareAt:8990,description:'A refined everyday loafer with cushioned comfort and a softly structured silhouette.',badge:'Bestseller',color:'Ivory',sizes:['36','37','38','39','40','41'],image:'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=85',outfit:'Pair with wide-leg trousers, a satin blouse and a structured mini bag.'},
  {slug:'sasha-noir-strap',name:'Noir Strap',category:'Women',price:6990,description:'Minimal black flats designed for all-day movement without sacrificing polish.',badge:'New',color:'Black',sizes:['36','37','38','39','40','41'],image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85',outfit:'Style with a monochrome midi dress or tailored co-ords for an effortless city look.'},
  {slug:'sasha-aria-sand',name:'Aria Sand',category:'Women',price:8290,description:'A contemporary heeled sandal with a supportive footbed and an elegant finish.',color:'Sand',sizes:['36','37','38','39','40'],image:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85',outfit:'Wear with linen separates, soft denim and gold jewelry for weekend dinners.'},
  {slug:'sasha-urban-oxford',name:'Urban Oxford',category:'Men',price:8990,description:'A durable leather-look Oxford built for sharp workdays and polished evenings.',badge:'Best Value',color:'Espresso',sizes:['40','41','42','43','44','45'],image:'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=85',outfit:'Finish a navy suit, pressed shirt and leather belt with this timeless pair.'},
  {slug:'sasha-metro-runner',name:'Metro Runner',category:'Men',price:7990,description:'A lightweight everyday sneaker with a flexible sole and modern streetwear profile.',badge:'New',color:'Stone',sizes:['40','41','42','43','44','45'],image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',outfit:'Match with relaxed denim, a heavyweight tee and an overshirt for everyday city style.'},
  {slug:'sasha-heritage-loafer',name:'Heritage Loafer',category:'Men',price:9490,compareAt:10990,description:'A versatile slip-on balancing classic lines, durable construction and soft comfort.',color:'Cognac',sizes:['40','41','42','43','44','45'],image:'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85',outfit:'Pair with chinos, an Oxford shirt and a lightweight blazer for smart-casual polish.'}
];

export function getProduct(slug: string) { return products.find((p) => p.slug === slug); }
