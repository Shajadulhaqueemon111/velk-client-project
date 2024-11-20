import { Link } from "react-router-dom";

const SubAdmin8 = () => {
  const data = [
    {
      ID: "1609",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85586953027",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1851",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515921786",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1617",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515517941",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1843",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515519277",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "2614",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85570953033",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1665",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515920382",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "2408",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855966552980",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1633",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85510526017",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1702",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855966542574",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID: "1537",
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515920632",
      COMPLAIN: "অভিযোগ",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 287 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 16 জন
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
                  <td className="px-2 py-2">{item.ID}</td>
                  <td className="px-2 py-2">{item.AGENT}</td>
                  <td className="px-2 py-2">
                    <Link to="https://wa.me/+85585292543">
                      <img className="w-8 mx-auto" src={item.APP} alt="" />
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item["PHONE NUMBER"]}`}
                    >
                      {item.phone_number}
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item["PHONE NUMBER"]}`}
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

export default SubAdmin8;
