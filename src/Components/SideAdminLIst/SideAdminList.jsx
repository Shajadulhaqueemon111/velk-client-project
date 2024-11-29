import { Link } from "react-router-dom";

const SideAdminList = () => {
  const data = [
    {
      ID_NO: 3,
      NAME: "আকাশ মালিক",
      TELG: "https://i.ibb.co.com/xHc5ZQx/tg.png",
      WHTS: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+15714028675",
    },
    {
      ID_NO: 6,
      NAME: "আকাশ মালিক",
      TELG: "https://i.ibb.co.com/xHc5ZQx/tg.png",
      WHTS: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+85561743988",
    },
    {
      ID_NO: 7,
      NAME: "আকাশ মালিক",
      TELG: "https://i.ibb.co.com/xHc5ZQx/tg.png",
      WHTS: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      PHONE_NUMBER: "+15714028848",
    },
  ];

  return (
    <div className="mx-auto max-w-full mt-4 px-4">
      <div className="flex flex-col items-center">
        <button className="px-4 py-2 bg-white border text-black rounded hover:bg-red-500 hover:text-white transition">
          AGENT
        </button>

        <h1 className="text-xl md:text-2xl font-bold text-center mt-4">
          VELKI SITE ADMINE LIST
        </h1>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table table-zebra md:font-bold lg:font-bold text-center w-full text-sm sm:text-base md:text-lg lg:text-xl">
          {/* Table Head */}
          <thead className="bg-gray-200">
            <tr className="font-bold md:text-lg lg:text-xl">
              <th className="px-2 py-3">ID</th>
              <th className="px-2 py-3">NAME</th>
              <th className="px-2 py-3">TELG</th>
              <th className="px-2 py-3">WHTS</th>
              <th className="px-2 py-3">PHONE_NUMBER</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-2 py-2 border">{item.ID_NO}</td>
                <td className="px-2 py-2 border">{item.NAME}</td>
                <td className="px-2 py-2 border">
                  <Link to="https://telegram.me/akash_malik">
                    <img
                      className="w-8 mx-auto max-w-xs"
                      src={item.TELG}
                      alt=""
                    />
                  </Link>
                </td>
                <td className="px-2 py-2 border">
                  <Link to={`https://wa.me/${item.PHONE_NUMBER}`}>
                    <img
                      className="w-8 mx-auto max-w-xs rounded-full"
                      src={item.WHTS}
                      alt=""
                    />
                  </Link>
                </td>
                <td className="px-2 py-2 border">
                  <Link
                    className="text-red-500"
                    to={`https://wa.me/${item.PHONE_NUMBER}`}
                  >
                    {item.PHONE_NUMBER}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p className="text-sm md:text-base mt-2 text-center">
          <span className="text-lg font-bold">
            এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
          </span>{" "}
          <br />
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ VELKI.COM{" "}
          <br />
          **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা{" "}
          <br />
          যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
        </p>
      </div>
    </div>
  );
};

export default SideAdminList;
