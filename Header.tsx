'use client';
import Link from 'next/link';
import { ShoppingBag, Search } from 'lucide-react';
import { useState } from 'react';
export default function Header(){ const [open,setOpen]=useState(false); return <header className="header"><div className="nav wrap"><Link href="/" className="logo">SASHA<span>.</span></Link><nav><Link href="/products">Shop</Link><Link href="/products?category=Women">Women</Link><Link href="/products?category=Men">Men</Link><a href="#story">Our Story</a></nav><div className="navActions"><button aria-label="Search" onClick={()=>setOpen(!open)}><Search size={19}/></button><Link href="/products" aria-label="Shopping bag"><ShoppingBag size={19}/></Link></div></div>{open&&<div className="searchbar"><div className="wrap"><input autoFocus placeholder="Search Sasha footwear..." onKeyDown={e=>{if(e.key==='Enter') window.location.href='/products?q='+encodeURIComponent((e.target as HTMLInputElement).value)}}/></div></div>}</header> }
