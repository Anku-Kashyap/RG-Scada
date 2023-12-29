import "./ZoneWise_Par.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCheckWorkingURL } from "../../Utils/useCheckWorkingURL";

function ZoneWisePratitnagar() {
  const promise_res = useCheckWorkingURL();
  const [Base_Url, setBase_Url] = useState("");
  promise_res.then((promiseResult) => {
    setBase_Url(promiseResult);
  });
  
  const ZONE_3=useAPi(Base_Url+"zone/103")
  var [date,setDate] = useState(new Date());
  
  const [allValues, setAllValues] = useState({
    tag0: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    tag6: "",
    tag7: "",
    tag8: "",
    tag9: "",
    tag10: "",
    tag11: "",
    tag12: "",
    tag13: "",
  });
  const DisplayData1 =  (props) => {
    console.log('Test')
    console.log(props.tag0);
    setAllValues({
      tag0: props.tag0,
      tag1: props.tag1,
      tag2: props.tag2,
      tag3: props.tag3,
      tag4: props.tag4,
      tag5: props.tag5,
      tag6: props.tag6,
      tag7: props.tag7,
      tag8: props.tag8,
      tag9: props.tag9,
      tag10: props.tag10,
      tag11: props.tag11,
      tag12: props.tag12,
      tag13: props.tag13,
      tag14: props.tag14,
      tag15: props.tag15,
      tag16: props.tag16,
      tag17: props.tag17,
      tag18: props.tag18,
      tag19: props.tag19

    });
    };
  // const DisplayData = () =>
  //   JsonData.map((info) => {
  //     return (
  //       <>
  //         {info.Name === "tag0" ? (allValues.tag0 = info.Value) : null}
  //         {info.Name === "tag1" ? (allValues.tag1 = info.Value) : null}
  //         {info.Name === "tag2" ? (allValues.tag2 = info.Value) : null}
  //         {info.Name === "tag3" ? (allValues.tag3 = info.Value) : null}
  //         {info.Name === "tag4" ? (allValues.tag4 = info.Value) : null}
  //         {info.Name === "tag5" ? (allValues.tag5 = info.Value) : null}
  //         {info.Name === "tag6" ? (allValues.tag6 = info.Value) : null}
  //         {info.Name === "tag7" ? (allValues.tag7 = info.Value) : null}
  //         {info.Name === "tag8" ? (allValues.tag8 = info.Value) : null}
  //         {info.Name === "tag9" ? (allValues.tag9 = info.Value) : null}
  //         {info.Name === "tag10" ? (allValues.tag10 = info.Value) : null}
  //         {info.Name === "tag11" ? (allValues.tag11 = info.Value) : null}
  //         {info.Name === "tag12" ? (allValues.tag12 = info.Value) : null}
  //         {info.Name === "tag13" ? (allValues.tag13 = info.Value) : null}
  //       </>
  //     );
  //   });

  // DisplayData();

  
  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
        console.log(date)
    }
    

});

  useEffect(() => {
    ZONE_3.getReq()
    DisplayData1(ZONE_3.APIdata);
    
  },[date]);
  const handleClick = () => {
    window.open("http://59.99.154.95:3050/Reports/browse/JAL_SANSTHAN_REPORTS");
  };

  return (
    <div className="zone-wise-area-Pratitnagar">
      <span className="data-point101">{allValues.tag0} m</span>
      <span className="data-point102">{allValues.tag1} kg/cm2</span>
      <span className="data-point103">{allValues.tag2} m3/h</span>
      <span className="data-point104">{allValues.tag3} kg/cm2</span>
      <span className="data-point105">{allValues.tag4} m</span>
      <span className="data-point106">{allValues.tag5} kg/cm2</span>
      <span className="data-point107">{allValues.tag6} m3/h</span>
      <span className="data-point108">{allValues.tag7} kg/cm2</span>
      <span className="data-point109">{allValues.tag8} m</span>
      <span className="data-point1010">{allValues.tag9} kg/cm2</span>
      <span className="data-point1011">{allValues.tag10} m3/h</span>
      <span className="data-point1012">{allValues.tag11} Kg/Cm2</span>
      <span className="data-point1013">{allValues.tag12} m</span>
      <span className="data-point1014">{allValues.tag13} kg/cm2</span>
      <span className="data-point1015">{allValues.tag14} m3/h</span>
      <span className="data-point1016">{allValues.tag15} kg/cm2</span>
      <span className="data-point1017">{allValues.tag16} m</span>
      <span className="data-point1018">{allValues.tag17} kg/cm2</span>
      <span className="data-point1019">{allValues.tag18} m3/h</span>
      <span className="data-point1020">{allValues.tag19} kg/cm2</span>

      <div className="zonewise-btn-group">
        <Link to="/second">
          <button>Instantaneous</button>
        </Link>
        <Link to="/">
          <button>Instantaneous at a glance</button>

        </Link>
        <button  onClick={handleClick}>
        Log of Pressure
        </button>
        <Link >
        <button  onClick={handleClick}>
        Logbook
        </button>
        </Link>
        <Link to="/first">
          <button>Zonewise pressure of Kharakmaaf</button>
        </Link>
        <Link to="/nathuawala">
          <button>Zonewise pressure of Nathuawla</button>
        </Link>
      </div>
      <div className="Zone_Pra-Footer">
        <p className="Zone_Pra-Footer-text">Design And Devlop By - Shetal Enterprises 18 Cross 2B Tapovan Enclave Raipur Road, Dehradun.</p>
      </div>
    </div>
  );
}

function useAPi(url) {
  const [APIdata, setData] = useState({})  

  useEffect(() => {
    getReq()
  }, [])

  
  

    const getReq=async()=>{
        const response = await axios.get(url,{
          auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      })
        setData(response.data)
        console.log('Get APIdata activated1')
        console.log(response.data)
    }

  return { APIdata,getReq}
}

export default ZoneWisePratitnagar;
