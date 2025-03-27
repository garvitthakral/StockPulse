import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const suppLinks = [
    "Contact us",
    "Support portal",
    "List of charges",
    "Downloads & resources",
    "Market overview",
    "Status of your complaints",
    "Z-Connect blog",
  ];

  return (
    <footer className="bg-gray-50 shadow-md">
      <div className="mt-19">
        <div className="flex px-50 mt-5">
          <div className="w-3/12">
            <img
              src="https://drive.google.com/file/d/1F3jxST0LGZkG7ZTkG2fEhomS2wED_QfU/view?usp=sharing"
              alt="logo"
              className="h-22"
            />
            <p className="text-gray-600 px-4">
              &copy; 2010 - 2025, Stock Pulse Ltd. All rights reserved.
            </p>
            <div className="icon text-gray-500 px-4 py-4 flex gap-4">
              <a href="https://x.com/thakral_garvit">
                <XIcon />
              </a>
              <a href="https://www.instagram.com/thakral_garvit/">
                <InstagramIcon />
              </a>
              <a href="https://github.com/garvitthakral">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/garvit-thakral-23a0a130a/">
                <LinkedInIcon />
              </a>
              <a href="https://youtu.be/xvFZjo5PgG0">
                <YouTubeIcon />
              </a>
              <a href="https://youtu.be/xvFZjo5PgG0">
                <WhatsAppIcon />
              </a>
              <a href="https://youtu.be/xvFZjo5PgG0">
                <TelegramIcon />
              </a>
            </div>
          </div>
          <div className="w-3/12">
            <h2 className="py-4 text-xl">Company</h2>
            <div className="links">
              <NavLink to={"/about"}>About</NavLink>
              <br />
              <NavLink to={"/pricing"}>Pricing</NavLink> <br />
              <a href="https://youtu.be/xvFZjo5PgG0">Careers</a>
              <br />
              <a href="https://youtu.be/xvFZjo5PgG0">Open sourse</a>
              <br />
              <a href="https://youtu.be/xvFZjo5PgG0">Press & media</a>
              <br />
              <a href="https://youtu.be/xvFZjo5PgG0">Products</a>
              <br />
            </div>
          </div>
          <div className="w-3/12">
            <h2 className="py-4 text-xl">Support</h2>
            <div className="links">
              {suppLinks.map((link, idx) => (
                <div key={idx}>
                  <a  href="https://youtu.be/xvFZjo5PgG0" className="">
                    {link}
                  </a>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/12">
            <h2 className="py-4 text-xl">Account</h2>
            <div className="links">
              <NavLink to={"/signin"}>Open an account</NavLink>
              <br />
              <a href="https://youtu.be/xvFZjo5PgG0">Fund transfer</a>
            </div>
          </div>
        </div>
        <div className="px-50 py-5">
          <p className="text-sm text-gray-500">
            Stock Pulse Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Stock Pulse
            Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
            through Stock Pulse Commodities Pvt. Ltd. MCX: 46025; NSE-50001 –
            SEBI Registration no.: INZ000038238 Registered Address:Stock Pulse
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@Stock Pulse.com, for DP related to dp@Stock Pulse.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <br />
          <p className="text-sm text-gray-500">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <br />
          <p className="text-sm text-gray-500">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <br />
          <p className="text-sm text-gray-500">
            Attention investors: 1. Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2. Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3. Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <br />
          <p className="text-sm text-gray-500">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Stock Pulse and offering such services,
            please create a ticket here.
          </p>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
