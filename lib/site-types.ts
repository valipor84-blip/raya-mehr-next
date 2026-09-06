export type PackageItem = {
  name: string;
  age: string;
  description: string;
  image?: string;
  price?: string;
  details?: string;
  includes?: string;
};

export type SiteContent = {
  teacherImage: string;
  packageImage: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  teacherTitle: string;
  teacherDescription: string;
  phone: string;
  instagram: string;
  whatsapp: string;
  packages: PackageItem[];
};

export const defaultContent: SiteContent = {
  teacherImage: "/images/teacher.jpg",
  packageImage: "/images/packages.jpg",
  heroTitle: "آموزش زبان انگلیسی؛ شروعی شیرین برای",
  heroHighlight: "کودک دوزبانه",
  heroDescription: "پکیج‌های آموزشی رایامهر، طراحی‌شده متناسب با سن و مسیر یادگیری فرزند شما",
  teacherTitle: "همراه کودک شما در مسیر دوزبانه شدن",
  teacherDescription:
    "سال‌ها تدریس زبان انگلیسی به کودکان به من نشان داده که هر کودک ریتم یادگیری خودش را دارد. به همین دلیل پکیج‌های رایامهر را بر اساس سن، توان ذهنی و علاقه‌های کودکان طراحی کرده‌ام؛ مسیری آرام، بازی‌محور و بدون فشار که در آن کودک با اشتیاق پیش می‌رود و والدین دقیقاً می‌دانند هر مرحله چه باید بکنند.",
  phone: "09120000000",
  instagram: "rayamehr",
  whatsapp: "989120000000",
  packages: [
    { name: "پکیج استارتر", age: "۲ تا ۴ سال", description: "آشنایی نرم و بازی‌محور با صداها و اولین کلمات انگلیسی.", image: "/images/packages.jpg", price:"استعلام قیمت", details:"شروعی آرام و لذت‌بخش برای آشنایی کودک با صداها و واژه‌های ابتدایی انگلیسی.", includes:"کارت‌های تصویری، راهنمای والدین و فعالیت‌های بازی‌محور" },
    { name: "پکیج مقدماتی", age: "۴ تا ۶ سال", description: "شناخت حروف، رنگ‌ها و واژه‌های روزمره با تصویر و بازی.", image: "/images/packages.jpg" },
    { name: "پکیج پایه", age: "۴ تا ۶ سال", description: "تثبیت واژگان پایه و ساخت جمله‌های کوتاه و کاربردی.", image: "/images/packages.jpg" },
    { name: "پکیج پیشرفته", age: "۶ تا ۸ سال", description: "خواندن و نوشتن ساده همراه با مکالمه‌های موقعیتی.", image: "/images/packages.jpg" },
    { name: "پکیج فوق‌پیشرفته", age: "۸ تا ۱۰ سال", description: "گسترش واژگان، درک مطلب و گفت‌وگوهای طولانی‌تر.", image: "/images/packages.jpg" },
    { name: "پکیج انگلیش مستری", age: "۱۰ تا ۱۲ سال", description: "تسلط بر چهار مهارت و آماده‌شدن برای مسیر دوزبانگی.", image: "/images/packages.jpg" },
  ],
};
