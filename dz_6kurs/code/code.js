const data = {"date":"05.04.2023","bank":"PB","baseCurrency":980,"baseCurrencyLit":"UAH","exchangeRate":[{"baseCurrency":"UAH","currency":"AUD","saleRateNB":25.4845000,"purchaseRateNB":26.4845000},{"baseCurrency":"UAH","currency":"AZN","saleRateNB":24.5414000,"purchaseRateNB":26.5414000},{"baseCurrency":"UAH","currency":"BYN","saleRateNB":15.2919000,"purchaseRateNB":12.2919000},{"baseCurrency":"UAH","currency":"CAD","saleRateNB":28.7412000,"purchaseRateNB":26.7412000},{"baseCurrency":"UAH","currency":"CHF","saleRateNB":40.872000,"purchaseRateNB":41.8872000,"saleRate":42.7300000,"purchaseRate":40.8000000},{"baseCurrency":"UAH","currency":"CNY","saleRateNB":7.3545000,"purchaseRateNB":8.3545000},{"baseCurrency":"UAH","currency":"CZK","saleRateNB":2.6802000,"purchaseRateNB":3.6802000,"saleRate":3.7425000,"purchaseRate":5.6600000},{"baseCurrency":"UAH","currency":"DKK","saleRateNB":6.3391000,"purchaseRateNB":4.3391000},{"baseCurrency":"UAH","currency":"EUR","saleRateNB":39.7665000,"purchaseRateNB":38.7665000,"saleRate":39.1000000,"purchaseRate":42.1000000},{"baseCurrency":"UAH","currency":"GBP","saleRateNB":46.8861000,"purchaseRateNB":45.8861000,"saleRate":46.8100000,"purchaseRate":47.6200000},{"baseCurrency":"UAH","currency":"GEL","saleRateNB":15.9965000,"purchaseRateNB":17.9965000},{"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.1033480,"purchaseRateNB":0.1033480},{"baseCurrency":"UAH","currency":"ILS","saleRateNB":10.1130000,"purchaseRateNB":10.1130000},{"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.2781000,"purchaseRateNB":0.2781000},{"baseCurrency":"UAH","currency":"KZT","saleRateNB":0.0787490,"purchaseRateNB":0.0787490},{"baseCurrency":"UAH","currency":"MDL","saleRateNB":1.9693000,"purchaseRateNB":1.9693000},{"baseCurrency":"UAH","currency":"NOK","saleRateNB":3.5194000,"purchaseRateNB":3.5194000},{"baseCurrency":"UAH","currency":"PLN","saleRateNB":8.4883000,"purchaseRateNB":8.4883000,"saleRate":8.7900000,"purchaseRate":8.3800000},{"baseCurrency":"UAH","currency":"SEK","saleRateNB":3.5410000,"purchaseRateNB":3.5410000},{"baseCurrency":"UAH","currency":"SGD","saleRateNB":27.5532000,"purchaseRateNB":27.5532000},{"baseCurrency":"UAH","currency":"TMT","saleRateNB":10.4482000,"purchaseRateNB":10.4482000},{"baseCurrency":"UAH","currency":"TRY","saleRateNB":1.9202000,"purchaseRateNB":1.9202000},{"baseCurrency":"UAH","currency":"UAH","saleRateNB":3.5000000,"purchaseRateNB":4.0000000},{"baseCurrency":"UAH","currency":"USD","saleRateNB":36.5686000,"purchaseRateNB":36.5686000,"saleRate":38.3500000,"purchaseRate":37.8500000},{"baseCurrency":"UAH","currency":"UZS","saleRateNB":0.0532259,"purchaseRateNB":0.0732259},{"baseCurrency":"UAH","currency":"XAU","saleRateNB":77870.4900000,"purchaseRateNB":75670.4900000}]};
console.log(data);
document.body.style.width = `700px`;
document.body.style.color = `yellow`;
document.body.style.margin = `0 auto`;
document.body.style.fontFamily = `'Arial', times new roman`;

