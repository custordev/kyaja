import Marquee from "react-fast-marquee";
import { FiPhoneCall } from "react-icons/fi";
export default function TopBanner() {
  return (
    <div>
      <Marquee>
        <div className="flex items-center justify-between container mx-auto px-8 py-1 gap-4 text-sm">
          <div className="animate-pulse font-semibold">All in One Store</div>
          <p className="text-orange-600">Need help placing an order ?</p>
          <div className="flex font-bold space-x-2">
            <span>Call:</span>
            {/* <FiPhoneCall className="text-3xl" /> */}
            <span>+256 752 815998</span>
          </div>
          <p className="text-orange-600 hidden md:block"> Located at Kyaja</p>
        </div>
      </Marquee>
      <hr />
    </div>
  );
}
