"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss";
exports.ids = ["vendor-chunks/@t3-oss"];
exports.modules = {

/***/ "(rsc)/./node_modules/@t3-oss/env-nextjs/dist/index.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@t3-oss/env-nextjs/dist/index.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ P)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nfunction f(e) {\n    let r = e.runtimeEnvStrict ?? e.runtimeEnv ?? process.env;\n    if (e.emptyStringAsUndefined ?? !1) for (let [t, n] of Object.entries(r))n === \"\" && delete r[t];\n    if (e.skipValidation) return r;\n    let i = typeof e.client == \"object\" ? e.client : {}, o = typeof e.server == \"object\" ? e.server : {}, s = typeof e.shared == \"object\" ? e.shared : {}, d = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(i), T = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(o), l = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(s), v = e.isServer ?? \"undefined\" > \"u\", p = d.merge(l), y = T.merge(l).merge(d), c = v ? y.safeParse(r) : p.safeParse(r), m = e.onValidationError ?? ((t)=>{\n        throw console.error(\"❌ Invalid environment variables:\", t.flatten().fieldErrors), new Error(\"Invalid environment variables\");\n    }), u = e.onInvalidAccess ?? ((t)=>{\n        throw new Error(\"❌ Attempted to access a server-side environment variable on the client\");\n    });\n    return c.success === !1 ? m(c.error) : new Proxy(c.data, {\n        get (t, n) {\n            if (!(typeof n != \"string\" || n === \"__esModule\" || n === \"$$typeof\")) return !v && e.clientPrefix && !n.startsWith(e.clientPrefix) && l.shape[n] === void 0 ? u(n) : t[n];\n        }\n    });\n}\nvar x = \"NEXT_PUBLIC_\";\nfunction P(e) {\n    let r = typeof e.client == \"object\" ? e.client : {}, i = typeof e.server == \"object\" ? e.server : {}, o = e.shared, s = e.runtimeEnv ? e.runtimeEnv : {\n        ...process.env,\n        ...e.experimental__runtimeEnv\n    };\n    return f({\n        ...e,\n        shared: o,\n        client: r,\n        server: i,\n        clientPrefix: x,\n        runtimeEnv: s\n    });\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHQzLW9zcy9lbnYtbmV4dGpzL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCO0FBQUEsU0FBU0UsRUFBRUMsQ0FBQztJQUFFLElBQUlDLElBQUVELEVBQUVFLGdCQUFnQixJQUFFRixFQUFFRyxVQUFVLElBQUVDLFFBQVFDLEdBQUc7SUFBQyxJQUFHTCxFQUFFTSxzQkFBc0IsSUFBRSxDQUFDLEdBQUUsS0FBSSxJQUFHLENBQUNDLEdBQUVDLEVBQUUsSUFBR0MsT0FBT0MsT0FBTyxDQUFDVCxHQUFHTyxNQUFJLE1BQUksT0FBT1AsQ0FBQyxDQUFDTSxFQUFFO0lBQUMsSUFBR1AsRUFBRVcsY0FBYyxFQUFDLE9BQU9WO0lBQUUsSUFBSVcsSUFBRSxPQUFPWixFQUFFYSxNQUFNLElBQUUsV0FBU2IsRUFBRWEsTUFBTSxHQUFDLENBQUMsR0FBRUMsSUFBRSxPQUFPZCxFQUFFZSxNQUFNLElBQUUsV0FBU2YsRUFBRWUsTUFBTSxHQUFDLENBQUMsR0FBRUMsSUFBRSxPQUFPaEIsRUFBRWlCLE1BQU0sSUFBRSxXQUFTakIsRUFBRWlCLE1BQU0sR0FBQyxDQUFDLEdBQUVDLElBQUVwQixrQ0FBQ0EsQ0FBQ3FCLE1BQU0sQ0FBQ1AsSUFBR1EsSUFBRXRCLGtDQUFDQSxDQUFDcUIsTUFBTSxDQUFDTCxJQUFHTyxJQUFFdkIsa0NBQUNBLENBQUNxQixNQUFNLENBQUNILElBQUdNLElBQUV0QixFQUFFdUIsUUFBUSxJQUFFLGNBQWMsS0FBSUMsSUFBRU4sRUFBRU8sS0FBSyxDQUFDSixJQUFHSyxJQUFFTixFQUFFSyxLQUFLLENBQUNKLEdBQUdJLEtBQUssQ0FBQ1AsSUFBR1MsSUFBRUwsSUFBRUksRUFBRUUsU0FBUyxDQUFDM0IsS0FBR3VCLEVBQUVJLFNBQVMsQ0FBQzNCLElBQUc0QixJQUFFN0IsRUFBRThCLGlCQUFpQixJQUFHdkIsQ0FBQUEsQ0FBQUE7UUFBSSxNQUFNd0IsUUFBUUMsS0FBSyxDQUFDLG9DQUF3Q3pCLEVBQUUwQixPQUFPLEdBQUdDLFdBQVcsR0FBRSxJQUFJQyxNQUFNO0lBQWdDLElBQUdDLElBQUVwQyxFQUFFcUMsZUFBZSxJQUFHOUIsQ0FBQUEsQ0FBQUE7UUFBSSxNQUFNLElBQUk0QixNQUFNO0lBQThFO0lBQUcsT0FBT1IsRUFBRVcsT0FBTyxLQUFHLENBQUMsSUFBRVQsRUFBRUYsRUFBRUssS0FBSyxJQUFFLElBQUlPLE1BQU1aLEVBQUVhLElBQUksRUFBQztRQUFDQyxLQUFJbEMsQ0FBQyxFQUFDQyxDQUFDO1lBQUUsSUFBRyxDQUFFLFFBQU9BLEtBQUcsWUFBVUEsTUFBSSxnQkFBY0EsTUFBSSxVQUFTLEdBQUcsT0FBTSxDQUFDYyxLQUFHdEIsRUFBRTBDLFlBQVksSUFBRSxDQUFDbEMsRUFBRW1DLFVBQVUsQ0FBQzNDLEVBQUUwQyxZQUFZLEtBQUdyQixFQUFFdUIsS0FBSyxDQUFDcEMsRUFBRSxLQUFHLEtBQUssSUFBRTRCLEVBQUU1QixLQUFHRCxDQUFDLENBQUNDLEVBQUU7UUFBQTtJQUFDO0FBQUU7QUFBQyxJQUFJcUMsSUFBRTtBQUFlLFNBQVNDLEVBQUU5QyxDQUFDO0lBQUUsSUFBSUMsSUFBRSxPQUFPRCxFQUFFYSxNQUFNLElBQUUsV0FBU2IsRUFBRWEsTUFBTSxHQUFDLENBQUMsR0FBRUQsSUFBRSxPQUFPWixFQUFFZSxNQUFNLElBQUUsV0FBU2YsRUFBRWUsTUFBTSxHQUFDLENBQUMsR0FBRUQsSUFBRWQsRUFBRWlCLE1BQU0sRUFBQ0QsSUFBRWhCLEVBQUVHLFVBQVUsR0FBQ0gsRUFBRUcsVUFBVSxHQUFDO1FBQUMsR0FBR0MsUUFBUUMsR0FBRztRQUFDLEdBQUdMLEVBQUUrQyx3QkFBd0I7SUFBQTtJQUFFLE9BQU9oRCxFQUFFO1FBQUMsR0FBR0MsQ0FBQztRQUFDaUIsUUFBT0g7UUFBRUQsUUFBT1o7UUFBRWMsUUFBT0g7UUFBRThCLGNBQWFHO1FBQUUxQyxZQUFXYTtJQUFDO0FBQUU7QUFBd0IsQ0FDN3VDLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbS8uL25vZGVfbW9kdWxlcy9AdDMtb3NzL2Vudi1uZXh0anMvZGlzdC9pbmRleC5tanM/Y2QzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7eiBhcyBhfWZyb21cInpvZFwiO2Z1bmN0aW9uIGYoZSl7bGV0IHI9ZS5ydW50aW1lRW52U3RyaWN0Pz9lLnJ1bnRpbWVFbnY/P3Byb2Nlc3MuZW52O2lmKGUuZW1wdHlTdHJpbmdBc1VuZGVmaW5lZD8/ITEpZm9yKGxldFt0LG5db2YgT2JqZWN0LmVudHJpZXMocikpbj09PVwiXCImJmRlbGV0ZSByW3RdO2lmKGUuc2tpcFZhbGlkYXRpb24pcmV0dXJuIHI7bGV0IGk9dHlwZW9mIGUuY2xpZW50PT1cIm9iamVjdFwiP2UuY2xpZW50Ont9LG89dHlwZW9mIGUuc2VydmVyPT1cIm9iamVjdFwiP2Uuc2VydmVyOnt9LHM9dHlwZW9mIGUuc2hhcmVkPT1cIm9iamVjdFwiP2Uuc2hhcmVkOnt9LGQ9YS5vYmplY3QoaSksVD1hLm9iamVjdChvKSxsPWEub2JqZWN0KHMpLHY9ZS5pc1NlcnZlcj8/dHlwZW9mIHdpbmRvdz5cInVcIixwPWQubWVyZ2UobCkseT1ULm1lcmdlKGwpLm1lcmdlKGQpLGM9dj95LnNhZmVQYXJzZShyKTpwLnNhZmVQYXJzZShyKSxtPWUub25WYWxpZGF0aW9uRXJyb3I/Pyh0PT57dGhyb3cgY29uc29sZS5lcnJvcihcIlxcdTI3NEMgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XCIsdC5mbGF0dGVuKCkuZmllbGRFcnJvcnMpLG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpfSksdT1lLm9uSW52YWxpZEFjY2Vzcz8/KHQ9Pnt0aHJvdyBuZXcgRXJyb3IoXCJcXHUyNzRDIEF0dGVtcHRlZCB0byBhY2Nlc3MgYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBvbiB0aGUgY2xpZW50XCIpfSk7cmV0dXJuIGMuc3VjY2Vzcz09PSExP20oYy5lcnJvcik6bmV3IFByb3h5KGMuZGF0YSx7Z2V0KHQsbil7aWYoISh0eXBlb2YgbiE9XCJzdHJpbmdcInx8bj09PVwiX19lc01vZHVsZVwifHxuPT09XCIkJHR5cGVvZlwiKSlyZXR1cm4hdiYmZS5jbGllbnRQcmVmaXgmJiFuLnN0YXJ0c1dpdGgoZS5jbGllbnRQcmVmaXgpJiZsLnNoYXBlW25dPT09dm9pZCAwP3Uobik6dFtuXX19KX12YXIgeD1cIk5FWFRfUFVCTElDX1wiO2Z1bmN0aW9uIFAoZSl7bGV0IHI9dHlwZW9mIGUuY2xpZW50PT1cIm9iamVjdFwiP2UuY2xpZW50Ont9LGk9dHlwZW9mIGUuc2VydmVyPT1cIm9iamVjdFwiP2Uuc2VydmVyOnt9LG89ZS5zaGFyZWQscz1lLnJ1bnRpbWVFbnY/ZS5ydW50aW1lRW52OnsuLi5wcm9jZXNzLmVudiwuLi5lLmV4cGVyaW1lbnRhbF9fcnVudGltZUVudn07cmV0dXJuIGYoey4uLmUsc2hhcmVkOm8sY2xpZW50OnIsc2VydmVyOmksY2xpZW50UHJlZml4OngscnVudGltZUVudjpzfSl9ZXhwb3J0e1AgYXMgY3JlYXRlRW52fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOlsieiIsImEiLCJmIiwiZSIsInIiLCJydW50aW1lRW52U3RyaWN0IiwicnVudGltZUVudiIsInByb2Nlc3MiLCJlbnYiLCJlbXB0eVN0cmluZ0FzVW5kZWZpbmVkIiwidCIsIm4iLCJPYmplY3QiLCJlbnRyaWVzIiwic2tpcFZhbGlkYXRpb24iLCJpIiwiY2xpZW50IiwibyIsInNlcnZlciIsInMiLCJzaGFyZWQiLCJkIiwib2JqZWN0IiwiVCIsImwiLCJ2IiwiaXNTZXJ2ZXIiLCJwIiwibWVyZ2UiLCJ5IiwiYyIsInNhZmVQYXJzZSIsIm0iLCJvblZhbGlkYXRpb25FcnJvciIsImNvbnNvbGUiLCJlcnJvciIsImZsYXR0ZW4iLCJmaWVsZEVycm9ycyIsIkVycm9yIiwidSIsIm9uSW52YWxpZEFjY2VzcyIsInN1Y2Nlc3MiLCJQcm94eSIsImRhdGEiLCJnZXQiLCJjbGllbnRQcmVmaXgiLCJzdGFydHNXaXRoIiwic2hhcGUiLCJ4IiwiUCIsImV4cGVyaW1lbnRhbF9fcnVudGltZUVudiIsImNyZWF0ZUVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@t3-oss/env-nextjs/dist/index.mjs\n");

/***/ })

};
;