module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/content/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/site-content.ts [app-route] (ecmascript) <locals>");
;
;
;
const runtime = "nodejs";
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readContent"])());
}
async function PUT(request) {
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAdmin"])()) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message: "دسترسی غیرمجاز است."
    }, {
        status: 401
    });
    const content = await request.json();
    if (!content.heroTitle || !content.packages?.length) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message: "اطلاعات ناقص است."
    }, {
        status: 400
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["writeContent"])(content);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(content);
}
}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "correctPassword",
    ()=>correctPassword,
    "isAdmin",
    ()=>isAdmin,
    "setSession",
    ()=>setSession
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const cookieName = "raya_admin_session";
const secret = ()=>process.env.ADMIN_SECRET || "only-for-local-development-change-this";
const password = ()=>process.env.ADMIN_PASSWORD || "raya-mehr-1405";
function signature(value) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", secret()).update(value).digest("hex");
}
function correctPassword(input) {
    return input.length === password().length && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].timingSafeEqual(Buffer.from(input), Buffer.from(password()));
}
async function setSession() {
    const value = "admin";
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    store.set(cookieName, `${value}.${signature(value)}`, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 8
    });
}
async function clearSession() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    store.set(cookieName, "", {
        httpOnly: true,
        path: "/",
        maxAge: 0
    });
}
async function isAdmin() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(cookieName)?.value;
    return token === `admin.${signature("admin")}`;
}
}),
"[project]/lib/site-content.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContent",
    ()=>readContent,
    "writeContent",
    ()=>writeContent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-types.ts [app-route] (ecmascript)");
;
;
;
;
const dataPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "site-content.json");
async function readContent() {
    try {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultContent"],
            ...JSON.parse(await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(dataPath, "utf8"))
        };
    } catch  {
        await writeContent(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultContent"]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultContent"];
    }
}
async function writeContent(content) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].mkdir(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(dataPath), {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(dataPath, JSON.stringify(content, null, 2), "utf8");
}
}),
"[project]/lib/site-types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q-06su._.js.map