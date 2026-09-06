module.exports = [
"[project]/app/order/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const initial = {
    parentName: "",
    phone: "",
    childName: "",
    childAge: "",
    packageName: "",
    city: "",
    message: ""
};
function OrderPage() {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultContent"]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const selected = new URLSearchParams(window.location.search).get("package");
        fetch("/api/content").then((r)=>r.json()).then((data)=>{
            setContent(data);
            setForm((old)=>({
                    ...old,
                    packageName: selected || old.packageName || data.packages[0]?.name || ""
                }));
        });
    }, []);
    async function submit(e) {
        e.preventDefault();
        setMessage("در حال ثبت سفارش...");
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        if (res.ok) location.href = `/payment-success?package=${encodeURIComponent(form.packageName)}`;
        else setMessage("ثبت سفارش انجام نشد؛ لطفاً دوباره تلاش کنید.");
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
                fileName: "[project]/app/order/page.tsx",
                lineNumber: 9,
                columnNumber: 47
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "orderBox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "رایامهر"
                    }, void 0, false, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 9,
                        columnNumber: 126
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "ثبت درخواست پکیج آموزشی"
                    }, void 0, false, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 9,
                        columnNumber: 148
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "اطلاعات زیر فقط برای هماهنگی و انتخاب پکیج مناسب استفاده می‌شود."
                    }, void 0, false, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 9,
                        columnNumber: 180
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "نام و نام خانوادگی والد",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        value: form.parentName,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                parentName: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 305
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 275
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "شماره تماس",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        inputMode: "tel",
                                        value: form.phone,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                phone: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 430
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 413
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "نام کودک",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        value: form.childName,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                childName: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 559
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 544
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "سن کودک",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        placeholder: "مثلاً ۵ سال",
                                        value: form.childAge,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                childAge: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 679
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 665
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "پکیج موردنظر",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: true,
                                        value: form.packageName,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                packageName: e.target.value
                                            }),
                                        children: content.packages.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: item.name
                                            }, item.name, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 9,
                                                columnNumber: 958
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 828
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 809
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "شهر",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: form.city,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                city: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 1031
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 1021
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "wide",
                                children: [
                                    "توضیحات یا سوال شما",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: form.message,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                message: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 9,
                                        columnNumber: 1161
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 1118
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                children: "ثبت درخواست"
                            }, void 0, false, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 9,
                                columnNumber: 1257
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 9,
                        columnNumber: 251
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "orderMessage",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 9,
                        columnNumber: 1302
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/order/page.tsx",
                lineNumber: 9,
                columnNumber: 96
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/order/page.tsx",
        lineNumber: 9,
        columnNumber: 9
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

//# sourceMappingURL=_0b16olr._.js.map