const countryFlag = [
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -623px 0px;"></div>`, "currencyFlag":`Австралійський долар`,"current":`AUD`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: 1px -48px;"></div>`, "currencyFlag":`Азербайджанський манат`,"current":`AZN`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -95px -96px;"></div>`, "currencyFlag":`Білоруський рубель`,"current":`BYN`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -191px -96px;"></div>`, "currencyFlag":`Канадський долар`,"current":`CAD`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -431px -96px;"></div>`, "currencyFlag":`Швейцарський франк`,"current":`CHF`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -671px -96px;"></div>`, "currencyFlag":`Юань Женьміньбі`,"current":`CNY`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -287px -144px;"></div>`, "currencyFlag":`Чеська крона`,"current":`CZK`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -431px -144px;"></div>`, "currencyFlag":`Данська крона`,"current":`DKK`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -191px -192px;"></div>`, "currencyFlag":`Евро`,"current":`EUR`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -575px -192px;"></div>`, "currencyFlag":`Фунт стерлінгів`,"current":`GBP`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -671px -192px;"></div>`, "currencyFlag":`Грузинський ларі`,"current":`GEL`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: 1px -288px;"></div></td>`, "currencyFlag":`Угорський форинт`,"current":`HUF`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -191px -288px;"></div>`, "currencyFlag":`Ізраїльський шекель`,"current":`ILS`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -671px -288px;"></div>`, "currencyFlag":`Японська ієна`,"current":`JPY`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -430px -338px;"></div>`, "currencyFlag":`Казахстанський тенге`,"current":`KZT`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -335px -383px;"></div>`, "currencyFlag":`Молдовський лей`,"current":`MDL`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -143px -480px;"></div>`, "currencyFlag":`Норвезька крона`,"current":`NOK`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -719px -480px;"></div>`, "currencyFlag":`Злотий`,"current":`PLN`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -719px -528px;"></div>`, "currencyFlag":`Шведська крона`,"current":`SEK`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: 1px -578px;"></div>`, "currencyFlag":`Сінгапурський долар`,"current":`SGD`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -287px -625px;"></div>`, "currencyFlag":`Туркменський манат`,"current":`TMT`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -430px -625px;"></div>`, "currencyFlag":`Турецька ліра`,"current":`TRY`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -671px -625px;"></div>`, "currencyFlag":`Українська гривня`,"current":`UAH`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: 1px -673px;"></div>`, "currencyFlag":`Долар США`,"current":`USD`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: url(/dz_6kurs/img/flags.png); background-position: -95px -673px;"></div>`, "currencyFlag":`Узбецький сум`,"current":`UZS`},
    {"flag":`<div style="width: 48px; height: 40px; background-image: none;"></div>`, "currencyFlag":`Золото`,"current":`XAU`}
]

document.write(`<div id="bg">`);
    document.write(`<div id="" style="display:flex; margin: 5% 5%;">`); 
       document.write(`<div id="data" style="display:flex; width: 23%;flex-wrap: wrap; justify-content: space-evenly;">`); 
           document.write(`<div id="dat" style="margin:10px 10px;">Дата<br><h1 style="color:coral; margin:0;" id="num">05</h1></div>`);
           document.write(`<div id="dat" style="margin:10px 10px;">Data<br><h1 style="color:coral; margin:0;" id="num">04</h1></div>`);
           document.write(`<div id="dat" style="margin:10px 10px;">Час<br><h1 style="color:coral; margin:0;" id="num">23</h1></div>`);
           document.write(`<div id="dat" style="margin:10px 10px;">Time<br><h1 style="color:coral; margin:0;" id="num">16</h1></div>`);
       document.write(`</div>`);
       document.write(`<div id="" style="width: 70%; text-align: center;">`); 
           document.write(`<h1>КУРС ОБМІНУ ВАЛЮТ<br>
                           <h2>EXCHANGE RATES`);
       document.write(`</div>`);
    document.write(`</div>`);
    document.write(`<div id="">`);
        document.write(`<table style="width: 100%;">`); 
            document.write(`<tr>`);
                 document.write(`<td style ="padding: 10px;"></td>
                    <td style ="padding: 10px;"></td>
                    <td style ="padding: 10px;"></td>
                    <td style ="padding: 10px;"><h4 style="margin: 0;">Купівля</h4><br>&nbsp &nbsp Buy</td>
                    <td style ="padding: 10px;"><h4 style="margin: 0;">Продаж</h4><br>&nbsp &nbsp Sale</td>`)
            document.write(`</tr>`);
            for(i = 0; i < data.exchangeRate.length; i++){
                document.write(`<tr>`);
                    document.write(`<td style ="padding: 10px;">`);
                    for(j = 0; j < countryFlag.length; j++){
                        if(data.exchangeRate[i].currency === countryFlag[j].current){
                            document.write(`${countryFlag[j].flag}`);
                        }   
                    }
                    document.write(`</td>`); 
                    document.write(`<td style="padding: 10px; width: 150px;">`);
                    for(j = 0; j < countryFlag.length; j++){
                        if(data.exchangeRate[i].currency === countryFlag[j].current){
                            document.write(`${countryFlag[j].currencyFlag}`);
                        }   
                    }
                    document.write(`</td>`);
                     document.write(`<td style ="padding: 10px;">${data.exchangeRate[i].currency}</td>`);
                     document.write(`<td style ="padding: 10px;"><h1 style="color:coral; margin:0;" id="num">${data.exchangeRate[i].purchaseRateNB.toFixed(2)}</h1></td>`);
                     document.write(`<td style ="padding: 10px;"><h1 style="color:coral; margin:0;" id="num">${data.exchangeRate[i].saleRateNB.toFixed(2)}</h1></td>`);
                document.write(`</tr>`);
            }
            
        document.write(`</table>`);
    document.write(`</div>`);
document.write(`</div>`);

document.getElementById(`bg`).style.backgroundColor = `green`;
document.getElementById(`bg`).style.width = `100%`;
document.getElementById(`bg`).style.border = `5px solid burlywood`;




