module.exports = [
"[project]/app/contact/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Contact() {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultContent"]), [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/content").then((r)=>r.json()).then(setContent);
    }, []);
    function submit(e) {
        e.preventDefault();
        setSent(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "orderPage",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "back",
                href: "/",
                children: "← بازگشت به سایت"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 4,
                columnNumber: 317
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "orderBox contactPage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "رایامهر"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 413
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "تماس با ما"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 435
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "برای انتخاب پکیج مناسب یا دریافت راهنمایی، با ما در ارتباط باشید."
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 454
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "تماس:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 4,
                                        columnNumber: 529
                                    }, this),
                                    " ",
                                    content.phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 526
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "اینستاگرام:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 4,
                                        columnNumber: 564
                                    }, this),
                                    " @",
                                    content.instagram
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 561
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "واتساپ:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 4,
                                        columnNumber: 610
                                    }, this),
                                    " ",
                                    content.whatsapp
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 607
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 4,
                        columnNumber: 408
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "نام شما",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 4,
                                        columnNumber: 691
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 677
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "شماره تماس",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        inputMode: "tel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 4,
                                        columnNumber: 733
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 716
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "wide",
                                children: [
                                    "پیام شما",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 4,
                                        columnNumber: 806
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 774
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                children: "ارسال پیام"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 834
                            }, this),
                            sent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "orderMessage",
                                children: "پیام شما ثبت شد. به‌زودی پاسخ می‌دهیم."
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 4,
                                columnNumber: 868
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 4,
                        columnNumber: 653
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 4,
                columnNumber: 366
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contact/page.tsx",
        lineNumber: 4,
        columnNumber: 279
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

//# sourceMappingURL=_0jpo107._.js.map