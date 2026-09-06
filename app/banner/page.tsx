"use client";

export default function BannerPage() {

  return (
    <main className="orderPage">

      <section className="promo">

        <img 
          src="/images/packages.jpg" 
          alt=""
        />

        <div>
          <small>پیشنهاد ویژه رایامهر</small>

          <h1>
            یادگیری زبان، یک هدیه ماندگار برای کودک شما
          </h1>

          <p>
            پکیج مناسب سن فرزندتان را انتخاب کنید و مسیر دوزبانه‌شدن را با آرامش شروع کنید.
          </p>

          <a 
            className="button" 
            href="#packages"
          >
            مشاهده پکیج‌ها
          </a>

        </div>

      </section>

    </main>
  );
}