import SubAdmin11 from "../MasterAgentList/SubAdmin/SubAdmin11";
import SubAdmin10 from "../MasterAgentList/SubAdmin/SubAdmin10";
import SubAdmin9 from "../MasterAgentList/SubAdmin/SubAdmin9";
import SubAdmin8 from "../MasterAgentList/SubAdmin/SubAdmin8";
import SubAdmin7 from "../MasterAgentList/SubAdmin/SubAdmin7";
import SuperAdmin6 from "../MasterAgentList/SubAdmin/SuperAdmin6";
import SubAdmin5 from "../MasterAgentList/SubAdmin/SubAdmin5";
import SubAdmin4 from "../MasterAgentList/SubAdmin/SubAdmin4";
import SubAdmin2 from "../MasterAgentList/SubAdmin/SubAdmin2";
import SubAdmin3 from "../MasterAgentList/SubAdmin/SubAdmin3";

const SuperAgent = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl text-center font-bold">
          VELKI SUPER AGENT LIST
        </h1>
      </div>
      {/* Table Data */}

      {/* SubAdmin-2 */}
      <SubAdmin2></SubAdmin2>
      {/* SubAdmin-3 */}
      <SubAdmin3></SubAdmin3>
      {/* SubAdmin-4 */}
      <SubAdmin4></SubAdmin4>
      {/* SubAdmin-5 */}
      <SubAdmin5></SubAdmin5>
      {/* SubAdmin-6 */}
      <SuperAdmin6></SuperAdmin6>
      {/* SubAdmin-7 */}
      <SubAdmin7></SubAdmin7>
      {/* SubAdmin-8 */}
      <SubAdmin8></SubAdmin8>
      {/* SubAdmin-9 */}
      <SubAdmin9></SubAdmin9>
      {/* SubAdmin-10 */}
      <SubAdmin10></SubAdmin10>
      {/* SubAdmin-11 */}
      <SubAdmin11></SubAdmin11>
    </div>
  );
};

export default SuperAgent;
