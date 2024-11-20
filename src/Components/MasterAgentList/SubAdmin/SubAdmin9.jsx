import { Link } from "react-router-dom";

const SubAdmin9 = () => {
  const data = [
    {
      ID_NO: 475,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85586352419",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 479,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+855966553980",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1428,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85586352371",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1799,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515518466",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1871,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85593254958",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1824,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515518392",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1798,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515518949",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1817,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515519645",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1831,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85516793301",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1797,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515518270",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2424,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570564822",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2426,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570564820",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2710,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85593463098",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2566,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570952933",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2567,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570952744",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2425,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570564836",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2565,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570952985",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2423,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570564885",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2422,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570564891",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2711,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85510524406",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2476,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570944732",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2564,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570944762",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1247,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+855969482633",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1629,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85586951702",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 893,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515920780",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2584,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85570952739",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 259,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85515920781",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 5,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+855 96 656 3104",
      COMPLAIN: "অভিযোগ",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 287 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 26 জন
        </h1>
      </div>
      <div>
        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-sm md:text-base">
            {/* Table Head */}
            <thead className="bg-gray-200">
              <tr>
                <th className="px-2 py-3">ID</th>
                <th className="px-2 py-3">Agent</th>
                <th className="px-2 py-3">App</th>
                <th className="px-2 py-3">Phone Number</th>
                <th className="px-2 py-3">Complain</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-2 py-2">{item.ID_NO}</td>
                  <td className="px-2 py-2">{item.AGENT}</td>
                  <td className="px-2 py-2">
                    <Link to="https://wa.me/+85585292543">
                      <img className="w-8 mx-auto" src={item.APP} alt="" />
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item.PHONE_NUMBER}`}
                    >
                      {item.PHONE_NUMBER}
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item.PHONE_NUMBER}`}
                    >
                      {item.COMPLAIN}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubAdmin9;
