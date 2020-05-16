"use strict";
exports.__esModule = true;
exports.computeSPV = exports.computePeriod = void 0;
/**
 *
 * @param presentValue in dollars $
 * @param annuity in dollars $
 * @param interestRate in percentage points % (default is 2%)
 */
var computePeriod = function (presentValue, annuity, interestRate) {
    if (interestRate === void 0) { interestRate = 2.0; }
    var interest = interestRate / 100;
    var firstTerm = Math.pow(1 - (presentValue * interest) / annuity, -1);
    var secondTerm = 1 + interest;
    return Math.log(firstTerm) / Math.log(secondTerm);
};
exports.computePeriod = computePeriod;
/**
 *
 * @param annuity in dollars $
 * @param interestRate in percentage points %
 * @param period in a natural integer
 */
var computeSPV = function (annuity, interestRate, period) {
    if (interestRate === void 0) { interestRate = 2.0; }
    var interest = interestRate / 100;
    var factor = (1 - Math.pow(1 + interest, -period)) / interest;
    return annuity * factor;
};
exports.computeSPV = computeSPV;
