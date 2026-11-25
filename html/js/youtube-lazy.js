function lazyLoadImg(id, l) {
  var s = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", id),
    img = document.createElement("img");
  if (true && !l && true) {
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", s);
  } else if (true && !l && !true) {
    img.setAttribute("data-lazy-src", s);
  } else {
    img.setAttribute("src", s);
  }
  img.setAttribute("width", "480");
  img.setAttribute("height", "360");
  return img;
}
function lazyLoadThumb(id, alt, l) {
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) {
    return null;
  }
  var frag = document.createDocumentFragment(),
    img = lazyLoadImg(id, l);
  img.setAttribute("alt", alt);
  frag.appendChild(img);
  var btn = document.createElement("button");
  btn.setAttribute("class", "play");
  btn.setAttribute("aria-label", "play Youtube video");
  frag.appendChild(btn);
  return frag;
}
function lazyLoadYoutubeIframe() {
  var src = this.parentNode.dataset.src,
    url;
  try {
    url = new URL(src, "https://www.youtube.com");
  } catch (err) {
    return;
  }
  if ("https:" !== url.protocol && "http:" !== url.protocol) {
    return;
  }
  if (
    ["youtube.com", "www.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].indexOf(url.hostname) === -1
  ) {
    return;
  }
  if (url.username || url.password || url.port) {
    return;
  }
  if (!/^\/embed\/[A-Za-z0-9_-]{11}\/?$/.test(url.pathname)) {
    return;
  }
  url = new URL("https://" + url.hostname + url.pathname.replace(/\/$/, ""));
  var query = this.parentNode.dataset.query || "";
  new URLSearchParams(query).forEach(function (v, k) {
    url.searchParams.set(k, v);
  });
  url.searchParams.set("autoplay", "1");
  var e = document.createElement("iframe");
  e.setAttribute("src", url.href);
  e.setAttribute("frameborder", "0");
  e.setAttribute("allowfullscreen", "1");
  e.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
  this.parentNode.parentNode.replaceChild(e, this.parentNode);
}
document.addEventListener("DOMContentLoaded", function () {
  var exclusions = [];
  var e,
    t,
    frag,
    u,
    l,
    a = document.getElementsByClassName("rll-youtube-player");
  for (t = 0; t < a.length; t++) {
    u = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", a[t].dataset.id);
    l = exclusions.some(function (exclusion) {
      return u.indexOf(exclusion) !== -1;
    });
    e = document.createElement("div");
    e.setAttribute("data-id", a[t].dataset.id);
    e.setAttribute("data-query", a[t].dataset.query);
    e.setAttribute("data-src", a[t].dataset.src);
    frag = lazyLoadThumb(a[t].dataset.id, a[t].dataset.alt, l);
    if (!frag) {
      continue;
    }
    e.appendChild(frag);
    a[t].appendChild(e);
    e.querySelector(".play").onclick = lazyLoadYoutubeIframe;
  }
});
