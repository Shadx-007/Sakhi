(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Sakhi/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
            const handleCartUpdate = {
                "Navbar.useEffect.handleCartUpdate": (e)=>{
                    const event = e;
                    setCartCount(event.detail?.count || 0);
                }
            }["Navbar.useEffect.handleCartUpdate"];
            window.addEventListener('cartUpdated', handleCartUpdate);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('cartUpdated', handleCartUpdate)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Dashboard',
            href: '/dashboard'
        },
        {
            label: 'Sensors',
            href: '/sensors'
        },
        {
            label: 'AI Insights',
            href: '/ai-insights'
        },
        {
            label: 'Farmers Hub',
            href: '/farmers-hub'
        },
        {
            label: 'Marketplace',
            href: '/marketplace'
        },
        {
            label: 'Resources',
            href: '/resources'
        },
        {
            label: 'About Us',
            href: '/about'
        }
    ];
    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 w-full z-50 glass dark:glass-dark border-b border-accent/20 dark:border-accent/30 transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold glow-green",
                                    children: "S"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg hidden sm:inline bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent",
                                    children: "Sakhi-Agri"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex gap-8",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "text-sm font-medium text-foreground/70 hover:text-accent transition-colors relative group",
                                    children: [
                                        item.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 group-hover:w-full transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex gap-3 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: "p-2 rounded-lg hover:bg-secondary dark:hover:bg-secondary/80 transition-colors duration-300 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold",
                                            children: cartCount
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "p-2 rounded-lg hover:bg-secondary dark:hover:bg-secondary/80 transition-colors duration-300",
                                    "aria-label": "Toggle theme",
                                    children: mounted && (theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        size: 20,
                                        className: "text-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        size: 20,
                                        className: "text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    className: "px-6 py-2 text-sm font-medium bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300",
                                    children: "Sign Up"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "lg:hidden p-2 hover:bg-secondary dark:hover:bg-secondary/80 rounded-lg transition-colors",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                lineNumber: 115,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                lineNumber: 115,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden pb-4 space-y-2 animate-in fade-in duration-200",
                    children: [
                        navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "block px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary dark:hover:bg-secondary/80 rounded-lg transition-colors",
                                onClick: ()=>setIsOpen(false),
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 space-y-2 border-t border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary dark:hover:bg-secondary/80 rounded-lg transition-colors",
                                    onClick: ()=>setIsOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        "Cart ",
                                        cartCount > 0 && `(${cartCount})`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "w-full text-left px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary dark:hover:bg-secondary/80 rounded-lg transition-colors flex items-center gap-2",
                                    children: mounted && (theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                size: 16,
                                                className: "text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                                lineNumber: 148,
                                                columnNumber: 23
                                            }, this),
                                            "Light Mode"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                size: 16,
                                                className: "text-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                                lineNumber: 153,
                                                columnNumber: 23
                                            }, this),
                                            "Dark Mode"
                                        ]
                                    }, void 0, true))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "block px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary dark:hover:bg-secondary/80 rounded-lg transition-colors",
                                    onClick: ()=>setIsOpen(false),
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    className: "block px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg",
                                    onClick: ()=>setIsOpen(false),
                                    children: "Sign Up"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Sakhi/components/navbar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Navbar, "rRgMRgUnh6RqhRIYPZCGhqi8uA4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Sakhi/components/language-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/contexts/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'hi',
        name: 'हिन्दी'
    },
    {
        code: 'ka',
        name: 'ಕನ್ನಡ'
    },
    {
        code: 'ta',
        name: 'தமிழ்'
    },
    {
        code: 'te',
        name: 'తెలుగు'
    },
    {
        code: 'bn',
        name: 'বাংলা'
    },
    {
        code: 'ml',
        name: 'മലയാളം'
    }
];
function LanguageSelector() {
    _s();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-4 py-2 bg-background/50 border border-border rounded-lg hover:bg-background/80 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: languages.find((l)=>l.code === language)?.name
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: isOpen ? 180 : 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-2",
                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                },
                                className: `w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code ? 'bg-accent/20 text-accent font-medium' : 'hover:bg-background/50'}`,
                                children: lang.name
                            }, lang.code, false, {
                                fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Sakhi/components/language-selector.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(LanguageSelector, "2ZGwe2ESa+hn+Iid5zwYzkoFFA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Sakhi/components/animated-tree-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedTree3D",
    ()=>AnimatedTree3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function AnimatedTree3D() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                viewBox: "0 0 200 300",
                className: "w-full h-full filter drop-shadow-lg",
                animate: {
                    rotateZ: [
                        0,
                        5,
                        0,
                        -5,
                        0
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "3",
                                        result: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "coloredBlur"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                                lineNumber: 21,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                                lineNumber: 22,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "treeGradient",
                                cx: "50%",
                                cy: "30%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#22c55e",
                                        stopOpacity: "0.9"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#16a34a",
                                        stopOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "85",
                        y: "180",
                        width: "30",
                        height: "100",
                        fill: "#8b4513",
                        rx: "5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 70 280 Q 60 295 50 300",
                        stroke: "#6b3410",
                        strokeWidth: "4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 130 280 Q 140 295 150 300",
                        stroke: "#6b3410",
                        strokeWidth: "4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 100 280 Q 100 300 100 305",
                        stroke: "#6b3410",
                        strokeWidth: "4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "100",
                        r: "70",
                        fill: "url(#treeGradient)",
                        filter: "url(#glow)",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "75",
                        cy: "130",
                        r: "50",
                        fill: "#22c55e",
                        filter: "url(#glow)",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "125",
                        cy: "130",
                        r: "50",
                        fill: "#22c55e",
                        filter: "url(#glow)",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "60",
                        r: "45",
                        fill: "#4ade80",
                        filter: "url(#glow)",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            [
                ...Array(6)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute w-2 h-2 rounded-full bg-green-400/60",
                    animate: {
                        x: [
                            0,
                            Math.cos(i / 6 * Math.PI * 2) * 60,
                            0
                        ],
                        y: [
                            0,
                            Math.sin(i / 6 * Math.PI * 2) * 60,
                            0
                        ],
                        opacity: [
                            0.4,
                            1,
                            0.4
                        ]
                    },
                    transition: {
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    style: {
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }, i, false, {
                    fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 via-green-400/10 to-transparent blur-2xl",
                animate: {
                    opacity: [
                        0.3,
                        0.6,
                        0.3
                    ]
                },
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Sakhi/components/animated-tree-3d.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AnimatedTree3D;
var _c;
__turbopack_context__.k.register(_c, "AnimatedTree3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Sakhi/components/middle-section-objects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiddleSectionObjects",
    ()=>MiddleSectionObjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function MiddleSectionObjects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-x-0 top-1/3 h-1/3 pointer-events-none overflow-hidden",
        children: [
            [
                ...Array(5)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute rounded-full border border-green-400/30 dark:border-green-300/40",
                    style: {
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        left: `${i / 5 * 100 + 10}%`,
                        top: `${30 + Math.random() * 40}%`
                    },
                    animate: {
                        y: [
                            0,
                            -30,
                            0
                        ],
                        opacity: [
                            0.2,
                            0.5,
                            0.2
                        ]
                    },
                    transition: {
                        duration: 8 + i * 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }, `circle-${i}`, false, {
                    fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)),
            [
                ...Array(4)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute",
                    style: {
                        left: `${20 + i * 20}%`,
                        top: `${40 + Math.random() * 20}%`
                    },
                    animate: {
                        rotate: [
                            0,
                            360
                        ],
                        scale: [
                            0.8,
                            1.2,
                            0.8
                        ],
                        opacity: [
                            0.15,
                            0.4,
                            0.15
                        ]
                    },
                    transition: {
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: 'linear'
                    },
                    children: i % 2 === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-green-400/40 dark:border-green-300/50"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-green-400/40 dark:border-green-300/50 transform rotate-45"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, `shape-${i}`, false, {
                    fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)),
            [
                ...Array(3)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent",
                    style: {
                        width: `${Math.random() * 200 + 100}px`,
                        left: `${Math.random() * 80}%`,
                        top: `${35 + i * 20}%`
                    },
                    animate: {
                        opacity: [
                            0.1,
                            0.5,
                            0.1
                        ],
                        x: [
                            0,
                            50,
                            0
                        ]
                    },
                    transition: {
                        duration: 6 + i * 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }, `line-${i}`, false, {
                    fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)),
            [
                ...Array(3)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute rounded-full blur-xl",
                    style: {
                        width: 60,
                        height: 60,
                        left: `${15 + i * 35}%`,
                        top: `${45 + Math.sin(i) * 10}%`,
                        background: `radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0) 70%)`
                    },
                    animate: {
                        scale: [
                            1,
                            1.3,
                            1
                        ],
                        opacity: [
                            0.2,
                            0.5,
                            0.2
                        ]
                    },
                    transition: {
                        duration: 5 + i * 1,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }, `orb-${i}`, false, {
                    fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Sakhi/components/middle-section-objects.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = MiddleSectionObjects;
var _c;
__turbopack_context__.k.register(_c, "MiddleSectionObjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Sakhi/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        welcome_back: 'Welcome Back',
        login_desc: 'Login to your Sakhi-Agri account',
        email: 'Email',
        password: 'Password',
        login_button: 'Login',
        no_account: "Don't have an account?",
        signup_link: 'Sign up',
        join_sakhi: 'Join Sakhi-Agri',
        signup_desc: 'Start your farming transformation today',
        full_name: 'Full Name',
        confirm_password: 'Confirm Password',
        create_account: 'Create Account',
        have_account: 'Already have an account?',
        login_link: 'Login'
    },
    hi: {
        welcome_back: 'स्वागत है',
        login_desc: 'अपने साख-कृषि खाते में लॉगिन करें',
        email: 'ईमेल',
        password: 'पासवर्ड',
        login_button: 'लॉगिन',
        no_account: 'खाता नहीं है?',
        signup_link: 'साइन अप करें',
        join_sakhi: 'साख-कृषि में शामिल हों',
        signup_desc: 'आज ही अपनी कृषि यात्रा शुरू करें',
        full_name: 'पूरा नाम',
        confirm_password: 'पासवर्ड की पुष्टि करें',
        create_account: 'खाता बनाएं',
        have_account: 'पहले से खाता है?',
        login_link: 'लॉगिन'
    },
    ka: {
        welcome_back: 'ಸ್ವಾಗತ',
        login_desc: 'ನಿಮ್ಮ ಸಖಿ-ಕೃಷಿ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ',
        email: 'ಇಮೇಲ್',
        password: 'ಪಾಸ್‌ವರ್ಡ್',
        login_button: 'ಲಾಗಿನ್',
        no_account: 'ಖಾತೆ ಇಲ್ಲವೇ?',
        signup_link: 'ಸೈನ್ ಅಪ್ ಮಾಡಿ',
        join_sakhi: 'ಸಖಿ-ಕೃಷಿಗೆ ಸೇರಿ',
        signup_desc: 'ಇಂದೇ ನಿಮ್ಮ ಕೃಷಿ ರೂಪಾಂತರ ಪ್ರಾರಂಭಿಸಿ',
        full_name: 'ಪೂರ್ಣ ಹೆಸರು',
        confirm_password: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಣ',
        create_account: 'ಖಾತೆ ರಚಿಸಿ',
        have_account: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?',
        login_link: 'ಲಾಗಿನ್'
    },
    ta: {
        welcome_back: 'வரவேற்கிறோம்',
        login_desc: 'உங்கள் சக்தி-வேளாண் கணக்கில் உள்நுழையவும்',
        email: 'மின்னஞ்சல்',
        password: 'கடவுச்சொல்',
        login_button: 'உள்நுழைக',
        no_account: 'கணக்கு இல்லையா?',
        signup_link: 'பதிவு செய்யவும்',
        join_sakhi: 'சக்தி-வேளாண்ணில் சேரவும்',
        signup_desc: 'இன்றே உங்கள் வேளாண் மாற்றத்தைத் தொடங்கவும்',
        full_name: 'முழு பெயர்',
        confirm_password: 'கடவுச்சொல் உறுதிப்படுத்தவும்',
        create_account: 'கணக்கு உருவாக்கவும்',
        have_account: 'ஏற்கனவே கணக்கு உள்ளதா?',
        login_link: 'உள்நுழைக'
    },
    te: {
        welcome_back: 'స్వాగతం',
        login_desc: 'మీ సఖీ-కృషి ఖాతాకు లాగిన్ చేయండి',
        email: 'ఈమెయిల్',
        password: 'పాస్‌వర్డ్',
        login_button: 'లాగిన్',
        no_account: 'ఖాతా లేదా?',
        signup_link: 'సైన్ అప్ చేయండి',
        join_sakhi: 'సఖీ-కృషిలో చేరండి',
        signup_desc: 'ఈరోజే మీ వ్యవసాయ రూపాంతరణ ప్రారంభించండి',
        full_name: 'పూర్తి పేరు',
        confirm_password: 'పాస్‌వర్డ్ నిర్ధారణ',
        create_account: 'ఖాతా సృష్టించండి',
        have_account: 'ఇప్పటికే ఖాతా ఉందా?',
        login_link: 'లాగిన్'
    },
    bn: {
        welcome_back: 'স্বাগতম',
        login_desc: 'আপনার সখী-কৃষি অ্যাকাউন্টে লগইন করুন',
        email: 'ইমেল',
        password: 'পাসওয়ার্ড',
        login_button: 'লগইন',
        no_account: 'অ্যাকাউন্ট নেই?',
        signup_link: 'সাইন আপ করুন',
        join_sakhi: 'সখী-কৃষিতে যোগ দিন',
        signup_desc: 'আজই আপনার কৃষি রূপান্তর শুরু করুন',
        full_name: 'পূর্ণ নাম',
        confirm_password: 'পাসওয়ার্ড নিশ্চিত করুন',
        create_account: 'অ্যাকাউন্ট তৈরি করুন',
        have_account: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
        login_link: 'লগইন'
    },
    ml: {
        welcome_back: 'സ്വാഗതം',
        login_desc: 'നിങ്ങളുടെ സഖി-കൃഷി അക്കൗണ്ടിലേക്ക് ലോഗിൻ ചെയ്യുക',
        email: 'ഇമെയിൽ',
        password: 'പാസ്‌വേഡ്',
        login_button: 'ലോഗിൻ',
        no_account: 'അക്കൗണ്ട് ഇല്ലാ?',
        signup_link: 'സൈൻ അപ്പ് ചെയ്യുക',
        join_sakhi: 'സഖി-കൃഷിയിൽ ചേരുക',
        signup_desc: 'ഇന്നുതന്നെ നിങ്ങളുടെ കൃഷി പരിവർത്തനം ആരംഭിക്കുക',
        full_name: 'പൂർണ്ണ നാമം',
        confirm_password: 'പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക',
        create_account: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക',
        have_account: 'ഇതിനകം അക്കൗണ്ട് ഉണ്ടാ?',
        login_link: 'ലോഗിൻ'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Sakhi/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/components/language-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$animated$2d$tree$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/components/animated-tree-3d.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$middle$2d$section$2d$objects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/components/middle-section-objects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/contexts/language-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/lib/translations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Signup() {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language];
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background pt-20 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$middle$2d$section$2d$objects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiddleSectionObjects"], {}, void 0, false, {
                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto px-4 py-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {}, void 0, false, {
                            fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass p-8 rounded-2xl space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold mb-2",
                                        children: t.join_sakhi
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground/70",
                                        children: t.signup_desc
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "space-y-4",
                                onSubmit: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: t.full_name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleChange,
                                                placeholder: "Your name",
                                                className: "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: t.email
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                value: formData.email,
                                                onChange: handleChange,
                                                placeholder: "you@example.com",
                                                className: "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: t.password
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                name: "password",
                                                value: formData.password,
                                                onChange: handleChange,
                                                placeholder: "••••••••",
                                                className: "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium mb-2",
                                                children: t.confirm_password
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                name: "confirmPassword",
                                                value: formData.confirmPassword,
                                                onChange: handleChange,
                                                placeholder: "••••••••",
                                                className: "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300",
                                        children: t.create_account
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/70",
                                    children: [
                                        t.have_account,
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "text-accent font-semibold hover:underline",
                                            children: t.login_link
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$components$2f$animated$2d$tree$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedTree3D"], {}, void 0, false, {
                fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Sakhi/app/signup/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Signup, "wnMn9MfsFC2EbLp3UP/cn6uGPec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Signup;
var _c;
__turbopack_context__.k.register(_c, "Signup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Downloads/Sakhi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Downloads/Sakhi/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
;
 //# sourceMappingURL=sun.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Moon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Moon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Moon", [
    [
        "path",
        {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }
    ]
]);
;
 //# sourceMappingURL=moon.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Moon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ShoppingCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ShoppingCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ShoppingCart", [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
]);
;
 //# sourceMappingURL=shopping-cart.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingCart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript)");
}),
"[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */ /**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
}),
"[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopChild",
    ()=>PopChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */ class PopChildMeasure extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent;
            const parentWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(parent) ? parent.offsetWidth || 0 : 0;
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */ componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, root }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    });
    const { nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, children?.ref);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "PopChild.useInsertionEffect": ()=>{
            const { width, height, top, left, right } = size.current;
            if (isPresent || !ref.current || !width || !height) return;
            const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
            ref.current.dataset.motionPopId = id;
            const style = document.createElement("style");
            if (nonce) style.nonce = nonce;
            const parent = root ?? document.head;
            parent.appendChild(style);
            if (style.sheet) {
                style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
            }
            return ({
                "PopChild.useInsertionEffect": ()=>{
                    if (parent.contains(style)) {
                        parent.removeChild(style);
                    }
                }
            })["PopChild.useInsertionEffect"];
        }
    }["PopChild.useInsertionEffect"], [
        isPresent
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopChildMeasure, {
        isPresent: isPresent,
        childRef: ref,
        sizeRef: size,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ref: composedRef
        })
    });
}
;
}),
"[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresenceChild",
    ()=>PresenceChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, root })=>{
    const presenceChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(newChildrenMap);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let isReusedContext = true;
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PresenceChild.useMemo[context]": ()=>{
            isReusedContext = false;
            return {
                id,
                initial,
                isPresent,
                custom,
                onExitComplete: ({
                    "PresenceChild.useMemo[context]": (childId)=>{
                        presenceChildren.set(childId, true);
                        for (const isComplete of presenceChildren.values()){
                            if (!isComplete) return; // can stop searching when any is incomplete
                        }
                        onExitComplete && onExitComplete();
                    }
                })["PresenceChild.useMemo[context]"],
                register: ({
                    "PresenceChild.useMemo[context]": (childId)=>{
                        presenceChildren.set(childId, false);
                        return ({
                            "PresenceChild.useMemo[context]": ()=>presenceChildren.delete(childId)
                        })["PresenceChild.useMemo[context]"];
                    }
                })["PresenceChild.useMemo[context]"]
            };
        }
    }["PresenceChild.useMemo[context]"], [
        isPresent,
        presenceChildren,
        onExitComplete
    ]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */ if (presenceAffectsLayout && isReusedContext) {
        context = {
            ...context
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PresenceChild.useMemo": ()=>{
            presenceChildren.forEach({
                "PresenceChild.useMemo": (_, key)=>presenceChildren.set(key, false)
            }["PresenceChild.useMemo"]);
        }
    }["PresenceChild.useMemo"], [
        isPresent
    ]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PresenceChild.useEffect": ()=>{
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
        }
    }["PresenceChild.useEffect"], [
        isPresent
    ]);
    if (mode === "popLayout") {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopChild"], {
            isPresent: isPresent,
            anchorX: anchorX,
            root: root,
            children: children
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"].Provider, {
        value: context,
        children: children
    });
};
function newChildrenMap() {
    return new Map();
}
;
}),
"[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildKey",
    ()=>getChildKey,
    "onlyElements",
    ()=>onlyElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const getChildKey = (child)=>child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) filtered.push(child);
    });
    return filtered;
}
;
}),
"[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatePresence",
    ()=>AnimatePresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */ const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", root })=>{
    const [isParentPresent, safeToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"])(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */ const presentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatePresence.useMemo[presentChildren]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlyElements"])(children)
    }["AnimatePresence.useMemo[presentChildren]"], [
        children
    ]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */ const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"]);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */ const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */ const pendingPresentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */ const exitComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "AnimatePresence.useConstant[exitComplete]": ()=>new Map()
    }["AnimatePresence.useConstant[exitComplete]"]);
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */ const [diffedChildren, setDiffedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "AnimatePresence.useIsomorphicLayoutEffect": ()=>{
            isInitialRender.current = false;
            pendingPresentChildren.current = presentChildren;
            /**
         * Update complete status of exiting children.
         */ for(let i = 0; i < renderedChildren.length; i++){
                const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(renderedChildren[i]);
                if (!presentKeys.includes(key)) {
                    if (exitComplete.get(key) !== true) {
                        exitComplete.set(key, false);
                    }
                } else {
                    exitComplete.delete(key);
                }
            }
        }
    }["AnimatePresence.useIsomorphicLayoutEffect"], [
        renderedChildren,
        presentKeys.length,
        presentKeys.join("-")
    ]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [
            ...presentChildren
        ];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const child = renderedChildren[i];
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */ if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlyElements"])(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */ return null;
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && mode === "wait" && renderedChildren.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */ const { forceRender } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderedChildren.map((child)=>{
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
            const onExit = ()=>{
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                } else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete)=>{
                    if (!isExitComplete) isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && safeToRemove?.();
                    onExitComplete && onExitComplete();
                }
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceChild"], {
                isPresent: isPresent,
                initial: !isInitialRender.current || initial ? undefined : false,
                custom: custom,
                presenceAffectsLayout: presenceAffectsLayout,
                mode: mode,
                root: root,
                onExitComplete: isPresent ? undefined : onExit,
                anchorX: anchorX,
                children: child
            }, key);
        })
    });
};
;
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sakhi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sakhi/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_Sakhi_323ee18f._.js.map