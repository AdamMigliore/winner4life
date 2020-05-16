/**
 *
 * @param presentValue in dollars $
 * @param annuity in dollars $
 * @param interestRate in percentage points % (default is 2%)
 */
const computePeriod = (
  presentValue: number,
  annuity: number,
  interestRate: number = 2.0
): number => {
  const interest: number = interestRate / 100;

  const firstTerm: number = Math.pow(
    1 - (presentValue * interest) / annuity,
    -1
  );
  const secondTerm: number = 1 + interest;

  return Math.log(firstTerm) / Math.log(secondTerm);
};

/**
 * 
 * @param annuity in dollars $
 * @param interestRate in percentage points %
 * @param period in a natural integer
 */
const computeSPV = (
  annuity: number,
  interestRate: number = 2.0,
  period: number
): number => {
  const interest: number = interestRate / 100;
  const factor: number = (1 - Math.pow(1 + interest, -period)) / interest;
  return annuity * factor;
};

//https://financeformulas.net/Number-of-Periods-of-Annuity-from-Present-Value.html

export { computePeriod, computeSPV};