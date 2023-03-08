import logo from './logo.jpg';
import "./App.css";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Select } from "semantic-ui-react";
import {  Checkbox, Form } from 'semantic-ui-react';
import { Header, Image } from 'semantic-ui-react';
import { Divider, Grid,  Segment } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react';

function App() {
  //store initial values if needed
  const initialpredictedSubs = Number(localStorage.getItem("predSub"));
  const initialAttendance = Number(localStorage.getItem("attendance"));
  const initialmarketShare = Number(localStorage.getItem("marketShare"));
  const initialcoverageArea = Number(localStorage.getItem("coverageArea"));
  const initialconnectedUSers = Number(localStorage.getItem("connectedUsers"));
  const initialRRCconnectedUsers = Number(localStorage.getItem("rrcUsers"));
  const initialsectorOverlap = Number(localStorage.getItem("sectorOverlap"));
  const initialgrowthFactor = Number(localStorage.getItem("growthFactor"));
  const initialLTERRCUsers = Number(localStorage.getItem("lteUsers"));
  const initial5GRRCUsers = Number(localStorage.getItem("fiveGusers"));
  const initialLTEUESplit = Number(localStorage.getItem("LTEsplit"));
  const initial5GUESplit = Number(localStorage.getItem("fiveGsplit"));
  const initialconnectedUserLimit = Number(
    localStorage.getItem("connectedUserLimit")
  );
  const initialactiveUsers = Number(localStorage.getItem("activeUsers"));
  const initialsectorsRRC = Number(localStorage.getItem("sectorsRRC"));
  const initialsectorsRRC5G = Number(localStorage.getItem("sectorsRRC5G"));
  const initialtotalActiveUsers = Number(
    localStorage.getItem("totalActiveUsers")
  );
  const initialtotal5GActiveUsers = Number(
    localStorage.getItem("total5GActiveUsers")
  );
  const initialtotalLTEActiveUsers = Number(
    localStorage.getItem("totalLTEActiveUsers")
  );
  const initialLTEthroughput = Number(localStorage.getItem("LTEthroughput"));
  const initialfiveGthroughput = Number(
    localStorage.getItem("fiveGthroughput")
  );
  const initialLTEcapacity = Number(localStorage.getItem("LTEcapacity"));
  const initialfiveGcapacity = Number(localStorage.getItem("fiveGcapacity"));
  const initialLTEB2 = Number(localStorage.getItem("LTEB2"));
  const initialLTESEB2 = Number(localStorage.getItem("LTESEB2"));
  const initialLTEB4 = Number(localStorage.getItem("LTEB4"));
  const initialLTESEB4 = Number(localStorage.getItem("LTESEB4"));
  const initialLTEB7 = Number(localStorage.getItem("LTEB7"));
  const initialLTESEB7 = Number(localStorage.getItem("LTESEB7"));
  const initialLTEB29 = Number(localStorage.getItem("LTEB29"));
  const initialLTESEB29 = Number(localStorage.getItem("LTESEB29"));
  const initialLTETotalCapacity = Number(localStorage.getItem("LTEtotalCapacity"));
  const initialLTEMaxTraffic = Number(localStorage.getItem("LTEMaxTraffic"));
  const initialLTECapSectors = Number(localStorage.getItem("LTECapSectors"));
  const initialfiveGN66 = Number(localStorage.getItem("fiveGN66"));
  const initialfiveGSEN66 = Number(localStorage.getItem("fiveGSEN66"));
  const initialfiveGN78 = Number(localStorage.getItem("fiveGN78"));
  const initialfiveGSEN78 = Number(localStorage.getItem("fiveGSEN78"));
  const initialfiveGTotalCapacity = Number(
    localStorage.getItem("fiveGtotalCapacity")
  );
  const initialfiveGMaxTraffic = Number(
    localStorage.getItem("fiveGMaxTraffic")
  );
  const initialfiveGCapSectors = Number(
    localStorage.getItem("fiveGCapSectors")
  );
  const initialLTESectorsInput = Number(
    localStorage.getItem("LTESectorsInput")
  );
  const initialfiveGSectorsInput = Number(
    localStorage.getItem("fiveGSectorsInput")
  );
  const initialcapn78 = Number(localStorage.getItem("capn78"));
  const initialfiveGfinalthrpt = Number(
    localStorage.getItem("fiveGfinalthrpt")
  );
  const initialltefinalthrpt = Number(localStorage.getItem("ltefinalthrpt"));

  const [predSub, setpredSub] = useState(initialpredictedSubs);
  const [attendance, setattendance] = useState(initialAttendance);
  const [marketShare, setmarketShare] = useState(initialmarketShare);
  const [coverageArea, setcoverageArea] = useState(initialcoverageArea);
  const [connectedUsers, setconnectedUsers] = useState(initialconnectedUSers);
  const [rrcUsers, setrrcUsers] = useState(initialRRCconnectedUsers);
  const [sectorOverlap, setsectorOverlap] = useState(initialsectorOverlap);
  const [growthFactor, setgrowthFactor] = useState(initialgrowthFactor);
  const [lteUsers, setlteusers] = useState(initialLTERRCUsers);
  const [fiveGusers, setfiveGusers] = useState(initial5GRRCUsers);
  const [LTEsplit, setLTEsplit] = useState(initialLTEUESplit);
  const [fiveGsplit, setfiveGsplit] = useState(initial5GUESplit);
  const [connectedUserLimit, setconnectedUserLimit] = useState(initialconnectedUserLimit);
  const [activeUsers, setactiveUsers] = useState(initialactiveUsers);
  const [totalLTEActiveUsers, settotalLTEActiveUsers] = useState(initialtotalLTEActiveUsers);
  const [total5GActiveUsers, settotal5GActiveUsers] = useState(initialtotal5GActiveUsers);
  const [sectorsRRC, setsectorsRRC] = useState(initialsectorsRRC);
  const [sectorsRRC5G, setsectorsRRC5g] = useState(initialsectorsRRC5G);
  const [totalActiveUsers, settotalActiveUsers] = useState(initialtotalActiveUsers);
  const [LTEthroughput, setLTEthroughput] = useState(initialLTEthroughput);
  const [fiveGthroughput, setfiveGthroughput] = useState(initialfiveGthroughput);
  const [LTEcapacity, setLTEcapacity] = useState(initialLTEcapacity);
  const [fiveGcapacity, setfiveGcapacity] = useState(initialfiveGcapacity);
  const [LTEB2, setLTEB2] = useState(initialLTEB2);
  const [LTESEB2, setLTESEB2] = useState(initialLTESEB2);
  const [LTEB4, setLTEB4] = useState(initialLTEB4);
  const [LTESEB4, setLTESEB4] = useState(initialLTESEB4);
  const [LTEB7, setLTEB7] = useState(initialLTEB7);
  const [LTESEB7, setLTESEB7] = useState(initialLTESEB7);
  const [LTEB29, setLTEB29] = useState(initialLTEB29);
  const [LTESEB29, setLTESEB29] = useState(initialLTESEB29);
  const [LTEtotalCapacity, setLTEtotalCapacity] = useState(initialLTETotalCapacity);
  const [LTEMaxTraffic, setLTEMaxTraffic] = useState(initialLTEMaxTraffic);
  const [LTECapSectors, setLTECapSectors] = useState(initialLTECapSectors);
  const [fiveGN66, setfiveGN66] = useState(initialfiveGN66);
  const [fiveGSEN66, setfiveGSEN66] = useState(initialfiveGSEN66);
  const [fiveGN78, setfiveGN78] = useState(initialfiveGN78);
  const [fiveGSEN78, setfiveGSEN78] = useState(initialfiveGSEN78);
  const [fiveGtotalCapacity, setfiveGtotalCapacity] = useState(initialfiveGTotalCapacity);
  const [capn78, setcapn78] = useState(initialcapn78);
  const [fiveGMaxTraffic, setfiveGMaxTraffic] = useState(initialfiveGMaxTraffic);
  const [fiveGCapSectors, setfiveGCapSectors] = useState(initialfiveGCapSectors);
  const [LTESectorsInput, setLTESectorsInput] = useState(initialLTESectorsInput);
  const [fiveGSectorsInput, setfiveGSectorsInput] = useState(initialfiveGSectorsInput);
  const [ltefinalthrpt, setltefinalthrpt] = useState(initialltefinalthrpt);
  const [fiveGfinalthrpt, setfiveGfinalthrpt] = useState(initialfiveGfinalthrpt);

  //Vendor Selections
 // const [samsung,setsamsung]= useState('900')

  //save values on reload
  useEffect(() => {
    localStorage.setItem("predSub", predSub);
    localStorage.setItem("attendance", attendance);
    localStorage.setItem("marketShare", marketShare);
    localStorage.setItem("coverageArea", coverageArea);
    localStorage.setItem("connectedUsers", connectedUsers);
    localStorage.setItem("rrcUsers", rrcUsers);
    localStorage.setItem("sectorOverlap", sectorOverlap);
    localStorage.setItem("growthFactor", growthFactor);
    localStorage.setItem("lteUsers", lteUsers);
    localStorage.setItem("fiveGusers", fiveGusers);
    localStorage.setItem("LTEsplit", LTEsplit);
    localStorage.setItem("fiveGsplit", fiveGsplit);
    localStorage.setItem("connectedUserLimit", connectedUserLimit);
    localStorage.setItem("activeUsers", activeUsers);
    localStorage.setItem("sectorsRRC", sectorsRRC);
    localStorage.setItem("sectorsRRC5G", sectorsRRC5G);
    localStorage.setItem("totalActiveUsers", totalActiveUsers);
    localStorage.setItem("totalLTEActiveUsers", totalLTEActiveUsers);
    localStorage.setItem("total5GActiveUsers", total5GActiveUsers);
    localStorage.setItem("LTEthroughput", LTEthroughput);
    localStorage.setItem("fiveGthroughput", fiveGthroughput);
    localStorage.setItem("LTEcapacity", LTEcapacity);
    localStorage.setItem("fiveGcapacity", fiveGcapacity);
    localStorage.setItem("LTEB2", LTEB2);
    localStorage.setItem("LTESEB2", LTESEB2);
    localStorage.setItem("LTEB4", LTEB4);
    localStorage.setItem("LTESEB4", LTESEB4);
    localStorage.setItem("LTEB7", LTEB7);
    localStorage.setItem("LTESEB7", LTESEB7);
    localStorage.setItem("LTEB29", LTEB29);
    localStorage.setItem("LTESEB29", LTESEB29);
    localStorage.setItem("LTEtotalCapacity", LTEtotalCapacity);
    localStorage.setItem("LTEMaxTraffic", LTEMaxTraffic);
    localStorage.setItem("LTECapSectors", LTECapSectors);
    localStorage.setItem("fiveGN66", fiveGN66);
    localStorage.setItem("fiveGSEN66", fiveGSEN66);
    localStorage.setItem("fiveGN78", fiveGN78);
    localStorage.setItem("fiveGSEN78", fiveGSEN78);
    localStorage.setItem("fiveGtotalCapacity", fiveGtotalCapacity);
    localStorage.setItem("fiveGMaxTraffic", fiveGMaxTraffic);
    localStorage.setItem("fiveGCapSectors", fiveGCapSectors);
    localStorage.setItem("LTESectorsInput", LTESectorsInput);
    localStorage.setItem("fiveGSectorsInput", fiveGSectorsInput);
    localStorage.setItem("capn78", capn78);
    localStorage.setItem("fiveGfinalthrpt", fiveGfinalthrpt);
    localStorage.setItem("ltefinalthrpt", ltefinalthrpt);

    //total predicted subscribers = attendance*market share %* geographical coverage area %
    let updatedpredictedSubs = Math.round(
      attendance * (marketShare / 100) * (coverageArea / 100)
    );
    setpredSub(updatedpredictedSubs);

    //rrc users = total predicted subscribers * rrc users %
    //sector overlap users = rrc users * sector overlap + rrc users
    //updated connected users = sector overlap users * growth factor + sector overlap users
    let OneconnectedUsers = updatedpredictedSubs * (rrcUsers / 100);
    let TwoconnectedUsers =
      OneconnectedUsers * (growthFactor / 100) + OneconnectedUsers;
    let UpdatedconnectedUSers = Math.round(
      TwoconnectedUsers * (sectorOverlap / 100) + TwoconnectedUsers
    );
    setconnectedUsers(UpdatedconnectedUSers);

    //LTE UE Split = connected users * lte ue split
    let updatedLTESplit = Math.round(UpdatedconnectedUSers * (LTEsplit / 100));
    setlteusers(updatedLTESplit);

    // 5G UE Split = connected users * 5G ue split
    let updated5GSplit = Math.round(UpdatedconnectedUSers * (fiveGsplit / 100));
    setfiveGusers(updated5GSplit);

    //Calculate RRC Sectors
    let RRCsectors = Math.ceil((lteUsers + fiveGusers) / connectedUserLimit);
    setsectorsRRC(RRCsectors);

    //Calculate 5G RRC Sectors
    let rrc5gsectors = Math.ceil(fiveGusers / connectedUserLimit);
    setsectorsRRC5g(rrc5gsectors);

    // LTE Active Users
    let lteactiveusers1 = Math.round(
      (updatedLTESplit / RRCsectors) * (activeUsers / 100)
    );
    settotalLTEActiveUsers(lteactiveusers1);
    // 5G Active Users
    let fivegactiveusers1 = Math.round(
      (updated5GSplit / RRCsectors) * (activeUsers / 100)
    );
    settotal5GActiveUsers(fivegactiveusers1);

    //Calculate Total Active Users/Sector
    let totaluserspersector = Math.round(
      (updatedLTESplit / RRCsectors) + (updated5GSplit / RRCsectors)
    );
    let activeuserspersector = Math.round(
      (updatedLTESplit / RRCsectors) * (activeUsers / 100) +
        (updated5GSplit / RRCsectors) * (activeUsers / 100)
    );
    settotalActiveUsers(activeuserspersector);

    //Calculate LTE Capacity
    let lteactiveusers = Math.round(
      (updatedLTESplit /RRCsectors) * (activeUsers / 100)
    );
    let ltecap = (lteactiveusers * LTEthroughput);
    setLTEcapacity(ltecap);

    //Calculate 5G Capacity
    let fiveGactiveusers = Math.round(
      (updated5GSplit / RRCsectors) * (activeUsers / 100)
    );
    let fivegcap = (fiveGactiveusers * fiveGthroughput);
    setfiveGcapacity(fivegcap);

    //LTE Total Capacity
    let totalcapacitylte = Math.round(
      (LTEB2 * LTESEB2) + (LTEB4 * LTESEB4) + (LTEB7 * LTESEB7) + (LTEB29 * LTESEB29)
    );
    setLTEtotalCapacity(totalcapacitylte);

    //LTE Max Traffic
    let maxtrafficlte = Math.round((totalcapacitylte * 1800) / (8 * 1000), 2);
    setLTEMaxTraffic(maxtrafficlte);

    //Recommended Sectors - LTE Capacity
    let recsectorslte = Math.ceil((RRCsectors*ltecap) /totalcapacitylte);
    setLTECapSectors(recsectorslte);

    //N78 Total Capacity
    //let capacityN78 = Math.round((fiveGN78*fiveGSEN78));
    //setfiveGtotalCapacity(capacityN78);

    //5G Max Traffic
    let maxtraffic5g = Math.round(
      (fiveGN78 * fiveGSEN78 * 1800) / (8 * 1000),2
    );
    setfiveGMaxTraffic(maxtraffic5g);

    //N78 - Recommended Sectors - 5G Capacity
    let n78capacity = (fiveGN78*fiveGSEN78);
    let x = (fivegcap*RRCsectors);
    let recsectorsN78 = Math.ceil((x)/(n78capacity));
    setfiveGCapSectors(recsectorsN78);

    //LTE and 5G Final Throughput Calculation
    let rrcsectorslte = Math.round(updatedLTESplit / LTESectorsInput);
    let rrcsectors5g = Math.round(updated5GSplit/LTESectorsInput);
    let rrcactivelte = Math.round(rrcsectorslte * (activeUsers / 100));
    let rrcactive5g = Math.round(rrcsectors5g * (activeUsers/100));

    let ltefinalthrpt1 = (totalcapacitylte / rrcactivelte);
    ltefinalthrpt1 = ltefinalthrpt1.toFixed(2);
    setltefinalthrpt(ltefinalthrpt1);

    let capn66 = (fiveGN66 * fiveGSEN66);
    let capn78final = (fiveGN78 * fiveGSEN78);
    setcapn78(capn78final);
    let fivegfinalthrpt1 = ((capn66 + (capn78final * recsectorsN78) / LTESectorsInput)/rrcactive5g);
    fivegfinalthrpt1 = fivegfinalthrpt1.toFixed(2);
    setfiveGfinalthrpt(fivegfinalthrpt1);

    //let ltecapnew = (rrcactivelte*LTEthroughput);
    //let fivegcapnew = (rrcactive5g*fiveGthroughput);
  }, [
    attendance,
    marketShare,
    coverageArea,
    rrcUsers,
    sectorOverlap,
    growthFactor,
    LTEsplit,
    fiveGsplit,
    connectedUserLimit,
    activeUsers,
    sectorsRRC,
    totalActiveUsers,
    LTEthroughput,
    fiveGthroughput,
    LTEB2,
    LTESEB2,
    LTEB4,
    LTESEB4,
    LTEB7,
    LTESEB7,
    LTEB29,
    LTESEB29,
    fiveGN66,
    fiveGSEN66,
    fiveGSEN66,
    fiveGSEN78,
    fiveGcapacity,
    capn78,
    fiveGMaxTraffic,
    fiveGCapSectors,
    LTECapSectors,
    LTESectorsInput,
    fiveGSectorsInput,
  ]);

  const vendorOptions = [
    { key: "sg", value: "sg", text: "Samsung" },
    { key: "na", value: "na", text: "Nokia" },
    { key: "hi", value: "hi", text: "Huawei" },
  ];

  return (
    <div className="App">

      <div id='top'>
        <Header size='huge'>  COW Dimensioning Calculator </Header>
        
        <div class="ui divider"></div>
        </div>

      <form className="COW-calc-form">
        <div class="row">
          <div id='top-row'>
          <div class="column">
            <h2>
              Planning Parameters</h2>
            <label>
              {" "}
              Attendance
              <input
                type="number"
                value={attendance}
                onChange={(e) => setattendance(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Market Share (%)
              <input
                placeholder="%"
                type="number"
                value={marketShare}
                onChange={(e) => setmarketShare(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              LTE Geographical Coverage Area (%)
              <input
                placeholder="%"
                type="number"
                value={coverageArea}
                onChange={(e) => setcoverageArea(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Total Predicted Subscribers
              <input type="text" value={predSub} />
            </label>

            <br />

            <br />
            <label>
              {" "}
              RRC Connected Users (%)
              <input
                placeholder="%"
                type="number"
                value={rrcUsers}
                onChange={(e) => setrrcUsers(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Sector Overlap (%)
              <input
                placeholder="%"
                type="number"
                value={sectorOverlap}
                onChange={(e) => setsectorOverlap(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Growth Factor (%)
              <input
                placeholder="%"
                type="number"
                value={growthFactor}
                onChange={(e) => setgrowthFactor(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Total Connected Users
              <input type="text" value={connectedUsers} />
            </label>

            <div>
              <br />
              <label>
                {" "}
                LTE UE Split (%)
                <input
                  placeholder="%"
                  type="number"
                  value={LTEsplit}
                  onChange={(e) => setLTEsplit(parseInt(e.target.value))}
                />
              </label>
              <label>
                {" "}
                5G UE Split (%)
                <input
                  placeholder="%"
                  type="number"
                  value={fiveGsplit}
                  onChange={(e) => setfiveGsplit(parseInt(e.target.value))}
                />
              </label>
            </div>
            <br />

            <label>
              {" "}
              LTE Users
              <input type="text" value={lteUsers} />
            </label>
            <label>
              {" "}
              5G Users
              <input type="text" value={fiveGusers} />
            </label>

            <br />
          </div>

          <div class="column">
            <h2> RRC Connected User Vendor Calculations</h2>

            <div>
              <br />
              <label> Select a Vendor</label>
              <Select placeholder="Vendor" options={vendorOptions} />
          
            </div>
            <br/>
            <label>
              {" "}
              Connected User Limit
              <input
                type="number"
                value={connectedUserLimit}
                onChange={(e) =>
                  setconnectedUserLimit(parseInt(e.target.value))
                }
              />
            </label>

            <label>
              {" "}
              Active Users (%)
              <input
                placeholder="%"
                type="number"
                value={activeUsers}
                onChange={(e) => setactiveUsers(parseInt(e.target.value))}
              />
            </label>
            <br />
            <div>
              <label>
                {" "}
                LTE Active Users
                <input type="text" value={totalLTEActiveUsers} />
              </label>
              <label>
                {" "}
                5G Active Users
                <input type="text" value={total5GActiveUsers} />
              </label>
            </div>
            <div>
              <label>
                {" "}
                Total Sectors - RRC Users
                <input type="text" value={sectorsRRC} />
              </label>
              <label>
                {" "}
                Total Active Users
                <input type="text" value={totalActiveUsers} />
              </label>
            </div>
          </div>

          <div class="column">
            <h2>Usage Calculations</h2>
            <br/>
            <div id='message'>
            <Message compact content='Update desired LTE and 5G Throughput Values'/>
              </div>
              <br/>
            <label>
              {" "}
              LTE (Mbps)
              <input
                placeholder="Mbps"
                type="number"
                value={LTEthroughput}
                onChange={(e) => setLTEthroughput(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              5G (Mbps)
              <input
                placeholder="Mbps"
                type="number"
                value={fiveGthroughput}
                onChange={(e) => setfiveGthroughput(parseInt(e.target.value))}
              />
            </label>
            <br />

            <label>
              {" "}
              LTE Capacity
              <input type="text" value={LTEcapacity} />
            </label>
            <label>
              {" "}
              5G Capacity
              <input type="text" value={fiveGcapacity} />
            </label>
          </div>
          </div>

          <div class="column">
            <h2>Per Sector Capacity - LTE </h2>
            <button class="ui button">Spectral Efficiency</button>

            <h4>B2</h4>

            <label>
              {" "}
              B2 (Mhz)
              <input
                placeholder="Mhz"
                type="number"
                value={LTEB2}
                onChange={(e) => setLTEB2(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Spectral Efficiency
              <input
                type="number"
                value={LTESEB2}
                onChange={(e) => setLTESEB2(parseFloat(e.target.value))}
              />
            </label>

            <h4>B4</h4>

            <label>
              {" "}
              B4 (Mhz)
              <input
                placeholder="Mhz"
                type="number"
                value={LTEB4}
                onChange={(e) => setLTEB4(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Spectral Efficiency
              <input
                type="number"
                value={LTESEB4}
                onChange={(e) => setLTESEB4(parseFloat(e.target.value))}
              />
            </label>

            <h4>B7</h4>

            <label>
              {" "}
              B7 (Mhz)
              <input
                placeholder="Mhz"
                type="number"
                value={LTEB7}
                onChange={(e) => setLTEB7(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Spectral Efficiency
              <input
                type="number"
                value={LTESEB7}
                onChange={(e) => setLTESEB7(parseFloat(e.target.value))}
              />
            </label>

            <h4>B29</h4>

            <label>
              {" "}
              B29 (Mhz)
              <input
                placeholder="Mhz"
                type="number"
                value={LTEB29}
                onChange={(e) => setLTEB29(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Spectral Efficiency
              <input
                type="number"
                value={LTESEB29}
                onChange={(e) => setLTESEB29(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <div>
              <label>
                {" "}
                Total Capacity (Mbps)
                <input type="text" value={LTEtotalCapacity} />
              </label>
              <label>
                {" "}
                Maximum Traffic (Gb)
                <input type="text" value={LTEMaxTraffic} />
              </label>
              <label>
                {" "}
                Recommended 4G & 5G Sectors
                <input type="text" value={LTECapSectors} />
              </label>
            </div>
          </div>

          <div class="column">
            <h2>Per Sector Capacity - 5G</h2>
            <button class="ui button">Spectral Efficiency</button>
            <h4>N66</h4>

            <label>
              {" "}
              N66 (Mhz)
              <input
                placeholder="Mhz"
                type="number"
                value={fiveGN66}
                onChange={(e) => setfiveGN66(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Spectral Efficiency
              <input
                type="number"
                value={fiveGSEN66}
                onChange={(e) => setfiveGSEN66(parseFloat(e.target.value))}
              />
            </label>

            <h4>N78</h4>

            <label>
              {" "}
              N78 (Mhz)
              <input
                placeholder="Mhz"
                type="number"
                value={fiveGN78}
                onChange={(e) => setfiveGN78(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Spectral Efficiency
              <input
                type="number"
                value={fiveGSEN78}
                onChange={(e) => setfiveGSEN78(parseFloat(e.target.value))}
              />
            </label>
            <br />
            <div>
              <label>
                {" "}
                Total N78 Capacity (Mbps)
                <input type="text" value={capn78} />
              </label>
              <label>
                {" "}
                Maximum Traffic (Gb)
                <input type="text" value={fiveGMaxTraffic} />
              </label>
              <label>
                {" "}
                Recommended N78 Sectors
                <input type="text" value={fiveGCapSectors} />
              </label>
            </div>
          </div>

          <div class="column">
            <h2>Final LTE and 5G Throughput</h2>

            <label>
              {" "}
              Input Total Sectors 4G + 5G
              <input
                placeholder="# of Sectors"
                type="number"
                value={LTESectorsInput}
                onChange={(e) => setLTESectorsInput(parseInt(e.target.value))}
              />
            </label>

            <label>
              {" "}
              Input N78 Sectors
              <input
                placeholder="# of Sectors"
                type="number"
                value={fiveGSectorsInput}
                onChange={(e) => setfiveGSectorsInput(parseInt(e.target.value))}
              />
            </label>
            <br />
            <div>
              <label>
                {" "}
                DL LTE throughput (Mbps)
                <input type="text" value={ltefinalthrpt} />
              </label>
              <label>
                {" "}
                DL 5G throughput (Mbps)
                <input type="text" value={fiveGfinalthrpt} />
              </label>
            </div>

            <br />
            <br />
            <button class="ui button">Export as PDF</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
