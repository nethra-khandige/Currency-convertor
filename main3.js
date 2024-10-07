console.log("Main.js is working!");

const populate = async (currency, val, convertCurrency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_6zvPmYrlDyfoqGiGU1QIdDKo2mmI3vft339MlwkY&base_currency=" +
    currency;
  let response =await fetch(url)
  let rJson =await response.json()
  // uncomment below so as to not exhaust your api limit. Hardcoding the values
  // let rJson =JSON.parse(`{
  //   "meta": {
  //     "last_updated_at": "2024-09-17T23:59:59Z"
  //   },
  //   "data": {
  //     "ADA": {
  //       "code": "ADA",
  //       "value": 0.0357531657
  //     },
  //     "AED": {
  //       "code": "AED",
  //       "value": 0.0438628257
  //     },
  //     "AFN": {
  //       "code": "AFN",
  //       "value": 0.8297091909
  //     },
  //     "ALL": {
  //       "code": "ALL",
  //       "value": 1.0678297167
  //     },
  //     "AMD": {
  //       "code": "AMD",
  //       "value": 4.6454386622
  //     },
  //     "ANG": {
  //       "code": "ANG",
  //       "value": 0.0213279624
  //     },
  //     "AOA": {
  //       "code": "AOA",
  //       "value": 11.0333665879
  //     },
  //     "ARB": {
  //       "code": "ARB",
  //       "value": 0.0228744822
  //     },
  //     "ARS": {
  //       "code": "ARS",
  //       "value": 11.4748899551
  //     },
  //     "AUD": {
  //       "code": "AUD",
  //       "value": 0.017665438
  //     },
  //     "AVAX": {
  //       "code": "AVAX",
  //       "value": 0.0005023504
  //     },
  //     "AWG": {
  //       "code": "AWG",
  //       "value": 0.0213854243
  //     },
  //     "AZN": {
  //       "code": "AZN",
  //       "value": 0.0203101795
  //     },
  //     "BAM": {
  //       "code": "BAM",
  //       "value": 0.0209949946
  //     },
  //     "BBD": {
  //       "code": "BBD",
  //       "value": 0.0238943288
  //     },
  //     "BDT": {
  //       "code": "BDT",
  //       "value": 1.4323880197
  //     },
  //     "BGN": {
  //       "code": "BGN",
  //       "value": 0.0209632156
  //     },
  //     "BHD": {
  //       "code": "BHD",
  //       "value": 0.0044921338
  //     },
  //     "BIF": {
  //       "code": "BIF",
  //       "value": 34.5133909166
  //     },
  //     "BMD": {
  //       "code": "BMD",
  //       "value": 0.0119471644
  //     },
  //     "BNB": {
  //       "code": "BNB",
  //       "value": 0.0000218403
  //     },
  //     "BND": {
  //       "code": "BND",
  //       "value": 0.0154656065
  //     },
  //     "BOB": {
  //       "code": "BOB",
  //       "value": 0.0827890848
  //     },
  //     "BRL": {
  //       "code": "BRL",
  //       "value": 0.0654413202
  //     },
  //     "BSD": {
  //       "code": "BSD",
  //       "value": 0.0119471644
  //     },
  //     "BTC": {
  //       "code": "BTC",
  //       "value": 1.979e-7
  //     },
  //     "BTN": {
  //       "code": "BTN",
  //       "value": 1.0024403235
  //     },
  //     "BWP": {
  //       "code": "BWP",
  //       "value": 0.1585664993
  //     },
  //     "BYN": {
  //       "code": "BYN",
  //       "value": 0.0390710311
  //     },
  //     "BYR": {
  //       "code": "BYR",
  //       "value": 390.7101079303
  //     },
  //     "BZD": {
  //       "code": "BZD",
  //       "value": 0.0238943288
  //     },
  //     "CAD": {
  //       "code": "CAD",
  //       "value": 0.0162360787
  //     },
  //     "CDF": {
  //       "code": "CDF",
  //       "value": 33.9166497161
  //     },
  //     "CHF": {
  //       "code": "CHF",
  //       "value": 0.0101087365
  //     },
  //     "CLF": {
  //       "code": "CLF",
  //       "value": 0.0002894798
  //     },
  //     "CLP": {
  //       "code": "CLP",
  //       "value": 11.1108395749
  //     },
  //     "CNY": {
  //       "code": "CNY",
  //       "value": 0.0846793643
  //     },
  //     "COP": {
  //       "code": "COP",
  //       "value": 50.237680384
  //     },
  //     "CRC": {
  //       "code": "CRC",
  //       "value": 6.1839406864
  //     },
  //     "CUC": {
  //       "code": "CUC",
  //       "value": 0.0119471644
  //     },
  //     "CUP": {
  //       "code": "CUP",
  //       "value": 0.2867319456
  //     },
  //     "CVE": {
  //       "code": "CVE",
  //       "value": 1.1841932834
  //     },
  //     "CZK": {
  //       "code": "CZK",
  //       "value": 0.2692031023
  //     },
  //     "DAI": {
  //       "code": "DAI",
  //       "value": 0.0119404987
  //     },
  //     "DJF": {
  //       "code": "DJF",
  //       "value": 2.1232620045
  //     },
  //     "DKK": {
  //       "code": "DKK",
  //       "value": 0.0801184106
  //     },
  //     "DOP": {
  //       "code": "DOP",
  //       "value": 0.7146001743
  //     },
  //     "DOT": {
  //       "code": "DOT",
  //       "value": 0.0028718708
  //     },
  //     "DZD": {
  //       "code": "DZD",
  //       "value": 1.5872977855
  //     },
  //     "EGP": {
  //       "code": "EGP",
  //       "value": 0.5778748757
  //     },
  //     "ERN": {
  //       "code": "ERN",
  //       "value": 0.179207466
  //     },
  //     "ETB": {
  //       "code": "ETB",
  //       "value": 1.3630977987
  //     },
  //     "ETH": {
  //       "code": "ETH",
  //       "value": 0.0000050979
  //     },
  //     "EUR": {
  //       "code": "EUR",
  //       "value": 0.0107381124
  //     },
  //     "FJD": {
  //       "code": "FJD",
  //       "value": 0.0263665593
  //     },
  //     "FKP": {
  //       "code": "FKP",
  //       "value": 0.0090732509
  //     },
  //     "GBP": {
  //       "code": "GBP",
  //       "value": 0.0090717218
  //     },
  //     "GEL": {
  //       "code": "GEL",
  //       "value": 0.0323038231
  //     },
  //     "GGP": {
  //       "code": "GGP",
  //       "value": 0.0090732554
  //     },
  //     "GHS": {
  //       "code": "GHS",
  //       "value": 0.1875879488
  //     },
  //     "GIP": {
  //       "code": "GIP",
  //       "value": 0.009073251
  //     },
  //     "GMD": {
  //       "code": "GMD",
  //       "value": 0.6719836812
  //     },
  //     "GNF": {
  //       "code": "GNF",
  //       "value": 103.2767278782
  //     },
  //     "GTQ": {
  //       "code": "GTQ",
  //       "value": 0.0920921014
  //     },
  //     "GYD": {
  //       "code": "GYD",
  //       "value": 2.4953735305
  //     },
  //     "HKD": {
  //       "code": "HKD",
  //       "value": 0.0930582688
  //     },
  //     "HNL": {
  //       "code": "HNL",
  //       "value": 0.2960601015
  //     },
  //     "HRK": {
  //       "code": "HRK",
  //       "value": 0.076796985
  //     },
  //     "HTG": {
  //       "code": "HTG",
  //       "value": 1.5987734823
  //     },
  //     "HUF": {
  //       "code": "HUF",
  //       "value": 4.2348502966
  //     },
  //     "IDR": {
  //       "code": "IDR",
  //       "value": 182.8761273921
  //     },
  //     "ILS": {
  //       "code": "ILS",
  //       "value": 0.0451098709
  //     },
  //     "IMP": {
  //       "code": "IMP",
  //       "value": 0.0090732558
  //     },
  //     "INR": {
  //       "code": "INR",
  //       "value": 1
  //     },
  //     "IQD": {
  //       "code": "IQD",
  //       "value": 15.6157932123
  //     },
  //     "IRR": {
  //       "code": "IRR",
  //       "value": 501.5349562573
  //     },
  //     "ISK": {
  //       "code": "ISK",
  //       "value": 1.6309239423
  //     },
  //     "JEP": {
  //       "code": "JEP",
  //       "value": 0.0090732515
  //     },
  //     "JMD": {
  //       "code": "JMD",
  //       "value": 1.886013167
  //     },
  //     "JOD": {
  //       "code": "JOD",
  //       "value": 0.0084824867
  //     },
  //     "JPY": {
  //       "code": "JPY",
  //       "value": 1.6960410151
  //     },
  //     "KES": {
  //       "code": "KES",
  //       "value": 1.5417074173
  //     },
  //     "KGS": {
  //       "code": "KGS",
  //       "value": 1.0138436026
  //     },
  //     "KHR": {
  //       "code": "KHR",
  //       "value": 48.3473044727
  //     },
  //     "KMF": {
  //       "code": "KMF",
  //       "value": 5.2847538174
  //     },
  //     "KPW": {
  //       "code": "KPW",
  //       "value": 10.7524614148
  //     },
  //     "KRW": {
  //       "code": "KRW",
  //       "value": 15.7354484677
  //     },
  //     "KWD": {
  //       "code": "KWD",
  //       "value": 0.0036411379
  //     },
  //     "KYD": {
  //       "code": "KYD",
  //       "value": 0.0099559305
  //     },
  //     "KZT": {
  //       "code": "KZT",
  //       "value": 5.7210885031
  //     },
  //     "LAK": {
  //       "code": "LAK",
  //       "value": 263.6348955263
  //     },
  //     "LBP": {
  //       "code": "LBP",
  //       "value": 1069.036216126
  //     },
  //     "LKR": {
  //       "code": "LKR",
  //       "value": 3.6184772665
  //     },
  //     "LRD": {
  //       "code": "LRD",
  //       "value": 2.3283710535
  //     },
  //     "LSL": {
  //       "code": "LSL",
  //       "value": 0.2109886206
  //     },
  //     "LTC": {
  //       "code": "LTC",
  //       "value": 0.0001873174
  //     },
  //     "LTL": {
  //       "code": "LTL",
  //       "value": 0.0370859209
  //     },
  //     "LVL": {
  //       "code": "LVL",
  //       "value": 0.0075486557
  //     },
  //     "LYD": {
  //       "code": "LYD",
  //       "value": 0.0567793864
  //     },
  //     "MAD": {
  //       "code": "MAD",
  //       "value": 0.1163990851
  //     },
  //     "MATIC": {
  //       "code": "MATIC",
  //       "value": 0.0312267026
  //     },
  //     "MDL": {
  //       "code": "MDL",
  //       "value": 0.2071993451
  //     },
  //     "MGA": {
  //       "code": "MGA",
  //       "value": 54.2659139373
  //     },
  //     "MKD": {
  //       "code": "MKD",
  //       "value": 0.6615538085
  //     },
  //     "MMK": {
  //       "code": "MMK",
  //       "value": 25.0122464343
  //     },
  //     "MNT": {
  //       "code": "MNT",
  //       "value": 40.5975921471
  //     },
  //     "MOP": {
  //       "code": "MOP",
  //       "value": 0.0960565339
  //     },
  //     "MRO": {
  //       "code": "MRO",
  //       "value": 4.2651356363
  //     },
  //     "MRU": {
  //       "code": "MRU",
  //       "value": 0.4739136439
  //     },
  //     "MUR": {
  //       "code": "MUR",
  //       "value": 0.5477085243
  //     },
  //     "MVR": {
  //       "code": "MVR",
  //       "value": 0.1844926772
  //     },
  //     "MWK": {
  //       "code": "MWK",
  //       "value": 20.6973487896
  //     },
  //     "MXN": {
  //       "code": "MXN",
  //       "value": 0.2282195559
  //     },
  //     "MYR": {
  //       "code": "MYR",
  //       "value": 0.0509277834
  //     },
  //     "MZN": {
  //       "code": "MZN",
  //       "value": 0.7591462727
  //     },
  //     "NAD": {
  //       "code": "NAD",
  //       "value": 0.2101249733
  //     },
  //     "NGN": {
  //       "code": "NGN",
  //       "value": 19.6689705456
  //     },
  //     "NIO": {
  //       "code": "NIO",
  //       "value": 0.4397831961
  //     },
  //     "NOK": {
  //       "code": "NOK",
  //       "value": 0.1265367335
  //     },
  //     "NPR": {
  //       "code": "NPR",
  //       "value": 1.605967537
  //     },
  //     "NZD": {
  //       "code": "NZD",
  //       "value": 0.0192812923
  //     },
  //     "OMR": {
  //       "code": "OMR",
  //       "value": 0.0045869948
  //     },
  //     "OP": {
  //       "code": "OP",
  //       "value": 0.0082279149
  //     },
  //     "PAB": {
  //       "code": "PAB",
  //       "value": 0.0119347413
  //     },
  //     "PEN": {
  //       "code": "PEN",
  //       "value": 0.0450586184
  //     },
  //     "PGK": {
  //       "code": "PGK",
  //       "value": 0.0461498716
  //     },
  //     "PHP": {
  //       "code": "PHP",
  //       "value": 0.664130153
  //     },
  //     "PKR": {
  //       "code": "PKR",
  //       "value": 3.3196894169
  //     },
  //     "PLN": {
  //       "code": "PLN",
  //       "value": 0.0458742488
  //     },
  //     "PYG": {
  //       "code": "PYG",
  //       "value": 93.1009120502
  //     },
  //     "QAR": {
  //       "code": "QAR",
  //       "value": 0.0434608057
  //     },
  //     "RON": {
  //       "code": "RON",
  //       "value": 0.0534118384
  //     },
  //     "RSD": {
  //       "code": "RSD",
  //       "value": 1.2581101828
  //     },
  //     "RUB": {
  //       "code": "RUB",
  //       "value": 1.0864540752
  //     },
  //     "RWF": {
  //       "code": "RWF",
  //       "value": 15.9458236009
  //     },
  //     "SAR": {
  //       "code": "SAR",
  //       "value": 0.0447229043
  //     },
  //     "SBD": {
  //       "code": "SBD",
  //       "value": 0.0999607356
  //     },
  //     "SCR": {
  //       "code": "SCR",
  //       "value": 0.1764152
  //     },
  //     "SDG": {
  //       "code": "SDG",
  //       "value": 7.1862193872
  //     },
  //     "SEK": {
  //       "code": "SEK",
  //       "value": 0.1215645644
  //     },
  //     "SGD": {
  //       "code": "SGD",
  //       "value": 0.0154764792
  //     },
  //     "SHP": {
  //       "code": "SHP",
  //       "value": 0.0090717225
  //     },
  //     "SLL": {
  //       "code": "SLL",
  //       "value": 268.6216365204
  //     },
  //     "SOL": {
  //       "code": "SOL",
  //       "value": 0.0000907801
  //     },
  //     "SOS": {
  //       "code": "SOS",
  //       "value": 6.8352019518
  //     },
  //     "SRD": {
  //       "code": "SRD",
  //       "value": 0.3524057899
  //     },
  //     "STD": {
  //       "code": "STD",
  //       "value": 263.6599993997
  //     },
  //     "STN": {
  //       "code": "STN",
  //       "value": 0.2636601006
  //     },
  //     "SVC": {
  //       "code": "SVC",
  //       "value": 0.1045376885
  //     },
  //     "SYP": {
  //       "code": "SYP",
  //       "value": 155.3353826817
  //     },
  //     "SZL": {
  //       "code": "SZL",
  //       "value": 0.2097231889
  //     },
  //     "THB": {
  //       "code": "THB",
  //       "value": 0.398895922
  //     },
  //     "TJS": {
  //       "code": "TJS",
  //       "value": 0.1276579856
  //     },
  //     "TMT": {
  //       "code": "TMT",
  //       "value": 0.0418150754
  //     },
  //     "TND": {
  //       "code": "TND",
  //       "value": 0.0361379088
  //     },
  //     "TOP": {
  //       "code": "TOP",
  //       "value": 0.027758764
  //     },
  //     "TRY": {
  //       "code": "TRY",
  //       "value": 0.4068673107
  //     },
  //     "TTD": {
  //       "code": "TTD",
  //       "value": 0.0810450345
  //     },
  //     "TWD": {
  //       "code": "TWD",
  //       "value": 0.382046965
  //     },
  //     "TZS": {
  //       "code": "TZS",
  //       "value": 32.5027228179
  //     },
  //     "UAH": {
  //       "code": "UAH",
  //       "value": 0.4952645187
  //     },
  //     "UGX": {
  //       "code": "UGX",
  //       "value": 44.3429339136
  //     },
  //     "USD": {
  //       "code": "USD",
  //       "value": 0.0119471644
  //     },
  //     "USDC": {
  //       "code": "USDC",
  //       "value": 0.0119411351
  //     },
  //     "USDT": {
  //       "code": "USDT",
  //       "value": 0.0119395943
  //     },
  //     "UYU": {
  //       "code": "UYU",
  //       "value": 0.4895547165
  //     },
  //     "UZS": {
  //       "code": "UZS",
  //       "value": 152.3768091979
  //     },
  //     "VEF": {
  //       "code": "VEF",
  //       "value": 43875.1209497485
  //     },
  //     "VES": {
  //       "code": "VES",
  //       "value": 0.4387513453
  //     },
  //     "VND": {
  //       "code": "VND",
  //       "value": 292.7035884363
  //     },
  //     "VUV": {
  //       "code": "VUV",
  //       "value": 1.4182545178
  //     },
  //     "WST": {
  //       "code": "WST",
  //       "value": 0.0322786535
  //     },
  //     "XAF": {
  //       "code": "XAF",
  //       "value": 7.0427466406
  //     },
  //     "XAG": {
  //       "code": "XAG",
  //       "value": 0.0003886584
  //     },
  //     "XAU": {
  //       "code": "XAU",
  //       "value": 0.0000046414
  //     },
  //     "XCD": {
  //       "code": "XCD",
  //       "value": 0.0322573439
  //     },
  //     "XDR": {
  //       "code": "XDR",
  //       "value": 0.008846279
  //     },
  //     "XOF": {
  //       "code": "XOF",
  //       "value": 7.0427461762
  //     },
  //     "XPD": {
  //       "code": "XPD",
  //       "value": 0.0000106772
  //     },
  //     "XPF": {
  //       "code": "XPF",
  //       "value": 1.2802634211
  //     },
  //     "XPT": {
  //       "code": "XPT",
  //       "value": 0.0000121429
  //     },
  //     "XRP": {
  //       "code": "XRP",
  //       "value": 0.0204232314
  //     },
  //     "YER": {
  //       "code": "YER",
  //       "value": 2.9831901799
  //     },
  //     "ZAR": {
  //       "code": "ZAR",
  //       "value": 0.2101367997
  //     },
  //     "ZMK": {
  //       "code": "ZMK",
  //       "value": 107.5388162068
  //     },
  //     "ZMW": {
  //       "code": "ZMW",
  //       "value": 0.3173878314
  //     },
  //     "ZWL": {
  //       "code": "ZWL",
  //       "value": 420.6290768165
  //     }
  //   }
  // }`);

  document.querySelector(".output").style.display = "block";
  const baseCurrencyRate = rJson.data[currency]?.value;
  const targetCurrencyRate = rJson.data[convertCurrency]?.value;

  if (baseCurrencyRate && targetCurrencyRate) {
    const convertedVal = (val * targetCurrencyRate) / baseCurrencyRate;
    myStr += `<tr>
        <td>${convertCurrency}</td>
        <td>${rJson["data"][convertCurrency]["code"]}</td>
        <td>${convertedVal}</td>
        <td>${Math.round(convertedVal)}</td>
    </tr>`;
  }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const currency = document.querySelector("input[name='currency']").value.toUpperCase();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const convertedCurrency = document.querySelector("input[name='convertCurrency']").value.toUpperCase();
    populate(currency, value, convertedCurrency);
  });

