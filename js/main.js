"use strict";

// Polyfill for forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

;

(function () {
  $('.first-form').validate({
    rules: {
      name: {
        required: true,
        name: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phone: true
      }
    },
    messages: {
      name: {
        required: 'Пожалуйста, введите свое имя',
        name: 'Возможно, вы не ввели имя с ошибкой'
      },
      phone: {
        required: 'Пожалуйста, введите свой телефон',
        phone: 'Допускается только формат +7(999)999-99-99. Возможно, вы ввели телефон с ошибкой'
      },
      email: {
        required: 'Пожалуйста, введите свой email',
        email: 'Email адрес должен быть в формате name@domain.com. Возможно, вы ввели email с ошибкой'
      }
    }
  });
  $('.second-form').validate({
    rules: {
      name: {
        required: true,
        name: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phone: true
      }
    },
    messages: {
      name: {
        required: 'Пожалуйста, введите свое имя',
        name: 'Допускаются только буквы кириллицы. Возможно, вы ввели имя с ошибкой'
      },
      phone: {
        required: 'Пожалуйста, введите свой телефон',
        phone: 'Допускается только формат +7(999)999-99-99. Возможно, вы ввели телефон с ошибкой'
      },
      email: {
        required: 'Пожалуйста, введите свой email',
        email: 'Email адрес должен быть в формате name@domain.com. Возможно, вы ввели email с ошибкой'
      }
    }
  });
  $('.modal-form').validate({
    rules: {
      name: {
        required: true,
        name: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phone: true
      }
    },
    messages: {
      name: {
        required: 'Пожалуйста, введите свое имя',
        name: 'Допускаются только буквы кириллицы. Возможно, вы ввели имя с ошибкой'
      },
      phone: {
        required: 'Пожалуйста, введите свой телефон',
        phone: 'Допускается только формат +7(999)999-99-99. Возможно, вы ввели телефон с ошибкой'
      },
      email: {
        required: 'Пожалуйста, введите свой email',
        email: 'Email адрес должен быть в формате name@domain.com. Возможно, вы ввели email с ошибкой'
      }
    }
  });
  $('.first-form').submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../php/form-first.php",
      data: th.serialize()
    }).done(function () {
      setTimeout(function () {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
  $('.second-form').submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../php/form-first.php",
      data: th.serialize()
    }).done(function () {
      setTimeout(function () {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
  $('.modal-form').submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../php/form-first.php",
      data: th.serialize()
    }).done(function () {
      setTimeout(function () {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
})();
"use strict";

;

(function () {
  var modalBtn = document.getElementById('modal-btn');
  var modal = document.getElementById('modal');
  var modalClose = document.querySelector('.close');
  var body = document.getElementsByTagName('body')[0];
  var modalOverlay = document.querySelector('.modal-overlay');
  modalBtn.addEventListener('click', showHeaderModal);
  modalClose.addEventListener('click', hideHeaderModal);
  document.addEventListener('keydown', eschideHeaderModal);
  document.addEventListener('click', clickhideHeaderModal);

  function showHeaderModal() {
    if (modal.style.display !== 'flex') {
      modal.style.display = 'flex';
      modalOverlay.style.display = 'block';
      body.classList.add('no-scroll');
    }
  }

  function hideHeaderModal() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    body.classList.remove('no-scroll');
  }

  function eschideHeaderModal(e) {
    if (e.keyCode === 27) {
      hideHeaderModal();
    }
  }

  function clickhideHeaderModal(e) {
    var target = e.target;

    if (target == modalOverlay) {
      hideHeaderModal();
    }
  }
})();
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var nav = document.querySelector('.nav');
  var navList = document.querySelector('.nav-list');
  var menuLinks = document.querySelectorAll('.nav__link');
  var body = document.getElementsByTagName('body')[0];
  var screenWidth = window.screen.availWidth;
  hamburger.addEventListener('click', mobileMenu);

  function mobileMenuLinkClick() {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (screenWidth < 1024) {
          mobileMenuHide();
        }
      });
    });
  }

  mobileMenuLinkClick();

  function mobileMenu() {
    if (!hamburger.classList.contains('active')) {
      hamburger.classList.add('active');
      nav.classList.add('nav--open');
      navList.classList.add('nav-list--open');
      body.classList.add('no-scroll');
    } else {
      mobileMenuHide();
    }
  }

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    nav.classList.remove('nav--open');
    navList.classList.remove('nav-list--open');
    body.classList.remove('no-scroll');
  }

  function menuLinksShow() {
    menuLinks.forEach(function (link) {
      link.style.opacity = '1';
    });
  }

  function menuLinksHide() {
    menuLinks.forEach(function (link) {
      link.style.opacity = '0';
    });
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      menuLinksShow();
      hamburger.classList.remove('active');
      nav.classList.remove('nav--open');
      navList.classList.remove('nav-list--open');
      body.classList.remove('no-scroll');
    }
  });
})();
"use strict";

