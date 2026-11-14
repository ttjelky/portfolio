import { useEffect, useState } from "react";

// Мінімальний роутер на hash, бо сайт живе на GitHub Pages без серверних маршрутів.
// "#/project/<slug>" — сторінка проєкту; будь-який інший hash ("#about", "#projects")
// — головна з прокруткою до секції.
function parse(hash) {
  const m = hash.match(/^#\/project\/([\w-]+)/);
  return m ? { page: "project", slug: m[1] } : { page: "home", anchor: hash.slice(1) };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
