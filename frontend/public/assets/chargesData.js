const chargesData = [
  {
    category: "Brokerage",
    equityDelivery: "Zero Brokerage",
    equityIntraday: "0.03% or Rs. 20/executed order whichever is lower",
    foFutures: "0.03% or Rs. 20/executed order whichever is lower",
    foOptions: "Flat Rs. 20 per executed order",
  },
  {
    category: "STT/CTT",
    equityDelivery: "0.1% on buy & sell",
    equityIntraday: "0.025% on the sell side",
    foFutures: "0.02% on the sell side",
    foOptions: [
      "0.125% of the intrinsic value on options that are bought and exercised",
      "0.1% on sell side (on premium)",
    ],
  },
  {
    category: "GST",
    equityDelivery: "18% on (brokerage + SEBI charges + transaction charges)",
    equityIntraday: "18% on (brokerage + SEBI charges + transaction charges)",
    foFutures: "18% on (brokerage + SEBI charges + transaction charges)",
    foOptions: "18% on (brokerage + SEBI charges + transaction charges)",
  },
  {
    category: "SEBI charges",
    equityDelivery: "₹10 / crore",
    equityIntraday: "₹10 / crore",
    foFutures: "₹10 / crore",
    foOptions: "₹10 / crore",
  },
  {
    category: "Stamp charges",
    equityDelivery: "0.015% or ₹1500 / crore on buy side",
    equityIntraday: "0.003% or ₹300 / crore on buy side",
    foFutures: "0.002% or ₹200 / crore on buy side",
    foOptions: "0.003% or ₹300 / crore on buy side",
  },
];

export default chargesData;
