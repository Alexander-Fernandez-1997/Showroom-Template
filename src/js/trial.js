if (typeof window !== "undefined") {
  var headerDesktop = document.querySelector(".container-menu-desktop");
  var wrapMenu = document.querySelector(".wrap-menu-desktop");

  if (document.querySelector(".top-bar").length > 0) {
    var posWrapHeader = document.querySelector(".top-bar").height();
  } else {
    var posWrapHeader = 0;
  }

  if (document.querySelector(window).scrollTop > posWrapHeader) {
    document.querySelector(headerDesktop).classList.add("fix-menu-desktop");
    document.querySelector(wrapMenu).css("top", 0);
  } else {
    document.querySelector(headerDesktop).removeClass("fix-menu-desktop");
    document
      .querySelector(wrapMenu)
      .css("top", posWrapHeader - document.querySelector(this).scrollTop);
  }

  document.querySelector(window).addEventListener("scroll", function () {
    if (document.querySelector(this).scrollTop > posWrapHeader) {
      document.querySelector(headerDesktop).classList.add("fix-menu-desktop");
      document.querySelector(wrapMenu).css("top", 0);
    } else {
      document.querySelector(headerDesktop).removeClass("fix-menu-desktop");
      document
        .querySelector(wrapMenu)
        .css("top", posWrapHeader - document.querySelector(this).scrollTop);
    }
  });
}
