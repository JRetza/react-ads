"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _timedPromise = _interopRequireWildcard(require("../../timedPromise"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO [] - Add tests

/**
 * 
 * @param {Bidder[]} bidProviders 
 * @param {Number} bidTimeout 
 * @param {Function} refresh 
 * @param {Queue} q 
 * @returns {Promise}
 */
var processDisplay = function processDisplay(bidProviders, bidTimeout, q) {
  return new Promise(function (resolve) {
    var nextBids = {}; // tested

    if (q.isEmpty) return resolve();

    while (!q.isEmpty) {
      var bids = q.dequeue().data.bids;

      if (bids) {
        Object.entries(bids).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];

          if (!nextBids[key]) nextBids[key] = [];
          nextBids[key].push(val);
        });
      }
    }

    var noBidsOrProviders = [bidProviders, Object.keys(nextBids)].some(function (x) {
      return x.length === 0;
    });

    if (noBidsOrProviders) {
      return resolve();
    }

    (0, _timedPromise.default)(bidProviders.map(function (bidder) {
      return bidder._fetchDisplayBids(nextBids[bidder.name]);
    }), bidTimeout).then(function (responses) {
      responses.forEach(function (res, i) {
        if (res.status === _timedPromise.status.fulfilled) {
          bidProviders[i].onBidWon(res.data);
          bidProviders[i].handleResponse(res.data);
        }

        if (res.status === _timedPromise.status.rejected) {
          bidProviders[i].onTimeout(res.err);
        }
      });
    }).catch(function (err) {
      return console.log('error', err);
    }).finally(function () {
      resolve();
    });
  });
};

var _default = processDisplay;
exports.default = _default;