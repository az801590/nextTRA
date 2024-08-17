import { timeFormat } from '../helpers/time';

const URL = "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/";

/*
** Query the TDX by train innformations and get the train schedule of the target date.
** arguments:
**  info:
**      departure: "String",
**      arrival: "String",
**      date: "Date"
** command:
**  curl -X 'GET' \
**  'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/DailyTimetable/OD/1000/to/1040/2024-07-28?%24format=JSON' \
**  -H 'accept: application/json'
*/
async function getTrainByDate(info) {
    let reqOption = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "User-Agent": window.navigator.userAgent
        }
    };
    let URLi = URL + "DailyTimetable/OD/" + info.departure + "/to/" + info.arrival + "/" + timeFormat(info.date).split('T')[0] + "?$format=JSON";

    try {
        let response = await fetch(URLi, reqOption);
        return response.json();
    }
    catch (error) {
        if(!__PRODUCTION__)
        {
            console.error(error);
        }
    }
}

export { getTrainByDate };