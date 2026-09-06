// スマホケア (sumahocare) — small utilities (no frameworks)

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Back to top
  var btn = document.querySelector(".back-top");
  if (btn) {
    var onScroll = function () {
      btn.classList.toggle("show", window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact form -> mailto
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.name.value || "").trim();
      var mail = (form.email.value || "").trim();
      var topic = form.topic.value || "";
      var msg = (form.message.value || "").trim();
      var subject = "【" + (topic || "スマホケア お問い合わせ") + "】からのメッセージ" + (name ? "（" + name + "）" : "");
      var body =
        "メッセージ：\n" + msg + "\n\n" +
        "-------- 送信者情報 --------\n" +
        "お名前：" + name + "\n" +
        "メールアドレス：" + mail + "\n" +
        "相談カテゴリ：" + topic;
      window.location.href =
        "mailto:aarbi@mail.com?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // Current year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());

  // Active nav link highlight (based on current page)
  var currentFile = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
  if (!currentFile || currentFile === "") currentFile = "index";
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href.indexOf("#") !== -1) return;
    var linkFile = (href.split("/").pop() || "").replace(".html", "");
    if (linkFile === currentFile) {
      a.classList.add("active");
    }
  });
});
