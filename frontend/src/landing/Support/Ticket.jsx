import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Ticket = () => {
  return (
    <div className="px-60 py-20">
      <h1 className="text-3xl font-semibold pb-10 pt-5">
        To create a ticket, select a relevant topic
      </h1>
      <div>
        <div className="flex pb-8 part">
          <div className="w-4/12 ">
            <h2>
              <AddCircleOutlineIcon /> Account Opening
            </h2>
            <div>
              <ul>
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian (NRI)</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
          <div className="w-4/12">
            <h2>
              <PersonIcon /> Your Stock Pulse Account
            </h2>
            <div>
              <ul>
                <li>Your Profile</li>
                <li>Account modification</li>
                <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                <li>Nomination</li>
                <li>Transfer and conversion of securities</li>
              </ul>
            </div>
          </div>
          <div className="w-4/12">
            <h2>
              <StackedLineChartIcon /> Kite
            </h2>
            <div>
              <ul>
                <li>IPO</li>
                <li>Trading FAQs</li>
                <li>Margin Trading Facility (MTF) and Margins</li>
                <li>Charts and orders</li>
                <li>Alerts and Nudges</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex part">
          <div className="w-4/12">
            <h2>
              <BackupTableIcon /> Funds
            </h2>
            <div>
              <ul>
                <li>Add money</li>
                <li>Add bank accounts</li>
                <li>Withdraw money</li>
                <li>eMandates</li>
                <li>General</li>
              </ul>
            </div>
          </div>
          <div className="w-4/12">
            <h2>
              <DeveloperBoardIcon /> Console
            </h2>
            <div>
              <ul>
                <li>Portfolio</li>
                <li>Corporate actions</li>
                <li>Funds statement</li>
                <li>Reports</li>
                <li>Segments</li>
              </ul>
            </div>
          </div>
          <div className="w-4/12">
            <h2>
              <MonetizationOnIcon /> Coin
            </h2>
            <div>
              <ul>
                <li>Understanding mutual funds and Coin</li>
                <li>Coin app</li>
                <li>Coin web</li>
                <li>Transactions and reports</li>
                <li>National Pension Scheme (NPS)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
