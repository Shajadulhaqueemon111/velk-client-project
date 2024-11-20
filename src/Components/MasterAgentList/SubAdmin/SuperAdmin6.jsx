import { Link } from "react-router-dom";

const SuperAdmin6 = () => {
  const data = [
    {
      id: 2785,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593659605",
      complain: "অভিযোগ",
    },
    {
      id: 1180,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+855966554722",
      complain: "অভিযোগ",
    },
    {
      id: 2693,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85510524398",
      complain: "অভিযোগ",
    },
    {
      id: 1181,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85516793075",
      complain: "অভিযোগ",
    },
    {
      id: 1860,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519420",
      complain: "অভিযোগ",
    },
    {
      id: 2629,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593659591",
      complain: "অভিযোগ",
    },
    {
      id: 2691,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85510372734",
      complain: "অভিযোগ",
    },
    {
      id: 2778,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593659510",
      complain: "অভিযোগ",
    },
    {
      id: 1716,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85587465136",
      complain: "অভিযোগ",
    },
    {
      id: 2781,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593659435",
      complain: "অভিযোগ",
    },
    {
      id: 1443,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+855962559877",
      complain: "অভিযোগ",
    },
    {
      id: 1906,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515826950",
      complain: "অভিযোগ",
    },
    {
      id: 1727,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85587465413",
      complain: "অভিযোগ",
    },
    {
      id: 2224,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593254538",
      complain: "অভিযোগ",
    },
    {
      id: 2613,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593619285",
      complain: "অভিযোগ",
    },
    {
      id: 1994,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85587456247",
      complain: "অভিযোগ",
    },
    {
      id: 1735,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85587453084",
      complain: "অভিযোগ",
    },
    {
      id: 1732,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85587453146",
      complain: "অভিযোগ",
    },
    {
      id: 2203,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593254753",
      complain: "অভিযোগ",
    },
    {
      id: 1728,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85587465291",
      complain: "অভিযোগ",
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
                  <td className="px-2 py-2">{item.id}</td>
                  <td className="px-2 py-2">{item.agent}</td>
                  <td className="px-2 py-2">
                    <Link to="https://wa.me/+85585292543">
                      <img className="w-8 mx-auto" src={item.app} alt="" />
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item.phone_number}`}
                    >
                      {item.phone_number}
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item.phone_number}`}
                    >
                      {item.complain}
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

export default SuperAdmin6;
