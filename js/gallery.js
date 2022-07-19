document.addEventListener(
    "DOMContentLoaded",
    function () {
      const tabs = document.getElementsByClassName("tab");
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", tabSwitch, false);
      }
  
      function tabSwitch() {
        document
          .getElementsByClassName("is-active")[0]
          .classList.remove("is-active");
        this.classList.add("is-active");
  
        document.getElementsByClassName("is-show")[0].classList.remove("is-show");
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName("panel")[index].classList.add("is-show");
      }
    },
    false
  );
  
  $(".galleryItem").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      preload: [0, 1],
    },
    autoFocusLast: false,
    fixedBgPos: true,
    fixedContentPos: false,
    closeOnBgClick: true,
    midClick: true,
    callbacks: {
      open: function () {
        $("body").css("overflow", "hidden");
      },
  
      close: function () {
        $("body").css("overflow", "");
      },
    },
    mainClass: "mfp-with-zoom", // this class is for CSS animation below
  
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
  
      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function
  
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  