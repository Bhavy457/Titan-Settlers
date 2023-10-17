import PropTypes from "prop-types";
import { motion } from "framer-motion";

import tipIcon from "../../assets/icons/tip.svg";
import pointer from "../../assets/images/pointer.png";

export default function EarthTip({ count, total, tipInfo }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="absolute w-[320px] top-4 -left-[360px] z-[60]"
		>
			<div className="relative bg-slate-400 bg-opacity-20 rounded-tl-3xl rounded-br-3xl border-[3px] border-slate-400">
				<div className="px-4 py-2.5 flex gap-1 text-sky-100 text-xl font-medium tracking-wide font-inter">
					<img src={tipIcon} alt="tip" />
					{tipInfo.heading}
					<span>
						({count}/{total})
					</span>
				</div>
				<div className="text-zinc-100 px-4 pb-2 text-base font-normal font-poppins">
					{tipInfo.desc}
				</div>
				{tipInfo.link && (
					<a href={tipInfo.link} target="_blank" rel="noreferrer">
						<span className="px-4 inline-block mb-3 text-cyan-400 font-inter italic text-normal font-medium underline tracking-wide">
							Read More
						</span>
					</a>
				)}
				<img src={pointer} className="absolute -right-[192px] top-14 rotate-180" />
			</div>
		</motion.div>
	);
}

EarthTip.propTypes = {
	tipInfo: PropTypes.object.isRequired,
	closeEarthTips: PropTypes.func,
	count: PropTypes.number,
	total: PropTypes.number,
};