;

(function () {
  //Задаем инпут
  var input_1 = document.querySelector('.phone-first');
  var input_2 = document.querySelector('.phone-second');
  var input_3 = document.querySelector('.phone-modal'); //Функция маски инпута

  function setMask(event) {
    //Задаем в переменную нажатую клавишу
    var pressedKey; //Условие, проверяющее нажатую клавишу

    event.keyCode && pressedKey === event.keyCode; //Задаем в переменную позицию в инпуте, с которой будет доступен ввод цифр

    var numberPos = this.selectionStart; //Устанавливаем возможность ввода цифр с третьей позиции       

    if (numberPos < 3) {
      event.preventDefault();
    } //Задаем внешний вид маски инпута


    var maskType = '+7 (___) ___-__-__',
        i = 0,
        //Проверка и замена value инпута по буквенно
    replaceValue = maskType.replace(/\D/g, ''),
        prevValue = this.value.replace(/\D/g, ''),
        currentValue = maskType.replace(/[_\d]/g, function (a) {
      return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
    }); //Защита от стирания первых двух цифр (+7)            

    i = currentValue.indexOf('_');

    if (i != -1) {
      i < 5 && (i = 3);
      currentValue = currentValue.slice(0, i);
    } //Регулярное выражение для проверки value инпута        


    var reg = maskType.substr(0, this.value.length).replace(/_+/g, function (a) {
      return '\\d{1,' + a.length + '}';
    }).replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$'); //Проверка содержимого инпута на регулярное выражение, длинну и нажимаемые клавиши

    if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
      this.value = currentValue;
    } else if (event.type === 'blur' && this.value.length < 5) {
      this.value = '';
    } // Устанавливаем курсор в конец строки в инпуте, если при нажатии кнопки он стоит не в конце


    input_1.setSelectionRange(input_1.value.length, input_1.value.length);
    input_2.setSelectionRange(input_2.value.length, input_2.value.length);
    input_3.setSelectionRange(input_3.value.length, input_3.value.length);
  } //Запуск функции setMask через обработчик событий


  input_1.addEventListener('input', setMask, false);
  input_1.addEventListener('focus', setMask, false);
  input_1.addEventListener('blur', setMask, false);
  input_1.addEventListener('keydown', setMask, false);
  input_2.addEventListener('input', setMask, false);
  input_2.addEventListener('focus', setMask, false);
  input_2.addEventListener('blur', setMask, false);
  input_2.addEventListener('keydown', setMask, false);
  input_3.addEventListener('input', setMask, false);
  input_3.addEventListener('focus', setMask, false);
  input_3.addEventListener('blur', setMask, false);
  input_3.addEventListener('keydown', setMask, false);
})();
"use strict";

;

