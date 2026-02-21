export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // ১. URL থেকে SaaS এর নাম বের করা (যেমন: /opena)
    const saasName = path.split("/")[1] || "home";

    // ২. sr.md স্ট্রাকচার অনুযায়ী পাথ ম্যাপিং
    let finalPath = "";
    if (path === "/" || path === `/${saasName}` || path === `/${saasName}/`) {
      finalPath = `/products/${saasName}/frontend/index.html`;
    } else {
      // স্ট্যাটিক ফাইল (sw.js, css, images) এর জন্য
      const subPath = path.replace(`/${saasName}`, "");
      finalPath = `/products/${saasName}/frontend${subPath}`;
    }

    // ৩. ফাইল সার্ভ করা
    try {
      const response = await env.ASSETS.fetch(new URL(finalPath, url.origin));
      if (response.status === 404) {
        // ফাইল না পেলে হোম পেজে ফেরত পাঠানো (SPA Routing)
        return env.ASSETS.fetch(
          new URL(`/products/${saasName}/frontend/index.html`, url.origin),
        );
      }
      return response;
    } catch (e) {
      return new Response("Mapping Error", { status: 500 });
    }
  },
};
