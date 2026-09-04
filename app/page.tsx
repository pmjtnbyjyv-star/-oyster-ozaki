"use client";

import { useEffect, useState } from "react";
import { SITE_LINKS } from "./site-links";

const products = [
  { name: "殻付き牡蠣", en: "SHELL OYSTERS", note: "産地からそのままの味わいを", position: "50% 50%", image: "/images/oysters-product.jpg", rakutenUrl: SITE_LINKS.rakuten.shellOysters, trackingId: "shell_oysters" },
  { name: "むき身", en: "SHUCKED OYSTERS", note: "料理に使いやすく、ぷりっと濃厚に", position: "50% 50%", image: "/images/oysters-shucked-1kg.jpg", rakutenUrl: SITE_LINKS.rakuten.shuckedOysters1kg, trackingId: "shucked_oysters_1kg" },
  { name: "季節のセット", en: "SEASONAL SELECTION", note: "旬を楽しむおまかせ便", position: "50% 50%", image: "/images/oysters-seasonal-set.jpg", rakutenUrl: SITE_LINKS.rakuten.seasonalSet, trackingId: "seasonal_set" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="オイスター尾崎 トップ">
          <span className="brand-mark">O</span>
          <span><b>OYSTER OZAKI</b><small>オイスター尾崎</small></span>
        </a>
        <button className={`menu-button ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー" aria-expanded={menuOpen}>
          <i /><i />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="メインナビゲーション">
          <a href="#about" onClick={() => setMenuOpen(false)}>私たちについて</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>牡蠣</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>海と漁</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>お問い合わせ</a>
          <a className="header-rakuten" href={SITE_LINKS.rakuten.shop} onClick={() => setMenuOpen(false)} data-track="rakuten_click" data-location="header">楽天市場で購入 <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">FROM THE SETO INLAND SEA</p>
          <h1>瀬戸内の海が育てた、<br /><em>本物の牡蠣。</em></h1>
          <p className="hero-copy">海と向き合い、一粒一粒を大切に。<br />オイスター尾崎から、旬の牡蠣をお届けします。</p>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL</span><i /></a>
      </section>

      <section className="intro" id="about">
        <div className="section-wrap intro-grid">
          <div className="intro-copy" data-reveal>
            <p className="eyebrow">OUR PHILOSOPHY</p>
            <h2>海と生きる。<br />牡蠣を育てる。</h2>
            <p className="lead">穏やかな瀬戸内の海で、<br />その日の海と向き合いながら。</p>
            <p>オイスター尾崎は、牡蠣の生産・販売を行う牡蠣漁師です。海の恵みをまっすぐに受け取り、旬のおいしさを届けることを大切にしています。</p>
            <p className="placeholder-note">※ 詳しい産地・生産者紹介は、正式な情報と写真がそろい次第掲載します。</p>
          </div>
          <div className="portrait-frame" data-reveal>
            <div className="portrait-image" role="img" aria-label="瀬戸内の海で漁をする牡蠣漁師のイメージ" />
            <span className="vertical-label">OYSTER FARMER / SETOUCHI</span>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="section-wrap">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">SEASON'S HARVEST</p><h2>海から届く、<br />旬の味。</h2></div>
            <p>販売開始に向けて準備中です。<br />旬や水揚げ状況に合わせてご案内します。</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name} data-reveal>
                <div className="product-image" style={{ backgroundPosition: product.position, backgroundImage: `linear-gradient(0deg,rgba(0,15,25,.36),transparent 40%),url('${product.image}')` }}>
                  <span className="product-number">0{index + 1}</span>
                  <span className="coming">COMING SOON</span>
                </div>
                <div className="product-info">
                  <p>{product.en}</p><h3>{product.name}</h3><span>{product.note}</span>
                  <a className="product-rakuten" href={product.rakutenUrl} data-track="rakuten_product_click" data-product={product.trackingId}>
                    <span>楽天市場で購入</span><i>↗</i>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="sample-label">掲載内容・商品写真はサンプルです</p>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-bg" />
        <div className="story-overlay" />
        <div className="story-content" data-reveal>
          <p className="eyebrow light">THE SEA &amp; THE WORK</p>
          <h2>潮を読み、<br />季節を待つ。</h2>
          <p>静かな海の上で積み重ねる、日々の仕事。<br />筏、潮、水揚げ——そのすべてが、<br />一粒のおいしさにつながっています。</p>
          <div className="story-index"><span>01 <small>穏やかな海</small></span><span>02 <small>牡蠣筏</small></span><span>03 <small>日々の水揚げ</small></span></div>
        </div>
      </section>

      <section className="social" id="contact">
        <div className="section-wrap social-grid">
          <div className="social-copy" data-reveal>
            <p className="eyebrow">STAY CONNECTED</p>
            <h2>海の今を、<br />もっと近くに。</h2>
            <p>水揚げの様子や旬のお知らせはInstagramで。ご注文・お問い合わせはLINE公式アカウントから受け付ける予定です。</p>
          </div>
          <div className="social-links" data-reveal>
            <a className="social-link instagram" href={SITE_LINKS.instagram} aria-label="Instagram（準備中）" data-track="instagram_click" data-location="contact">
              <span className="social-icon">◎</span><span><small>FOLLOW US</small>Instagram<b>公式アカウント準備中</b></span><i>↗</i>
            </a>
            <a className="social-link line" href={SITE_LINKS.line} aria-label="LINE公式アカウント（準備中）" data-track="line_click" data-location="contact">
              <span className="line-bubble">LINE</span><span><small>ORDER &amp; CONTACT</small>LINE公式<b>ご注文・お問い合わせはこちら</b></span><i>↗</i>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="section-wrap contact-inner" data-reveal>
          <div><p className="eyebrow light">CONTACT</p><h2>牡蠣のこと、<br />お気軽にご相談ください。</h2></div>
          <p>電話番号・受付時間などは<br />正式情報の確定後に掲載します。</p>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">O</span><b>OYSTER OZAKI</b><small>オイスター尾崎</small></div>
        <div className="footer-links"><a href="#instagram">Instagram</a><a href="#line">LINE</a><span>プライバシーポリシー（準備中）</span><span>特定商取引法に基づく表記（準備中）</span></div>
        <p>© OYSTER OZAKI. ALL RIGHTS RESERVED.</p>
      </footer>
      <a className="mobile-rakuten" href={SITE_LINKS.rakuten.shop} data-track="rakuten_click" data-location="mobile_sticky">
        <span><small>ONLINE SHOP</small>楽天市場で購入</span><i>↗</i>
      </a>
    </main>
  );
}
