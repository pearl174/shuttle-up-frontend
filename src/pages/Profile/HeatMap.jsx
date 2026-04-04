import "./HeatMap.css";
// data might be of this sort 
// const rawData = [
//   { date: "2025-01-04T00:00:00.000Z", count: 2 },
//   { date: "2025-01-11T00:00:00.000Z", count: 1 },
//   { date: "2025-03-08T00:00:00.000Z", count: 3 },
//   { date: "2025-06-21T00:00:00.000Z", count: 2 },
//   { date: "2025-09-07T00:00:00.000Z", count: 1 },
//   { date: "2025-12-20T00:00:00.000Z", count: 3 },
// ];
// convert it to below format
const matchData = {
  "2025-01-04": 2,
  "2025-01-05": 1,
  "2025-01-11": 3,
  "2025-01-19": 1,
  "2025-02-02": 2,
  "2025-02-14": 1,
  "2025-02-15": 2,
  "2025-03-01": 1,
  "2025-03-08": 3,
  "2025-03-22": 2,
  "2025-04-05": 1,
  "2025-04-06": 2,
  "2025-04-20": 3,
  "2025-05-03": 1,
  "2025-05-17": 2,
  "2025-05-18": 1,
  "2025-06-07": 3,
  "2025-06-21": 2,
  "2025-07-04": 1,
  "2025-07-05": 3,
  "2025-08-09": 2,
  "2025-08-23": 1,
  "2025-09-06": 3,
  "2025-09-07": 2,
  "2025-10-11": 1,
  "2025-10-25": 2,
  "2025-11-01": 3,
  "2025-11-02": 1,
  "2025-12-06": 2,
  "2025-12-20": 3,
  "2025-12-21": 1,
};

const zeroPadding = (matchData) => {
    const fullYearData = {};
    const lastKey = Object.keys(matchData).at(-1);
    let currDate = new Date(lastKey);
    const endDate = new Date(lastKey);
    currDate.setFullYear(currDate.getFullYear() - 1);
    while (currDate <= endDate) {
        const key = currDate.toISOString().slice(0, 10)
        if (key in matchData) fullYearData[key] = matchData[key];
        else fullYearData[key] = 0;
        currDate.setDate(currDate.getDate() + 1);
    }
    return fullYearData;
}

const separateMonths = (fullYearData) => {
    let i = 0;
    const keys = Object.keys(fullYearData);
    const len = keys.length;
    const sepMonthData = [];
    while (i < len) {
        const monthData = {};
        let currMonth = new Date(keys.at(i)).getMonth();
        let key = keys.at(i);
        let date = new Date(key);
        while (i < len && date.getMonth() === currMonth) {
            monthData[key] = fullYearData[key];
            i++;
            key = keys.at(i);
            date = new Date(key);
        }
        sepMonthData.push(monthData);
    }
    console.log(sepMonthData);
    return sepMonthData;
}

const fullYearData = zeroPadding(matchData);
// console.log(fullYearData);
const fullMonthData = separateMonths(fullYearData);

const HeatMap = () => {
    return <>
        <div className="heatmap-container">
            {fullMonthData.map((monthObj, idx) => (
                <div key={idx} className="heatmap-month">
                    {Object.entries(monthObj).map(([date, count]) => (
                        <div key={date} className="heatmap-day">{}</div>
                    ))}
                </div>
            ))}
        </div>
    </>
}

export default HeatMap;