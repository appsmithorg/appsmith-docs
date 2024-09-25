(function () {
      var e, t, n;
      e = "053d80687ea3965";
      t = function () {
            Reo.init({ clientID: e });
      };
      n = document.createElement("script");
      n.src = "https://static.reo.dev/" + e + "/reo.js";
      n.async = true;
      n.onload = t;
      document.head.appendChild(n);
})();