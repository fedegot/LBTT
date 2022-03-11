// We need you to write a piece of code which given the price of a house will calculate the
// LBBT due to be paid. A key part of any technical project is gaining understanding in
// unfamiliar business domains, for this reason we do not include how to calculate LBTT as part
// of this specification. LBTT can be complex to calculate as it varies according to the
// circumstances of the buyer so for simplicity you may assume:

//         - The buyer of the house currently owns a property and lives in it as their main
//          residence
//         - The buyer does not conduct any kind of business activity from their house i.e.
//          it is purely for personal use
//         - The buyer does not own any other properties
//         - At the end of the purchase the buyer will still only own one house i.e. they
//          intent to sell their current home at the same date they buy the new one

// LBTT rate

// Up to £145,000         0%

// £145,001 to £250,000   2%

// £250,001 to £325,000   5%

// £325,001 to £750,000   10%

// Over £750,000          12%

// @@@@@@@@@@@@@@@@@@@@@@@@@@ NOTES @@@@@@@@@@@@@@@@@@@@@@@@@@

function calculate(price) {
  if (price <= 145000) {
    return price;
  }
}

calculate(142000);

module.exports = calculate;