(function () {
  //Передача в переменную всех элементов html на странице
  var elements = document.documentElement,
      body = document.body,
      //Передаем в переменную body
  links = document.links; //Получаем все якорные ссылки на странице
  //Функция опредления нажатой ссылки и расчета перемещения

  function calcScroll() {
    //Перебор циклом все ссылок и определение той, на которой был сделан клик
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
        // event = event || window.event;//Кросс-браузерность
        //Определение и округление текущего расстояния от верха документа
        var scrollTop = Math.round(body.scrollTop || elements.scrollTop);

        if (this.hash !== '') {
          //Предотвращение действия браузера по дефолту при отсутвии атрибута hash у элемента
          event.preventDefault(); //Получение элемента, к которому ведет якорь нажатой ссылки

          var targetElement = document.getElementById(this.hash.substring(1)),
              //Задел в 80px, чтобы при прокрутке меню не закрывало заголовок секции
          targetElementTop = 0; //Вычисление через цикл расстояния от верха до элемента, к которому ведет нажатая ссылка

          while (targetElement.offsetParent) {
            targetElementTop += targetElement.offsetTop;
            targetElement = targetElement.offsetParent;
          } //Получение округленного значения расположения элемента


          targetElementTop = Math.round(targetElementTop);
          /* Функция запуска плавного перемещения (содержит аргументы: текущее растояние от верха
          документа, расстояние от верха документа к контентному блоку, к которому ведет нажатая 
          ссылка и сам контентный блок) */

          if (document.body.style.overflow !== 'hidden') {
            //Предотвращает прокрутку при открытом модальном окне
            smoothScroll(scrollTop, targetElementTop, this.hash);
          }
        }
      };
    }
  }

  ;
  calcScroll();
  var timeInterval = 1,
      //Задаем временной интервал в 1 миллисекунду
  prevScrollTop,
      speed; //Функция плавной прокрутки

  function smoothScroll(from, to, hash) {
    /* Если элемент (конечная точка движения) расположен ниже текущей точки экрана,
    то scroll ведется с верху вниз (положительное значение), если наоборот, то снизу
    вверх (отрицательное значение) */
    if (to > from) {
      speed = 10;
    } else {
      speed = -10;
    } //Установка интервала движения


    var move = setInterval(function () {
      //Получение и округение текущей позиции экрана
      var scrollTop = Math.round(body.scrollTop || elements.scrollTop); //Условия прекращения или продолжения движения

      if (prevScrollTop === scrollTop || to > from && scrollTop >= to || to < from && scrollTop <= to) {
        clearInterval(move); //Добавление атрибута hash в url после прокрутки (добавляется к адресной строке в браузере)

        history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
      } else {
        body.scrollTop += speed;
        elements.scrollTop += speed;
        /* Передача текущей позиции экрана в переменную, которая при последующих перемещениях
        будет играть роль места хранения последней позиции экрана */

        prevScrollTop = scrollTop;
      }
    }, timeInterval); //Передача ранее установленного интервала перемещения
  }
})();
"use strict";

;

(function () {
  // ymaps.ready(init);
  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map('yandex-map', {
      center: [56.895897, 60.639363],
      zoom: 16
    });
    myMap.behaviors.enable('scrollZoom');
    myMap.behaviors.enable('drag'); // myMap.behaviors.disable('scrollZoom');
    // myMap.behaviors.disable('drag');
    // myMap.events.add('click', () => {
    //     myMap.behaviors.enable('scrollZoom');
    //     myMap.behaviors.enable('drag');
    // });

    myPlacemark = new ymaps.Placemark([56.894897, 60.639363], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/libra@2x.png',
      iconImageSize: [70, 70]
    });
    myMap.geoObjects.add(myPlacemark);
  } // Запуск функции печати текста после появления соответствующего блока на экране через скролл


  var element = document.querySelector('#map');

  function checkDialogVisible(target) {
    // Все позиции элемента
    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      return true;
    }
  }

  ; // Снимаем обработчик события после совершения действия или выполнения условия

  var handler = function handler(event) {
    if (checkDialogVisible(element)) {
      ymaps.ready(init);
      window.removeEventListener('scroll', handler);
    }
  };

  window.addEventListener('scroll', handler); // А также запустим функцию печати текста сразу. А то вдруг, элемент изначально видно

  if (checkDialogVisible(element)) {
    console.log('Видна');
    ymaps.ready(init);
    window.removeEventListener('scroll', handler);
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();