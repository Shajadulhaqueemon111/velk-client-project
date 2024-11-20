import { Link } from "react-router-dom";

const SubAdmin11 = () => {
  const data = [
    {
      ID_NO: 36,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515920354",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 203,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+60172795517",
      COMPLAIN: "অভিযোগ",
    },
    {
      "ID _NO": 54,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601164111404",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 862,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601124255273",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 858,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85593465622",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2151,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855966130860",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1435,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85593619541",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 860,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85570578460",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2904,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855967288948",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 737,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515519625",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2270,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515519827",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2788,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85593659586",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 179,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515920784",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 426,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515519830",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 75,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855969481920",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 394,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601124254844",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 37,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601133328041",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2896,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855967289779",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 95,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601125602714",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 422,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601172391017",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 97,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85515920610",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 841,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601114489372",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 859,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601114489189",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 2692,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85510372719",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 96,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+601123411822",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 643,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+60176517861",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 991,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85570564737",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 744,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855963019756",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1301,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+855966495662",
      COMPLAIN: "অভিযোগ",
    },
    {
      ID_NO: 1902,
      AGENT: "মাষ্টার",
      APP: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      "PHONE NUMBER": "+85593615502",
      COMPLAIN: "অভিযোগ",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 287 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 50 জন
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

export default SubAdmin11;
