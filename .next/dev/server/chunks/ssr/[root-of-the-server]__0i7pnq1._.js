module.exports = [
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$design$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/site-design.ts [app-rsc] (ecmascript) <locals>");
;
;
;
const metadata = {
    title: "رایامهر | آموزش زبان انگلیسی کودکان",
    description: "پکیج‌های آموزش زبان انگلیسی کودکان ۲ تا ۱۲ سال؛ مسیری شیرین برای تربیت کودک دوزبانه."
};
async function RootLayout({ children }) {
    const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$design$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["readDesign"])();
    const vars = {
        "--site-primary": d.primaryColor,
        "--site-accent": d.accentColor,
        "--site-bg": d.backgroundColor,
        "--site-heading": d.headingColor,
        "--site-text": d.textColor,
        "--site-font-size": `${d.fontSize}px`,
        "--site-button-radius": `${d.buttonRadius}px`,
        "--site-card-radius": `${d.cardRadius}px`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "fa",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            style: vars,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 13,
            columnNumber: 36
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/design-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultDesign",
    ()=>defaultDesign,
    "sectionNames",
    ()=>sectionNames
]);
const sectionNames = [
    "hero",
    "packages",
    "benefits",
    "teacher",
    "featured",
    "cta",
    "faq",
    "footer"
];
const defaultDesign = {
    primaryColor: "#b348d0",
    accentColor: "#63267d",
    backgroundColor: "#fff7ff",
    headingColor: "#572067",
    textColor: "#80658a",
    fontSize: 16,
    buttonRadius: 18,
    cardRadius: 25,
    sections: {
        hero: {
            visible: true,
            order: 1
        },
        packages: {
            visible: true,
            order: 2
        },
        benefits: {
            visible: true,
            order: 3
        },
        teacher: {
            visible: true,
            order: 4
        },
        featured: {
            visible: true,
            order: 5
        },
        cta: {
            visible: true,
            order: 6
        },
        faq: {
            visible: true,
            order: 7
        },
        footer: {
            visible: true,
            order: 8
        }
    }
};
}),
"[project]/lib/site-design.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readDesign",
    ()=>readDesign,
    "writeDesign",
    ()=>writeDesign
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$design$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/design-types.ts [app-rsc] (ecmascript)");
;
;
;
;
const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "site-design.json");
async function readDesign() {
    try {
        const saved = JSON.parse(await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].readFile(filePath, "utf8"));
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$design$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultDesign"],
            ...saved,
            sections: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$design$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultDesign"].sections,
                ...saved.sections
            }
        };
    } catch  {
        await writeDesign(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$design$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultDesign"]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$design$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultDesign"];
    }
}
async function writeDesign(design) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].mkdir(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(filePath), {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["promises"].writeFile(filePath, JSON.stringify(design, null, 2), "utf8");
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0i7pnq1._.js.map