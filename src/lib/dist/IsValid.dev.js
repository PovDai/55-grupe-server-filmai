"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsValid = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IsValid =
/*#__PURE__*/
function () {
  function IsValid() {
    _classCallCheck(this, IsValid);
  }

  _createClass(IsValid, null, [{
    key: "fields",
    //Eksportuojama klasė IsValid, skirta duomenų validacijai
    value: function fields(data, requiredSchema, optionalSchema) {
      /*Statinis metodas fields, kuris priima:
      data - validuojamus duomenis (objektas)
      schema - validavimo schemą (objektas)*/
      var errors = {}; //Sukuriamas tuščias objektas errors, kuriame bus saugomos validavimo klaidos

      var requiredKeysCount = Object.keys(requiredSchema).length; //Suskaičiuojamas reikalingų laukų skaičius iš validavimo schemos

      var dataKeysCount = Object.keys(data).length; //Suskaičiuojamas gautų duomenų laukų skaičius

      if (dataKeysCount !== requiredKeysCount) {
        return [true, 'Atejusiuose duomenyse duomenu kiekis nesutampa su reikalaujamu duomenu apimtimi'];
      }
      /*Jei gautų duomenų laukų skaičius nesutampa su reikalingu, grąžinama klaida:
      true - klaidos buvimas
      Klaidos pranešimas apie nesutampantį laukų skaiči*/


      for (var key in requiredSchema) {
        //Ciklas per visus validavimo schemos raktus (laukus)
        var funcName = requiredSchema[key]; //Gaunamas validavimo funkcijos pavadinimas iš schemos

        var func = IsValid[funcName]; //Gaunama pati validavimo funkcija iš klasės metodų

        var value = data[key]; //Iš duomenų paimama reikšmė, kurią reikia validuoti

        var _func = func(value),
            _func2 = _slicedToArray(_func, 2),
            err = _func2[0],
            msg = _func2[1];
        /*Iškviečiama validavimo funkcija su reikšme, gaunamas rezultatas:
        err - ar yra klaida (boolean)
        msg - klaidos pranešimas (jei yra)*/


        if (err) {
          errors[key] = msg; //Jei validavimas nepavyko, klaida įrašoma į errors objektą su atitinkamu raktu
        }
      }

      return [Object.keys(errors).length > 0, errors];
      /*Grąžinamas validavimo rezultatas:
      Pirmas elementas - ar yra klaidų (boolean)
      Antras elementas - objektas su klaidomis (jei yra)*/
    }
    /*Tikrina, ar gautų duomenų struktūra atitinka schemą
    Kiekvienam laukui pritaiko atitinkamą validavimo funkciją
    Surinktas klaidas grąžina struktūruota forma
    Norint naudoti šią klasę, reikia turėti papildomus validavimo metodus klasėje IsValid, pvz.:
    nonEmptyString
    email
    password
    etc.*/

  }, {
    key: "username",
    value: function username(text) {
      /// sios funkcijos pavadinimai paskui eina i public js laukuose kintamajam/*
      var minSize = 3;
      var maxSize = 20;
      var allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

      if (typeof text !== 'string') {
        return [true, 'Slapyvardis turi buti tekstas'];
      }

      if (text.length < minSize) {
        return [true, "Slapyvardis turi buti ne maziau ".concat(minSize, " simboliu")];
      }

      if (text.length > maxSize) {
        return [true, "Slapyvardis turi buti ne daugiau ".concat(maxSize, " simboliu")];
      }

      if (text.includes(' ')) {
        return [true, 'Slapyvardis negali tureti tarpu'];
      }

      var foundIllegalSymbols = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var s = _step.value;

          if (!allowedSymbols.includes(s) && !foundIllegalSymbols.includes(s)) {
            foundIllegalSymbols.push(s);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (foundIllegalSymbols.length) {
        return [true, "Slapyvardyje panaudotas neleistinas simbolis: ".concat(foundIllegalSymbols.join(', '))];
      }

      return [false, ''];
    }
  }, {
    key: "password",
    value: function password(text) {
      var minSize = 12;
      var maxSize = 100;

      if (typeof text !== 'string') {
        return [true, 'Slaptazodis turi buti tekstas'];
      }

      if (text.length < minSize) {
        return [true, "Slaptazodis turi tureti ne maziau ".concat(minSize, " simboliu")];
      }

      if (text.length > maxSize) {
        return [true, "Slaptazodis turi tureti ne daugiau ".concat(maxSize, " simboliu")];
      }

      return [false, ''];
    }
  }, {
    key: "age",
    value: function age(number) {
      var min = 18;
      var max = 130;

      if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
        return [true, 'Amzius turi buti teigiamas sveikasis skaicius'];
      }

      if (number < min) {
        return [true, "Amzius turi tureti ne mazesnis nei ".concat(min, " metu")];
      }

      if (number > max) {
        return [true, "Amzius turi tureti ne didesnis nei ".concat(max, " metu")];
      }

      return [false, ''];
    }
  }, {
    key: "email",
    value: function email(text) {
      return [false, ''];
    }
  }, {
    key: "nonEmptyString",
    value: function nonEmptyString(text) {
      if (typeof text !== 'string') {
        return [true, 'Turi buti tekstas'];
      }

      if (text.length === 0) {
        return [true, 'Tekstas turi buti ne tuscias'];
      }

      return [false, ''];
    }
  }, {
    key: "tos",
    value: function tos(text) {
      if (typeof text !== 'string') {
        return [true, 'Sutikimas su taisyklemis turi buti teksto tipo.'];
      }

      if (text !== 'agree') {
        return [true, 'Sutikimas turi buti naudojant zodi "agree".'];
      }

      return [false, ''];
    }
  }]);

  return IsValid;
}();

exports.IsValid = IsValid;