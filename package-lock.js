// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"package-lock.json":[function(require,module,exports) {
module.exports = {
  "name": "APB",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@modularbp/gulp-watch": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@modularbp/gulp-watch/-/gulp-watch-1.0.5.tgz",
      "integrity": "sha512-/RvvrimNnEyN712/JuwuFV5ifanylU5V3xnqsx0U6qX7MHa2CeDm3YzyxLr5PIYrJbkabWt0uVY2ALMJ7G24Kg==",
      "requires": {
        "gulp": "*"
      }
    },
    "ansi-colors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-1.1.0.tgz",
      "integrity": "sha512-SFKX67auSNoVR38N3L+nvsPjOE0bybKTYbkf5tRvushrAPQ9V75huw0ZxBkKVeRU9kqH3d6HA4xTckbwZ4ixmA==",
      "requires": {
        "ansi-wrap": "^0.1.0"
      }
    },
    "ansi-gray": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz",
      "integrity": "sha1-KWLPVOyXksSFEKPetSRDaGHvclE=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
    },
    "ansi-wrap": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz",
      "integrity": "sha1-qCJQ3bABXponyoLoLqYDu/pF768="
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "requires": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      },
      "dependencies": {
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "append-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/append-buffer/-/append-buffer-1.0.2.tgz",
      "integrity": "sha1-2CIM9GYIFSXv6lBhTz3mUU36WPE=",
      "requires": {
        "buffer-equal": "^1.0.0"
      }
    },
    "archy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz",
      "integrity": "sha1-+cjBN1fMHde8N5rHeyxipcKGjEA="
    },
    "arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
    },
    "arr-filter": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/arr-filter/-/arr-filter-1.1.2.tgz",
      "integrity": "sha1-Q/3d0JHo7xGqTEXZzcGOLf8XEe4=",
      "requires": {
        "make-iterator": "^1.0.0"
      }
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="
    },
    "arr-map": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/arr-map/-/arr-map-2.0.2.tgz",
      "integrity": "sha1-Onc0X/wc814qkYJWAfnljy4kysQ=",
      "requires": {
        "make-iterator": "^1.0.0"
      }
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
    },
    "array-each": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/array-each/-/array-each-1.0.1.tgz",
      "integrity": "sha1-p5SvDAWrF1KEbudTofIRoFugxE8="
    },
    "array-initial": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/array-initial/-/array-initial-1.1.0.tgz",
      "integrity": "sha1-L6dLJnOTccOUe9enrcc74zSz15U=",
      "requires": {
        "array-slice": "^1.0.0",
        "is-number": "^4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ=="
        }
      }
    },
    "array-last": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/array-last/-/array-last-1.3.0.tgz",
      "integrity": "sha512-eOCut5rXlI6aCOS7Z7kCplKRKyiFQ6dHFBem4PwlwKeNFk2/XxTrhRh5T9PyaEWGy/NHTZWbY+nsZlNFJu9rYg==",
      "requires": {
        "is-number": "^4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ=="
        }
      }
    },
    "array-slice": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/array-slice/-/array-slice-1.1.0.tgz",
      "integrity": "sha512-B1qMD3RBP7O8o0H2KbrXDyB0IccejMF15+87Lvlor12ONPRHP6gTjXMNkt/d3ZuOGbAe66hFmaCfECI24Ufp6w=="
    },
    "array-sort": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-sort/-/array-sort-1.0.0.tgz",
      "integrity": "sha512-ihLeJkonmdiAsD7vpgN3CRcx2J2S0TiYW+IS/5zHBI7mKUq3ySvBdzzBfD236ubDBQFiiyG3SWCPc+msQ9KoYg==",
      "requires": {
        "default-compare": "^1.0.0",
        "get-value": "^2.0.6",
        "kind-of": "^5.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        }
      }
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="
    },
    "async-done": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/async-done/-/async-done-1.3.2.tgz",
      "integrity": "sha512-uYkTP8dw2og1tu1nmza1n1CMW0qb8gWWlwqMmLb7MhBVs4BXrFziT6HXUd+/RlRA/i4H9AkofYloUbs1fwMqlw==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.2",
        "process-nextick-args": "^2.0.0",
        "stream-exhaust": "^1.0.1"
      }
    },
    "async-each": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ=="
    },
    "async-settle": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-settle/-/async-settle-1.0.0.tgz",
      "integrity": "sha1-HQqRS7Aldb7IqPOnTlCA9yssDGs=",
      "requires": {
        "async-done": "^1.2.2"
      }
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
    },
    "bach": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/bach/-/bach-1.2.0.tgz",
      "integrity": "sha1-Szzpa/JxNPeaG0FKUcFONMO9mIA=",
      "requires": {
        "arr-filter": "^1.1.1",
        "arr-flatten": "^1.0.1",
        "arr-map": "^2.0.0",
        "array-each": "^1.0.0",
        "array-initial": "^1.0.0",
        "array-last": "^1.1.1",
        "async-done": "^1.2.2",
        "async-settle": "^1.0.0",
        "now-and-later": "^2.0.0"
      }
    },
    "balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "bezier-easing": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/bezier-easing/-/bezier-easing-2.1.0.tgz",
      "integrity": "sha1-wE3+i5JtbsrKGBPWn/F5t8ICXYY="
    },
    "binary-extensions": {
      "version": "1.13.1",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw=="
    },
    "bindall-standalone": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/bindall-standalone/-/bindall-standalone-1.0.5.tgz",
      "integrity": "sha1-90MDiPHH+amt4Px1pADnEPZpKh0="
    },
    "bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "optional": true,
      "requires": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "requires": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "buffer-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-1.0.0.tgz",
      "integrity": "sha1-WWFrSYME1Var1GaWayLu2j7KX74="
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "camelcase": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-3.0.0.tgz",
      "integrity": "sha1-MvxLn82vhF/N9+c7uXysImHwqwo="
    },
    "chokidar": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
      "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
      "requires": {
        "anymatch": "^2.0.0",
        "async-each": "^1.0.1",
        "braces": "^2.3.2",
        "fsevents": "^1.2.7",
        "glob-parent": "^3.1.0",
        "inherits": "^2.0.3",
        "is-binary-path": "^1.0.0",
        "is-glob": "^4.0.0",
        "normalize-path": "^3.0.0",
        "path-is-absolute": "^1.0.0",
        "readdirp": "^2.2.1",
        "upath": "^1.1.1"
      }
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "cliui": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-3.2.0.tgz",
      "integrity": "sha1-EgYBU3qRbSmUD5NNo7SNWFo5IT0=",
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wrap-ansi": "^2.0.0"
      }
    },
    "clone": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18="
    },
    "clone-buffer": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/clone-buffer/-/clone-buffer-1.0.0.tgz",
      "integrity": "sha1-4+JbIHrE5wGvch4staFnksrD3Fg="
    },
    "clone-stats": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/clone-stats/-/clone-stats-1.0.0.tgz",
      "integrity": "sha1-s3gt/4u1R04Yuba/D9/ngvh3doA="
    },
    "cloneable-readable": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/cloneable-readable/-/cloneable-readable-1.1.3.tgz",
      "integrity": "sha512-2EF8zTQOxYq70Y4XKtorQupqF0m49MBz2/yf5Bj+MHjvpG3Hy7sImifnqD6UA+TKYxeSV+u6qqQPawN5UvnpKQ==",
      "requires": {
        "inherits": "^2.0.1",
        "process-nextick-args": "^2.0.0",
        "readable-stream": "^2.3.5"
      }
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
    },
    "collection-map": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-map/-/collection-map-1.0.0.tgz",
      "integrity": "sha1-rqDwb40mx4DCt1SUOFVEsiVa8Yw=",
      "requires": {
        "arr-map": "^2.0.2",
        "for-own": "^1.0.0",
        "make-iterator": "^1.0.0"
      }
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg=="
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "convert-source-map": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",
      "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
    },
    "copy-props": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/copy-props/-/copy-props-2.0.5.tgz",
      "integrity": "sha512-XBlx8HSqrT0ObQwmSzM7WE5k8FxTV75h1DX1Z3n6NhQ/UYYAvInWYmG06vFt7hQZArE2fuO62aihiWIVQwh1sw==",
      "requires": {
        "each-props": "^1.3.2",
        "is-plain-object": "^5.0.0"
      },
      "dependencies": {
        "is-plain-object": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-5.0.0.tgz",
          "integrity": "sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q=="
        }
      }
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "d": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",
      "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",
      "requires": {
        "es5-ext": "^0.10.50",
        "type": "^1.0.1"
      }
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
    },
    "default-compare": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/default-compare/-/default-compare-1.0.0.tgz",
      "integrity": "sha512-QWfXlM0EkAbqOCbD/6HjdwT19j7WCkMyiRhWilc4H9/5h/RzTF9gv5LYh1+CmDV5d1rki6KAWLtQale0xt20eQ==",
      "requires": {
        "kind-of": "^5.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        }
      }
    },
    "default-resolution": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/default-resolution/-/default-resolution-2.0.0.tgz",
      "integrity": "sha1-vLgrqnKtebQmp2cy8aga1t8m1oQ="
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "detect-file": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/detect-file/-/detect-file-1.0.0.tgz",
      "integrity": "sha1-8NZtA2cqglyxtzvbP+YjEMjlUrc="
    },
    "duplexify": {
      "version": "3.7.1",
      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
      "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
      "requires": {
        "end-of-stream": "^1.0.0",
        "inherits": "^2.0.1",
        "readable-stream": "^2.0.0",
        "stream-shift": "^1.0.0"
      }
    },
    "each-props": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/each-props/-/each-props-1.3.2.tgz",
      "integrity": "sha512-vV0Hem3zAGkJAyU7JSjixeU66rwdynTAa1vofCrSA5fEln+m67Az9CcnkVD776/fsN/UjIWmBDoNRS6t6G9RfA==",
      "requires": {
        "is-plain-object": "^2.0.1",
        "object.defaults": "^1.1.0"
      }
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "requires": {
        "once": "^1.4.0"
      }
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "es5-ext": {
      "version": "0.10.53",
      "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.53.tgz",
      "integrity": "sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==",
      "requires": {
        "es6-iterator": "~2.0.3",
        "es6-symbol": "~3.1.3",
        "next-tick": "~1.0.0"
      }
    },
    "es6-iterator": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
      "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
      "requires": {
        "d": "1",
        "es5-ext": "^0.10.35",
        "es6-symbol": "^3.1.1"
      }
    },
    "es6-symbol": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",
      "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",
      "requires": {
        "d": "^1.0.1",
        "ext": "^1.1.2"
      }
    },
    "es6-weak-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/es6-weak-map/-/es6-weak-map-2.0.3.tgz",
      "integrity": "sha512-p5um32HOTO1kP+w7PRnB+5lQ43Z6muuMuIMffvDN8ZB4GcnjLBV6zGStpbASIMk4DCAvEaamhe2zhyCb/QXXsA==",
      "requires": {
        "d": "1",
        "es5-ext": "^0.10.46",
        "es6-iterator": "^2.0.3",
        "es6-symbol": "^3.1.1"
      }
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "expand-tilde": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/expand-tilde/-/expand-tilde-2.0.2.tgz",
      "integrity": "sha1-l+gBqgUt8CRU3kawK/YhZCzchQI=",
      "requires": {
        "homedir-polyfill": "^1.0.1"
      }
    },
    "ext": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/ext/-/ext-1.4.0.tgz",
      "integrity": "sha512-Key5NIsUxdqKg3vIsdw9dSuXpPCQ297y6wBjL30edxwPgt2E44WcWBZey/ZvUc6sERLTxKdyCu4gZFmUbk1Q7A==",
      "requires": {
        "type": "^2.0.0"
      },
      "dependencies": {
        "type": {
          "version": "2.5.0",
          "resolved": "https://registry.npmjs.org/type/-/type-2.5.0.tgz",
          "integrity": "sha512-180WMDQaIMm3+7hGXWf12GtdniDEy7nYcyFMKJn/eZz/6tSLXrUN9V0wKSbMjej0I1WHWbpREDEKHtqPQa9NNw=="
        }
      }
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "fancy-log": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz",
      "integrity": "sha512-k9oEhlyc0FrVh25qYuSELjr8oxsCoc4/LEZfg2iJJrfEk/tZL9bCoJE47gqAvI2m/AUjluCS4+3I0eTx8n3AEw==",
      "requires": {
        "ansi-gray": "^0.1.1",
        "color-support": "^1.1.3",
        "parse-node-version": "^1.0.0",
        "time-stamp": "^1.0.0"
      }
    },
    "fast-levenshtein": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-1.1.4.tgz",
      "integrity": "sha1-5qdUzI8V5YmHqpy9J69m/W9OWvk="
    },
    "file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "optional": true
    },
    "fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "find-up": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
      "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
      "requires": {
        "path-exists": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      }
    },
    "findup-sync": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-3.0.0.tgz",
      "integrity": "sha512-YbffarhcicEhOrm4CtrwdKBdCuz576RLdhJDsIfvNtxUuhdRet1qZcsMjqbePtAseKdAnDyM/IyXbu7PRPRLYg==",
      "requires": {
        "detect-file": "^1.0.0",
        "is-glob": "^4.0.0",
        "micromatch": "^3.0.4",
        "resolve-dir": "^1.0.1"
      }
    },
    "fined": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fined/-/fined-1.2.0.tgz",
      "integrity": "sha512-ZYDqPLGxDkDhDZBjZBb+oD1+j0rA4E0pXY50eplAAOPg2N/gUBSSk5IM1/QhPfyVo19lJ+CvXpqfvk+b2p/8Ng==",
      "requires": {
        "expand-tilde": "^2.0.2",
        "is-plain-object": "^2.0.3",
        "object.defaults": "^1.1.0",
        "object.pick": "^1.2.0",
        "parse-filepath": "^1.0.1"
      }
    },
    "flagged-respawn": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/flagged-respawn/-/flagged-respawn-1.0.1.tgz",
      "integrity": "sha512-lNaHNVymajmk0OJMBn8fVUAU1BtDeKIqKoVhk4xAALB57aALg6b4W0MfJ/cUE0g9YBXy5XhSlPIpYIJ7HaY/3Q=="
    },
    "flush-write-stream": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",
      "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",
      "requires": {
        "inherits": "^2.0.3",
        "readable-stream": "^2.3.6"
      }
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
    },
    "for-own": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/for-own/-/for-own-1.0.0.tgz",
      "integrity": "sha1-xjMy9BXO3EsE2/5wz4NklMU8tEs=",
      "requires": {
        "for-in": "^1.0.1"
      }
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fs-mkdirp-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-mkdirp-stream/-/fs-mkdirp-stream-1.0.0.tgz",
      "integrity": "sha1-C3gV/DIBxqaeFNuYzgmMFpNSWes=",
      "requires": {
        "graceful-fs": "^4.1.11",
        "through2": "^2.0.3"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fsevents": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
      "optional": true,
      "requires": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1"
      }
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "get-caller-file": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w=="
    },
    "get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
    },
    "glob": {
      "version": "7.1.7",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
      "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
      "requires": {
        "is-glob": "^3.1.0",
        "path-dirname": "^1.0.0"
      },
      "dependencies": {
        "is-glob": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
          "requires": {
            "is-extglob": "^2.1.0"
          }
        }
      }
    },
    "glob-stream": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/glob-stream/-/glob-stream-6.1.0.tgz",
      "integrity": "sha1-cEXJlBOz65SIjYOrRtC0BMx73eQ=",
      "requires": {
        "extend": "^3.0.0",
        "glob": "^7.1.1",
        "glob-parent": "^3.1.0",
        "is-negated-glob": "^1.0.0",
        "ordered-read-streams": "^1.0.0",
        "pumpify": "^1.3.5",
        "readable-stream": "^2.1.5",
        "remove-trailing-separator": "^1.0.1",
        "to-absolute-glob": "^2.0.0",
        "unique-stream": "^2.0.2"
      }
    },
    "glob-watcher": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/glob-watcher/-/glob-watcher-5.0.5.tgz",
      "integrity": "sha512-zOZgGGEHPklZNjZQaZ9f41i7F2YwE+tS5ZHrDhbBCk3stwahn5vQxnFmBJZHoYdusR6R1bLSXeGUy/BhctwKzw==",
      "requires": {
        "anymatch": "^2.0.0",
        "async-done": "^1.2.0",
        "chokidar": "^2.0.0",
        "is-negated-glob": "^1.0.0",
        "just-debounce": "^1.0.0",
        "normalize-path": "^3.0.0",
        "object.defaults": "^1.1.0"
      }
    },
    "global-modules": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-1.0.0.tgz",
      "integrity": "sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==",
      "requires": {
        "global-prefix": "^1.0.1",
        "is-windows": "^1.0.1",
        "resolve-dir": "^1.0.0"
      }
    },
    "global-prefix": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-1.0.2.tgz",
      "integrity": "sha1-2/dDxsFJklk8ZVVoy2btMsASLr4=",
      "requires": {
        "expand-tilde": "^2.0.2",
        "homedir-polyfill": "^1.0.1",
        "ini": "^1.3.4",
        "is-windows": "^1.0.1",
        "which": "^1.2.14"
      }
    },
    "glogg": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/glogg/-/glogg-1.0.2.tgz",
      "integrity": "sha512-5mwUoSuBk44Y4EshyiqcH95ZntbDdTQqA3QYSrxmzj28Ai0vXBGMH1ApSANH14j2sIRtqCEyg6PfsuP7ElOEDA==",
      "requires": {
        "sparkles": "^1.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.2.6",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
      "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ=="
    },
    "gulp": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/gulp/-/gulp-4.0.2.tgz",
      "integrity": "sha512-dvEs27SCZt2ibF29xYgmnwwCYZxdxhQ/+LFWlbAW8y7jt68L/65402Lz3+CKy0Ov4rOs+NERmDq7YlZaDqUIfA==",
      "requires": {
        "glob-watcher": "^5.0.3",
        "gulp-cli": "^2.2.0",
        "undertaker": "^1.2.1",
        "vinyl-fs": "^3.0.0"
      },
      "dependencies": {
        "gulp-cli": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/gulp-cli/-/gulp-cli-2.3.0.tgz",
          "integrity": "sha512-zzGBl5fHo0EKSXsHzjspp3y5CONegCm8ErO5Qh0UzFzk2y4tMvzLWhoDokADbarfZRL2pGpRp7yt6gfJX4ph7A==",
          "requires": {
            "ansi-colors": "^1.0.1",
            "archy": "^1.0.0",
            "array-sort": "^1.0.0",
            "color-support": "^1.1.3",
            "concat-stream": "^1.6.0",
            "copy-props": "^2.0.1",
            "fancy-log": "^1.3.2",
            "gulplog": "^1.0.0",
            "interpret": "^1.4.0",
            "isobject": "^3.0.1",
            "liftoff": "^3.1.0",
            "matchdep": "^2.0.0",
            "mute-stdout": "^1.0.0",
            "pretty-hrtime": "^1.0.0",
            "replace-homedir": "^1.0.0",
            "semver-greatest-satisfied-range": "^1.1.0",
            "v8flags": "^3.2.0",
            "yargs": "^7.1.0"
          }
        }
      }
    },
    "gulplog": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/gulplog/-/gulplog-1.0.0.tgz",
      "integrity": "sha1-4oxNRdBey77YGDY86PnFkmIp/+U=",
      "requires": {
        "glogg": "^1.0.0"
      }
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw=="
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "homedir-polyfill": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/homedir-polyfill/-/homedir-polyfill-1.0.3.tgz",
      "integrity": "sha512-eSmmWE5bZTK2Nou4g0AI3zZ9rswp7GRKoKXS1BLUkvPviOqs4YTN1djQIqrXy9k5gEtdLPy86JjRwsNM9tnDcA==",
      "requires": {
        "parse-passwd": "^1.0.0"
      }
    },
    "hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw=="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
    },
    "interpret": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",
      "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA=="
    },
    "invert-kv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY="
    },
    "is-absolute": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-absolute/-/is-absolute-1.0.0.tgz",
      "integrity": "sha512-dOWoqflvcydARa360Gvv18DZ/gRuHKi2NU/wU5X1ZFzdYfH29nkiNZsF3mp4OJ3H4yo9Mx8A/uAGNzpzPN3yBA==",
      "requires": {
        "is-relative": "^1.0.0",
        "is-windows": "^1.0.1"
      }
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
    "is-binary-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "requires": {
        "binary-extensions": "^1.0.0"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
    },
    "is-core-module": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.5.0.tgz",
      "integrity": "sha512-TXCMSDsEHMEEZ6eCA8rwRDbLu55MRGmrctljsBX/2v1d9/GzqHOxW5c5oPSgrUt2vBFXebu9rGqckXGPWOlYpg==",
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        }
      }
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
    },
    "is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-negated-glob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-negated-glob/-/is-negated-glob-1.0.0.tgz",
      "integrity": "sha1-aRC8pdqMleeEtXUbl2z1oQ/uNtI="
    },
    "is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "is-relative": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-relative/-/is-relative-1.0.0.tgz",
      "integrity": "sha512-Kw/ReK0iqwKeu0MITLFuj0jbPAmEiOsIwyIXvvbfa6QfmN9pkD1M+8pdk7Rl/dTKbH34/XBFMbgD4iMJhLQbGA==",
      "requires": {
        "is-unc-path": "^1.0.0"
      }
    },
    "is-unc-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-unc-path/-/is-unc-path-1.0.0.tgz",
      "integrity": "sha512-mrGpVd0fs7WWLfVsStvgF6iEJnbjDFZh9/emhRDcGWTduTfNHd9CHeUwH3gYIjdbwo4On6hunkztwOaAw0yllQ==",
      "requires": {
        "unc-path-regex": "^0.1.2"
      }
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI="
    },
    "is-valid-glob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-valid-glob/-/is-valid-glob-1.0.0.tgz",
      "integrity": "sha1-Kb8+/3Ab4tTTFdusw5vDn+j2Aao="
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE="
    },
    "just-debounce": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/just-debounce/-/just-debounce-1.1.0.tgz",
      "integrity": "sha512-qpcRocdkUmf+UTNBYx5w6dexX5J31AKK1OmPwH630a83DdVVUIngk55RSAiIGpQyoH0dlr872VHfPjnQnK1qDQ=="
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
    },
    "last-run": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/last-run/-/last-run-1.1.1.tgz",
      "integrity": "sha1-RblpQsF7HHnHchmCWbqUO+v4yls=",
      "requires": {
        "default-resolution": "^2.0.0",
        "es6-weak-map": "^2.0.1"
      }
    },
    "lazystream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lazystream/-/lazystream-1.0.0.tgz",
      "integrity": "sha1-9plf4PggOS9hOWvolGJAe7dxaOQ=",
      "requires": {
        "readable-stream": "^2.0.5"
      }
    },
    "lcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
      "requires": {
        "invert-kv": "^1.0.0"
      }
    },
    "lead": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lead/-/lead-1.0.0.tgz",
      "integrity": "sha1-bxT5mje+Op3XhPVJVpDlkDRm7kI=",
      "requires": {
        "flush-write-stream": "^1.0.2"
      }
    },
    "lethargy": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/lethargy/-/lethargy-1.0.9.tgz",
      "integrity": "sha512-nFM8blpCF9rqIL5mRAaTGc78W8oQixVtsD86jbEPvcI13+lDUYJf3R7DZQQL7tCiBpbGpGKMX2gwJFO9hiaOkg=="
    },
    "liftoff": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/liftoff/-/liftoff-3.1.0.tgz",
      "integrity": "sha512-DlIPlJUkCV0Ips2zf2pJP0unEoT1kwYhiiPUGF3s/jtxTCjziNLoiVVh+jqWOWeFi6mmwQ5fNxvAUyPad4Dfog==",
      "requires": {
        "extend": "^3.0.0",
        "findup-sync": "^3.0.0",
        "fined": "^1.0.1",
        "flagged-respawn": "^1.0.0",
        "is-plain-object": "^2.0.4",
        "object.map": "^1.0.0",
        "rechoir": "^0.6.2",
        "resolve": "^1.1.7"
      }
    },
    "load-json-file": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "requires": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0",
        "strip-bom": "^2.0.0"
      }
    },
    "locomotive-scroll": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/locomotive-scroll/-/locomotive-scroll-4.1.1.tgz",
      "integrity": "sha512-9ov0/NelYuRHrmpsBvAUzDvcND0Nq1iblSp4zZrzRaq78ahKBCPUVmzu0Spd5jPrtzGS1qaPsjP84l1vyjE44g==",
      "requires": {
        "@modularbp/gulp-watch": "^1.0.5",
        "bezier-easing": "^2.1.0",
        "smoothscroll-polyfill": "^0.4.4",
        "virtual-scroll": "^1.5.2"
      }
    },
    "make-iterator": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/make-iterator/-/make-iterator-1.0.1.tgz",
      "integrity": "sha512-pxiuXh0iVEq7VM7KMIhs5gxsfxCux2URptUQaXo4iZZJxBAzTPOLE2BumO5dbfVYq/hBJFBR/a1mFDmOx5AGmw==",
      "requires": {
        "kind-of": "^6.0.2"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "matchdep": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/matchdep/-/matchdep-2.0.0.tgz",
      "integrity": "sha1-xvNINKDY28OzfCfui7yyfHd1WC4=",
      "requires": {
        "findup-sync": "^2.0.0",
        "micromatch": "^3.0.4",
        "resolve": "^1.4.0",
        "stack-trace": "0.0.10"
      },
      "dependencies": {
        "findup-sync": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/findup-sync/-/findup-sync-2.0.0.tgz",
          "integrity": "sha1-kyaxSIwi0aYIhlCoaQGy2akKLLw=",
          "requires": {
            "detect-file": "^1.0.0",
            "is-glob": "^3.1.0",
            "micromatch": "^3.0.4",
            "resolve-dir": "^1.0.1"
          }
        },
        "is-glob": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
          "requires": {
            "is-extglob": "^2.1.0"
          }
        }
      }
    },
    "micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      }
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "mute-stdout": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mute-stdout/-/mute-stdout-1.0.1.tgz",
      "integrity": "sha512-kDcwXR4PS7caBpuRYYBUz9iVixUk3anO3f5OYFiIPwK/20vCzKCHyKoulbiDY1S53zD2bxUpxN/IJ+TnXjfvxg=="
    },
    "nan": {
      "version": "2.14.2",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.2.tgz",
      "integrity": "sha512-M2ufzIiINKCuDfBSAUr1vWQ+vuVcA9kqx8JJUsbQi6yf1uGRyb7HfpdfUr5qLXf3B/t8dPvcjhKMmlfnP47EzQ==",
      "optional": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      }
    },
    "next-tick": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
      "integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw="
    },
    "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
    },
    "now-and-later": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/now-and-later/-/now-and-later-2.0.1.tgz",
      "integrity": "sha512-KGvQ0cB70AQfg107Xvs/Fbu+dGmZoTRJp2TaPwcwQm3/7PteUyN2BCgk8KBMPGBUXZdVwyWS8fDCGFygBm19UQ==",
      "requires": {
        "once": "^1.3.2"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.defaults": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/object.defaults/-/object.defaults-1.1.0.tgz",
      "integrity": "sha1-On+GgzS0B96gbaFtiNXNKeQ1/s8=",
      "requires": {
        "array-each": "^1.0.1",
        "array-slice": "^1.0.0",
        "for-own": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "object.map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object.map/-/object.map-1.0.1.tgz",
      "integrity": "sha1-z4Plncj8wK1fQlDh94s7gb2AHTc=",
      "requires": {
        "for-own": "^1.0.0",
        "make-iterator": "^1.0.0"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "object.reduce": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object.reduce/-/object.reduce-1.0.1.tgz",
      "integrity": "sha1-b+NI8qx/oPlcpiEiZZkJaCW7A60=",
      "requires": {
        "for-own": "^1.0.0",
        "make-iterator": "^1.0.0"
      }
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "ordered-read-streams": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ordered-read-streams/-/ordered-read-streams-1.0.1.tgz",
      "integrity": "sha1-d8DLN8QVJdZBZtmQ/61+xqDhNj4=",
      "requires": {
        "readable-stream": "^2.0.1"
      }
    },
    "os-locale": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-1.4.0.tgz",
      "integrity": "sha1-IPnxeuKe00XoveWDsT0gCYA8FNk=",
      "requires": {
        "lcid": "^1.0.0"
      }
    },
    "parse-filepath": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/parse-filepath/-/parse-filepath-1.0.2.tgz",
      "integrity": "sha1-pjISf1Oq89FYdvWHLz/6x2PWyJE=",
      "requires": {
        "is-absolute": "^1.0.0",
        "map-cache": "^0.2.0",
        "path-root": "^0.1.1"
      }
    },
    "parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "requires": {
        "error-ex": "^1.2.0"
      }
    },
    "parse-node-version": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
      "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA=="
    },
    "parse-passwd": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/parse-passwd/-/parse-passwd-1.0.0.tgz",
      "integrity": "sha1-bVuTSkVpk7I9N/QKOC1vFmao5cY="
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
    },
    "path-dirname": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA="
    },
    "path-exists": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
      "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
      "requires": {
        "pinkie-promise": "^2.0.0"
      }
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
    "path-root": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/path-root/-/path-root-0.1.1.tgz",
      "integrity": "sha1-mkpoFMrBwM1zNgqV8yCDyOpHRbc=",
      "requires": {
        "path-root-regex": "^0.1.0"
      }
    },
    "path-root-regex": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/path-root-regex/-/path-root-regex-0.1.2.tgz",
      "integrity": "sha1-v8zcjfWxLcUsi0PsONGNcsBLqW0="
    },
    "path-type": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
      "requires": {
        "graceful-fs": "^4.1.2",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      }
    },
    "picomatch": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.0.tgz",
      "integrity": "sha512-lY1Q/PiJGC2zOv/z391WOTD+Z02bCgsFfvxoXXf6h7kv9o+WmsmzYqrAwY63sNgOxE4xEdq0WyUnXfKeBrSvYw==",
      "dev": true
    },
    "pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA="
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
    },
    "pretty-hrtime": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/pretty-hrtime/-/pretty-hrtime-1.0.3.tgz",
      "integrity": "sha1-t+PqQkNaTJsnWdmeDyAesZWALuE="
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "pump": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
      "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "pumpify": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
      "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
      "requires": {
        "duplexify": "^3.6.0",
        "inherits": "^2.0.3",
        "pump": "^2.0.0"
      }
    },
    "read-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "requires": {
        "load-json-file": "^1.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^1.0.0"
      }
    },
    "read-pkg-up": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "requires": {
        "find-up": "^1.0.0",
        "read-pkg": "^1.0.0"
      }
    },
    "readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "readdirp": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
      "requires": {
        "graceful-fs": "^4.1.11",
        "micromatch": "^3.1.10",
        "readable-stream": "^2.0.2"
      }
    },
    "rechoir": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
      "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",
      "requires": {
        "resolve": "^1.1.6"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "remove-bom-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/remove-bom-buffer/-/remove-bom-buffer-3.0.0.tgz",
      "integrity": "sha512-8v2rWhaakv18qcvNeli2mZ/TMTL2nEyAKRvzo1WtnZBl15SHyEhrCu2/xKlJyUFKHiHgfXIyuY6g2dObJJycXQ==",
      "requires": {
        "is-buffer": "^1.1.5",
        "is-utf8": "^0.2.1"
      }
    },
    "remove-bom-stream": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/remove-bom-stream/-/remove-bom-stream-1.2.0.tgz",
      "integrity": "sha1-BfGlk/FuQuH7kOv1nejlaVJflSM=",
      "requires": {
        "remove-bom-buffer": "^3.0.0",
        "safe-buffer": "^5.1.0",
        "through2": "^2.0.3"
      }
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
    },
    "repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ=="
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
    },
    "replace-ext": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/replace-ext/-/replace-ext-1.0.1.tgz",
      "integrity": "sha512-yD5BHCe7quCgBph4rMQ+0KkIRKwWCrHDOX1p1Gp6HwjPM5kVoCdKGNhN7ydqqsX6lJEnQDKZ/tFMiEdQ1dvPEw=="
    },
    "replace-homedir": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/replace-homedir/-/replace-homedir-1.0.0.tgz",
      "integrity": "sha1-6H9tUTuSjd6AgmDBK+f+xv9ueYw=",
      "requires": {
        "homedir-polyfill": "^1.0.1",
        "is-absolute": "^1.0.0",
        "remove-trailing-separator": "^1.1.0"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE="
    },
    "resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "requires": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      }
    },
    "resolve-dir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/resolve-dir/-/resolve-dir-1.0.1.tgz",
      "integrity": "sha1-eaQGRMNivoLybv/nOcm7U4IEb0M=",
      "requires": {
        "expand-tilde": "^2.0.0",
        "global-modules": "^1.0.0"
      }
    },
    "resolve-options": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/resolve-options/-/resolve-options-1.1.0.tgz",
      "integrity": "sha1-MrueOcBtZzONyTeMDW1gdFZq0TE=",
      "requires": {
        "value-or-function": "^3.0.0"
      }
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg=="
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "sass": {
      "version": "1.35.2",
      "resolved": "https://registry.npmjs.org/sass/-/sass-1.35.2.tgz",
      "integrity": "sha512-jhO5KAR+AMxCEwIH3v+4zbB2WB0z67V1X0jbapfVwQQdjHZUGUyukpnoM6+iCMfsIUC016w9OPKQ5jrNOS9uXw==",
      "dev": true,
      "requires": {
        "chokidar": ">=3.0.0 <4.0.0"
      },
      "dependencies": {
        "anymatch": {
          "version": "3.1.2",
          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
          "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
          "dev": true,
          "requires": {
            "normalize-path": "^3.0.0",
            "picomatch": "^2.0.4"
          }
        },
        "binary-extensions": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
          "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
          "dev": true
        },
        "braces": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
          "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
          "dev": true,
          "requires": {
            "fill-range": "^7.0.1"
          }
        },
        "chokidar": {
          "version": "3.5.2",
          "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.2.tgz",
          "integrity": "sha512-ekGhOnNVPgT77r4K/U3GDhu+FQ2S8TnK/s2KbIGXi0SZWuwkZ2QNyfWdZW+TVfn84DpEP7rLeCt2UI6bJ8GwbQ==",
          "dev": true,
          "requires": {
            "anymatch": "~3.1.2",
            "braces": "~3.0.2",
            "fsevents": "~2.3.2",
            "glob-parent": "~5.1.2",
            "is-binary-path": "~2.1.0",
            "is-glob": "~4.0.1",
            "normalize-path": "~3.0.0",
            "readdirp": "~3.6.0"
          }
        },
        "fill-range": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
          "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
          "dev": true,
          "requires": {
            "to-regex-range": "^5.0.1"
          }
        },
        "fsevents": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
          "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
          "dev": true,
          "optional": true
        },
        "glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "dev": true,
          "requires": {
            "is-glob": "^4.0.1"
          }
        },
        "is-binary-path": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
          "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
          "dev": true,
          "requires": {
            "binary-extensions": "^2.0.0"
          }
        },
        "is-number": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
          "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
          "dev": true
        },
        "readdirp": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
          "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
          "dev": true,
          "requires": {
            "picomatch": "^2.2.1"
          }
        },
        "to-regex-range": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
          "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
          "dev": true,
          "requires": {
            "is-number": "^7.0.0"
          }
        }
      }
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
    "semver-greatest-satisfied-range": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/semver-greatest-satisfied-range/-/semver-greatest-satisfied-range-1.1.0.tgz",
      "integrity": "sha1-E+jCZYq5aRywzXEJMkAoDTb3els=",
      "requires": {
        "sver-compat": "^1.5.0"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "smoothscroll-polyfill": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/smoothscroll-polyfill/-/smoothscroll-polyfill-0.4.4.tgz",
      "integrity": "sha512-TK5ZA9U5RqCwMpfoMq/l1mrH0JAR7y7KRvOBx0n2869aLxch+gT9GhN3yUfjiw+d/DiF1mKo14+hd62JyMmoBg=="
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
    },
    "source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw=="
    },
    "sparkles": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sparkles/-/sparkles-1.0.1.tgz",
      "integrity": "sha512-dSO0DDYUahUt/0/pD/Is3VIm5TGJjludZ0HVymmhYF6eNA53PVLhnUk0znSYbH8IYBuJdCE+1luR22jNLMaQdw=="
    },
    "spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A=="
    },
    "spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.9.tgz",
      "integrity": "sha512-Ki212dKK4ogX+xDo4CtOZBVIwhsKBEfsEEcwmJfLQzirgc2jIWdzg40Unxz/HzEUqM1WFzVlQSMF9kZZ2HboLQ=="
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "stack-trace": {
      "version": "0.0.10",
      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",
      "integrity": "sha1-VHxws0fo0ytOEI6hoqFZ5f3eGcA="
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "stream-exhaust": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/stream-exhaust/-/stream-exhaust-1.0.2.tgz",
      "integrity": "sha512-b/qaq/GlBK5xaq1yrK9/zFcyRSTNxmcZwFLGSTG0mXgZl/4Z6GgiyYOXOvY7N3eEvFRAG1bkDRz5EPGSvPYQlw=="
    },
    "stream-shift": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",
      "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ=="
    },
    "string-width": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
      "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
      "requires": {
        "code-point-at": "^1.0.0",
        "is-fullwidth-code-point": "^1.0.0",
        "strip-ansi": "^3.0.0"
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "requires": {
        "ansi-regex": "^2.0.0"
      }
    },
    "strip-bom": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "requires": {
        "is-utf8": "^0.2.0"
      }
    },
    "sver-compat": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/sver-compat/-/sver-compat-1.5.0.tgz",
      "integrity": "sha1-PPh9/rTQe0o/FIJ7wYaz/QxkXNg=",
      "requires": {
        "es6-iterator": "^2.0.1",
        "es6-symbol": "^3.1.1"
      }
    },
    "through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "requires": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "through2-filter": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/through2-filter/-/through2-filter-3.0.0.tgz",
      "integrity": "sha512-jaRjI2WxN3W1V8/FMZ9HKIBXixtiqs3SQSX4/YGIiP3gL6djW48VoZq9tDqeCWs3MT8YY5wb/zli8VW8snY1CA==",
      "requires": {
        "through2": "~2.0.0",
        "xtend": "~4.0.0"
      }
    },
    "time-stamp": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz",
      "integrity": "sha1-dkpaEa9QVhkhsTPztE5hhofg9cM="
    },
    "tiny-emitter": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/tiny-emitter/-/tiny-emitter-1.2.0.tgz",
      "integrity": "sha1-bchFBSywjr78GHRyO1jySmSMO28="
    },
    "to-absolute-glob": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/to-absolute-glob/-/to-absolute-glob-2.0.2.tgz",
      "integrity": "sha1-GGX0PZ50sIItufFFt4z/fQ98hJs=",
      "requires": {
        "is-absolute": "^1.0.0",
        "is-negated-glob": "^1.0.0"
      }
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "requires": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      }
    },
    "to-through": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-through/-/to-through-2.0.0.tgz",
      "integrity": "sha1-/JKtq6ByZHvAtn1rA2ZKoZUJOvY=",
      "requires": {
        "through2": "^2.0.3"
      }
    },
    "type": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",
      "integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg=="
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "unc-path-regex": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/unc-path-regex/-/unc-path-regex-0.1.2.tgz",
      "integrity": "sha1-5z3T17DXxe2G+6xrCufYxqadUPo="
    },
    "undertaker": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/undertaker/-/undertaker-1.3.0.tgz",
      "integrity": "sha512-/RXwi5m/Mu3H6IHQGww3GNt1PNXlbeCuclF2QYR14L/2CHPz3DFZkvB5hZ0N/QUkiXWCACML2jXViIQEQc2MLg==",
      "requires": {
        "arr-flatten": "^1.0.1",
        "arr-map": "^2.0.0",
        "bach": "^1.0.0",
        "collection-map": "^1.0.0",
        "es6-weak-map": "^2.0.1",
        "fast-levenshtein": "^1.0.0",
        "last-run": "^1.1.0",
        "object.defaults": "^1.0.0",
        "object.reduce": "^1.0.0",
        "undertaker-registry": "^1.0.0"
      }
    },
    "undertaker-registry": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/undertaker-registry/-/undertaker-registry-1.0.1.tgz",
      "integrity": "sha1-XkvaMI5KiirlhPm5pDWaSZglzFA="
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "unique-stream": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/unique-stream/-/unique-stream-2.3.1.tgz",
      "integrity": "sha512-2nY4TnBE70yoxHkDli7DMazpWiP7xMdCYqU2nBRO0UB+ZpEkGsSija7MvmvnZFUeC+mrgiUfcHSr3LmRFIg4+A==",
      "requires": {
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "through2-filter": "^3.0.0"
      }
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E="
        }
      }
    },
    "upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg=="
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI="
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ=="
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "v8flags": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/v8flags/-/v8flags-3.2.0.tgz",
      "integrity": "sha512-mH8etigqMfiGWdeXpaaqGfs6BndypxusHHcv2qSHyZkGEznCd/qAXCWWRzeowtL54147cktFOC4P5y+kl8d8Jg==",
      "requires": {
        "homedir-polyfill": "^1.0.1"
      }
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "value-or-function": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/value-or-function/-/value-or-function-3.0.0.tgz",
      "integrity": "sha1-HCQ6ULWVwb5Up1S/7OhWO5/42BM="
    },
    "vinyl": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/vinyl/-/vinyl-2.2.1.tgz",
      "integrity": "sha512-LII3bXRFBZLlezoG5FfZVcXflZgWP/4dCwKtxd5ky9+LOtM4CS3bIRQsmR1KMnMW07jpE8fqR2lcxPZ+8sJIcw==",
      "requires": {
        "clone": "^2.1.1",
        "clone-buffer": "^1.0.0",
        "clone-stats": "^1.0.0",
        "cloneable-readable": "^1.0.0",
        "remove-trailing-separator": "^1.0.1",
        "replace-ext": "^1.0.0"
      }
    },
    "vinyl-fs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/vinyl-fs/-/vinyl-fs-3.0.3.tgz",
      "integrity": "sha512-vIu34EkyNyJxmP0jscNzWBSygh7VWhqun6RmqVfXePrOwi9lhvRs//dOaGOTRUQr4tx7/zd26Tk5WeSVZitgng==",
      "requires": {
        "fs-mkdirp-stream": "^1.0.0",
        "glob-stream": "^6.1.0",
        "graceful-fs": "^4.0.0",
        "is-valid-glob": "^1.0.0",
        "lazystream": "^1.0.0",
        "lead": "^1.0.0",
        "object.assign": "^4.0.4",
        "pumpify": "^1.3.5",
        "readable-stream": "^2.3.3",
        "remove-bom-buffer": "^3.0.0",
        "remove-bom-stream": "^1.2.0",
        "resolve-options": "^1.1.0",
        "through2": "^2.0.0",
        "to-through": "^2.0.0",
        "value-or-function": "^3.0.0",
        "vinyl": "^2.0.0",
        "vinyl-sourcemap": "^1.1.0"
      }
    },
    "vinyl-sourcemap": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/vinyl-sourcemap/-/vinyl-sourcemap-1.1.0.tgz",
      "integrity": "sha1-kqgAWTo4cDqM2xHYswCtS+Y7PhY=",
      "requires": {
        "append-buffer": "^1.0.2",
        "convert-source-map": "^1.5.0",
        "graceful-fs": "^4.1.6",
        "normalize-path": "^2.1.1",
        "now-and-later": "^2.0.0",
        "remove-bom-buffer": "^3.0.0",
        "vinyl": "^2.0.0"
      },
      "dependencies": {
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "virtual-scroll": {
      "version": "1.5.2",
      "resolved": "https://registry.npmjs.org/virtual-scroll/-/virtual-scroll-1.5.2.tgz",
      "integrity": "sha512-7jDHwlKbHUho7CYU/HojE/VKFH8GV9P5fVWP2HCa7dRUOpVvwl93OBOKIIcb2mKd+vqsbVR/0zl0X70+3sUZqA==",
      "requires": {
        "bindall-standalone": "^1.0.5",
        "lethargy": "^1.0.2",
        "object-assign": "^4.0.1",
        "tiny-emitter": "^1.0.0"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-1.0.0.tgz",
      "integrity": "sha1-u6Y8qGGUiZT/MHc2CJ47lgJsKk8="
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "y18n": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.2.tgz",
      "integrity": "sha512-uGZHXkHnhF0XeeAPgnKfPv1bgKAYyVvmNL1xlKsPYZPaIHxGti2hHqvOCQv71XMsLxu1QjergkqogUnms5D3YQ=="
    },
    "yargs": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-7.1.2.tgz",
      "integrity": "sha512-ZEjj/dQYQy0Zx0lgLMLR8QuaqTihnxirir7EwUHp1Axq4e3+k8jXU5K0VLbNvedv1f4EWtBonDIZm0NUr+jCcA==",
      "requires": {
        "camelcase": "^3.0.0",
        "cliui": "^3.2.0",
        "decamelize": "^1.1.1",
        "get-caller-file": "^1.0.1",
        "os-locale": "^1.4.0",
        "read-pkg-up": "^1.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^1.0.2",
        "which-module": "^1.0.0",
        "y18n": "^3.2.1",
        "yargs-parser": "^5.0.1"
      }
    },
    "yargs-parser": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-5.0.1.tgz",
      "integrity": "sha512-wpav5XYiddjXxirPoCTUPbqM0PXvJ9hiBMvuJgInvo4/lAOTZzUprArw17q2O1P2+GHhbBr18/iQwjL5Z9BqfA==",
      "requires": {
        "camelcase": "^3.0.0",
        "object.assign": "^4.1.0"
      }
    }
  }
};
},{}],"../Users/oldma/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65053" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../Users/oldma/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","package-lock.json"], null)
//# sourceMappingURL=/package-lock.js.map