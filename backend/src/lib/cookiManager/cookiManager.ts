import { delCookie } from "./utils/delCookie";
import { setCookie } from "./utils/setCookie";
import { getCookie } from "./utils/getCookie";
import type { Context, CookieDelOptions, CookieOptions, DureeTemps } from "./types/cookiLibType";

const cookieManager = {
    getCookie,
    setCookie,
    delCookie
}

export default cookieManager;

export type { Context, CookieDelOptions, CookieOptions, DureeTemps };
export { delCookie, setCookie, getCookie, cookieManager };