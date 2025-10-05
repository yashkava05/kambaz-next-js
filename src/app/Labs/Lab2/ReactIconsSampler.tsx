import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4">
      <h3>React Icons Sampler</h3>
      <div className="d-flex">
        <VscAccount className="fs-3 text me-3" />
        <AiOutlineDashboard className="fs-3 text me-3" />
        <FaBookBible className="fs-3 text me-3" />
        <FaCalendar className="fs-3 text me-3" />
        <FaEnvelopeOpenText className="fs-3 text me-3" />
        <FaRegClock className="fs-3 text me-3" />
      </div>
    </div>
  );
}