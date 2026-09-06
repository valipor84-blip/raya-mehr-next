module.exports = [
"[project]/app/about/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function About() {
    const [c, setC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultContent"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/content").then((r)=>r.json()).then(setC);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "orderPage",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "back",
                href: "/",
                children: "← بازگشت به سایت"
            }, void 0, false, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 4,
                columnNumber: 203
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "orderBox aboutPage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: c.teacherImage,
                        alt: "مدرس رایامهر"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 4,
                        columnNumber: 292
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "درباره رایامهر"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 343
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: c.teacherTitle
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 372
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: c.teacherDescription
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 397
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "روش آموزشی ما"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 426
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "در رایامهر، آموزش زبان با بازی، تصویر، تکرار هدفمند و همراهی والدین پیش می‌رود تا کودک با علاقه و بدون فشار زبان را تجربه کند."
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 448
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "مأموریت ما"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 581
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "کمک به کودکان برای ساختن پایه‌ای شیرین و ماندگار در زبان انگلیسی، متناسب با سن و ریتم یادگیری هر کودک."
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 600
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "button",
                                href: "/contact",
                                children: "تماس با رایامهر"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.tsx",
                                lineNumber: 4,
                                columnNumber: 709
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.tsx",
                        lineNumber: 4,
                        columnNumber: 338
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.tsx",
                lineNumber: 4,
                columnNumber: 252
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/about/page.tsx",
        lineNumber: 4,
        columnNumber: 165
    }, this);
}
}),
"[project]/lib/site-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultContent",
    ()=>defaultContent
]);
const defaultContent = {
    teacherImage: "/images/teacher.jpg",
    packageImage: "/images/packages.jpg",
    heroTitle: "آموزش زبان انگلیسی؛ شروعی شیرین برای",
    heroHighlight: "کودک دوزبانه",
    heroDescription: "پکیج‌های آموزشی رایامهر، طراحی‌شده متناسب با سن و مسیر یادگیری فرزند شما",
    teacherTitle: "همراه کودک شما در مسیر دوزبانه شدن",
    teacherDescription: "سال‌ها تدریس زبان انگلیسی به کودکان به من نشان داده که هر کودک ریتم یادگیری خودش را دارد. به همین دلیل پکیج‌های رایامهر را بر اساس سن، توان ذهنی و علاقه‌های کودکان طراحی کرده‌ام؛ مسیری آرام، بازی‌محور و بدون فشار که در آن کودک با اشتیاق پیش می‌رود و والدین دقیقاً می‌دانند هر مرحله چه باید بکنند.",
    phone: "09120000000",
    instagram: "rayamehr",
    whatsapp: "989120000000",
    packages: [
        {
            name: "پکیج استارتر",
            age: "۲ تا ۴ سال",
            description: "آشنایی نرم و بازی‌محور با صداها و اولین کلمات انگلیسی.",
            image: "/images/packages.jpg",
            price: "استعلام قیمت",
            details: "شروعی آرام و لذت‌بخش برای آشنایی کودک با صداها و واژه‌های ابتدایی انگلیسی.",
            includes: "کارت‌های تصویری، راهنمای والدین و فعالیت‌های بازی‌محور"
        },
        {
            name: "پکیج مقدماتی",
            age: "۴ تا ۶ سال",
            description: "شناخت حروف، رنگ‌ها و واژه‌های روزمره با تصویر و بازی.",
            image: "/images/packages.jpg"
        },
        {
            name: "پکیج پایه",
            age: "۴ تا ۶ سال",
            description: "تثبیت واژگان پایه و ساخت جمله‌های کوتاه و کاربردی.",
            image: "/images/packages.jpg"
        },
        {
            name: "پکیج پیشرفته",
            age: "۶ تا ۸ سال",
            description: "خواندن و نوشتن ساده همراه با مکالمه‌های موقعیتی.",
            image: "/images/packages.jpg"
        },
        {
            name: "پکیج فوق‌پیشرفته",
            age: "۸ تا ۱۰ سال",
            description: "گسترش واژگان، درک مطلب و گفت‌وگوهای طولانی‌تر.",
            image: "/images/packages.jpg"
        },
        {
            name: "پکیج انگلیش مستری",
            age: "۱۰ تا ۱۲ سال",
            description: "تسلط بر چهار مهارت و آماده‌شدن برای مسیر دوزبانگی.",
            image: "/images/packages.jpg"
        }
    ]
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0imn853._.js.map