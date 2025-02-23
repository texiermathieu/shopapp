export const validateEmail = (email) => {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const validateCardNumber = (no) => {
  const checkLuhn = function (cardNo) {
    let s = 0;
    let doubleDigit = false;
    for (var i = cardNo.length - 1; i >= 0; i--) {
      var digit = +cardNo[i];
      if (doubleDigit) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      s += digit;
      doubleDigit = !doubleDigit;
    }
    return s % 10 === 0;
  };

  return (
    (no &&
      checkLuhn(no) &&
      no.length === 16 &&
      (no[0] === 4 ||
        (no[0] === 5 && no[1] >= 1 && no[1] <= 5) ||
        no.indexOf("6011") === 0 ||
        no.indexOf("65") === 0)) ||
    (no.length === 15 && (no.indexOf("34") === 0 || no.indexOf("37") === 0)) ||
    (no.length === 13 && no[0] === 4)
  );
};

export const validateCardDate = (cardDate) => {
  let today, someday;
  const exMonth = document.getElementById("exMonth");
  const exYear = document.getElementById("exYear");
  today = new Date();
  someday = new Date(cardDate);
  someday.setFullYear(exYear, exMonth, 1);
  if (someday < today) {
    alert(
      "The expiry date is before today's date. Please select a valid expiry date",
    );
    return false;
  }
};

export const validateCardCvc = (cardCvc) => {
  return !isNaN(cardCvc) && cardCvc <= 999;
};

export const validatePostcode = (postcode) => {
  var re = new RegExp("/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/");
  return re.test(postcode);
};
