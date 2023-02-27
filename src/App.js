import moment from "moment/moment";
function App() {
  const date = moment(new Date());
  // const dateUTC = moment.utc(new Date());
  // console.log("Object", moment({ years:'2010', months:'3', date:'5', hours:'15', minutes:'10', seconds:'3', milliseconds:'123'}))
  // console.log("Unix Timestamp (milliseconds)", moment(1318781876406));
  // console.log(moment.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', true).utcOffset()) // -780  ("-13:00" in total minutes)
  // var m = moment("2011-18-10T10:20:59");
  // console.log(m.isValid());
  // console.log(m.invalidAt());
  // m.invali
  // console.log(moment().date());
  // console.log(moment().isoWeekday());
  // console.log(moment().hours());
  // console.log(moment().minute());
  // console.log(moment().second());
  // console.log(moment().millisecond());
  // console.log(moment().dayOfYear());
  // console.log(moment().weeks());
  // console.log(moment('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter());
  // console.log(moment().weeksInYear());
  // console.log(moment().get('year'));
  // console.log(moment().set('year', 2013));
  // var a = moment().subtract(1, 'day');
  // var b = moment().add(1, 'day');
  // console.log(moment.max(a, b))
  return (  
    <>
      <section className="py-5">
        <div className="container">
          <h5 className="mb-4 text-center">Year, month, and day tokens</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Format</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Year</td>
                <td>"YYYY"</td>
                <td>{date.format("YYYY")}</td>
              </tr>
              <tr>
                <td>Two digit year</td>
                <td>"YY"</td>
                <td>{date.format("YY")}</td>
              </tr>
              <tr>
                <td>Quarter of year</td>
                <td>"Q"</td>
                <td>{date.format("Q")}</td>
              </tr>
              <tr>
                <td>Month number</td>
                <td>"M or MM"</td>
                <td>{date.format("M or MM")}</td>
              </tr>
              <tr>
                <td>Month name</td>
                <td>"MMM or MMMM"</td>
                <td>{date.format("MMM or MMMM")}</td>
              </tr>
              <tr>
                <td>Day of month</td>
                <td>"D or DD"</td>
                <td>{date.format("D or DD")}</td>
              </tr>
              <tr>
                <td>Day of month with ordinal</td>
                <td>"Do"</td>
                <td>{date.format("Do")}</td>
              </tr>
              <tr>
                <td>Day of year</td>
                <td>"DDD or DDDD"</td>
                <td>{date.format("DDD or DDDD")}</td>
              </tr>
              <tr>
                <td>Unix timestamp</td>
                <td>"X"</td>
                <td>{date.format("X")}</td>
              </tr>
              <tr>
                <td>Unix ms timestamp</td>
                <td>"x"</td>
                <td>{date.format("x")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <h5 className="mb-4 text-center">
            Week year, week, and weekday tokens
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Format</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Locale 4 digit week year</td>
                <td>"gggg"</td>
                <td>{date.format("gggg")}</td>
              </tr>
              <tr>
                <td>Locale 2 digit week year</td>
                <td>"gg"</td>
                <td>{date.format("gg")}</td>
              </tr>
              <tr>
                <td>Locale Week of year</td>
                <td>"w or ww"</td>
                <td>{date.format("w or ww")}</td>
              </tr>
              <tr>
                <td>Locale Day of week</td>
                <td>"e"</td>
                <td>{date.format("e")}</td>
              </tr>
              <tr>
                <td>Day name</td>
                <td>"ddd or dddd"</td>
                <td>{date.format("ddd or dddd")}</td>
              </tr>
              <tr>
                <td>ISO 4 digit week year</td>
                <td>"GGGG"</td>
                <td>{date.format("GGGG")}</td>
              </tr>
              <tr>
                <td>ISO 4 digit week year</td>
                <td>"GG"</td>
                <td>{date.format("GG")}</td>
              </tr>
              <tr>
                <td>ISO week of year</td>
                <td>"W or WW"</td>
                <td>{date.format("W or WW")}</td>
              </tr>
              <tr>
                <td>ISO day of year</td>
                <td>"E"</td>
                <td>{date.format("E")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h5 className="mb-4 text-center">
            Locale aware formats
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Format</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Date (in local format)</td>
                <td>"L"</td>
                <td>{date.format("L")}</td>
              </tr>
              <tr>
                <td>Month name, day of month, year</td>
                <td>"LL"</td>
                <td>{date.format("LL")}</td>
              </tr>
              <tr>
                <td>Month name, day of month, year, time</td>
                <td>"LLL"</td>
                <td>{date.format("LLL")}</td>
              </tr>
              <tr>
                <td>Day of week, month name, day of month, year, time</td>
                <td>"LLLL"</td>
                <td>{date.format("LLLL")}</td>
              </tr>
              <tr>
                <td>Time (without seconds)</td>
                <td>"LT"</td>
                <td>{date.format("LT")}</td>
              </tr>
              <tr>
                <td>Time (with seconds)</td>
                <td>"LTS"</td>
                <td>{date.format("LTS")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <h5 className="mb-4 text-center">
            Hour, minute, second, millisecond, and offset tokens
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Format</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hours (24 hour time)</td>
                <td>"H or HH"</td>
                <td>{date.format("H or HH")}</td>
              </tr>
              <tr>
                <td>Hours (12 hour time)</td>
                <td>"h or hh"</td>
                <td>{date.format("h or hh")}</td>
              </tr>
              <tr>
                <td>Hours (24 hour time from 1 to 24)</td>
                <td>"k or kk"</td>
                <td>{date.format("k or kk")}</td>
              </tr>
              <tr>
                <td>Hours (12 hour time) with am or pm</td>
                <td>"h a or hh a"</td>
                <td>{date.format("h a or hh a")}</td>
              </tr>
              <tr>
                <td>Post or ante meridiem</td>
                <td>"a or A"</td>
                <td>{date.format("a or A")}</td>
              </tr>
              <tr>
                <td>Minutes</td>
                <td>"m or mm"</td>
                <td>{date.format("m or mm")}</td>
              </tr>
              <tr>
                <td>Seconds</td>
                <td>"s or ss"</td>
                <td>{date.format("s or ss")}</td>
              </tr>
              <tr>
                <td>Fractional seconds</td>
                <td>"S or SS or SSS or SSSSSSSSS"</td>
                <td>{date.format("S or SS or SSS or SSSSSSSSS")}</td>
              </tr>
              <tr>
                <td>Offset from UTC</td>
                <td>"Z or ZZ"</td>
                <td>{date.format("Z or ZZ")}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h5 className="mb-4 text-center">
            Era Year related tokens
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Format</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Years</td>
                <td>"y or yyyy"</td>
                <td>{date.format("y or yyyy")}</td>
              </tr>
              <tr>
                <td>Ordinal Years</td>
                <td>"yo"</td>
                <td>{date.format("yo")}</td>
              </tr>
              <tr>
                <td>Abbr Era name</td>
                <td>"N"</td>
                <td>{date.format("N")}</td>
              </tr>
              <tr>
                <td>Full Era name</td>
                <td>"NNNN"</td>
                <td>{date.format("NNNN")}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h5 className="mb-4 text-center">
            HTML5 formats on moment
          </h5>
          <form>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">DATETIME_LOCAL <br/>YYYY-MM-DDTHH:mm</label>
                  <input type="datetime-local" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">DATETIME_LOCAL_SECONDS <br/>YYYY-MM-DDTHH:mm:ss</label>
                  <input type="datetime-local" step="1" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">DATETIME_LOCAL_MS <br/>YYYY-MM-DDTHH:mm:ss.SSS</label>
                  <input type="datetime-local" step="0.001" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">DATE <br/>YYYY-MM-DD</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">TIME <br/>HH:mm</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">TIME_SECONDS <br/>HH:mm:ss</label>
                  <input type="time" step="1" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">TIME_MS <br/>HH:mm:ss.SSS</label>
                  <input type="time" step="0.001" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">WEEK <br/>GGGG-[W]WW</label>
                  <input type="week" className="form-control" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label className="mb-2">MONTH <br/>YYYY-MM</label>
                  <input type="month" className="form-control" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
