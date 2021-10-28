const request = require("request-promise")
const cheerio = require("cheerio");

// request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (error, response, html) => {
//     if (!error && response.statusCode == 200) {

//         const $ = cheerio.load(html);

//         const datarow = $(".HeaderRow");
//         const output = datarow.find("th").text();
//         $(".DataRow").each((i, data) => {
//             const item = $(data).text();
//             const item1 = $(data).text();
//             const item2 = $(data).text();

//             console.log(item, item1, item2);
//         })
//     }

// });

// request("http://www.laughfactory.com/jokes/clean-jokes/31", (error, response, html) => {
//     if (!error && response.statusCode == 200) {

//         const $ = cheerio.load(html);

//         const datarow = $(".joke-text > p");
//         datarow.each((i, data) => {
//             const item = $(data).text();
//             console.log(item);
//         })
//     }

// });

// request("https://www.inc.com/bill-murphy-jr/366-daily-inspirational-quotes-for-2016-one-month-at-a-time.html", (error, response, html) => {
//     if (!error && response.statusCode == 200) {

//         const $ = cheerio.load(html);

//         const datarow = $(".standardText > p");
//         datarow.each((i, data) => {
//             const item = $(data).text();
//             console.log(item);
//         })
//     }

// });


request("https://www.fatherly.com/play/57-funny-jokes-kids-adults-who-like-dumb-jokes/", (error, response, html) => {
    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);

        const datarow = $("li");
        datarow.each((i, data) => {
            const item = $(data).text();

            console.log(item);
        })
    }

});
