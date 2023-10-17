import earthMissionImg from "../../../assets/images/earth-explore.png";
import titanMissionImg from "../../../assets/images/titan-exploration.png";
import launchMissionImg from "../../../assets/images/launch-mission.png";

import SegmentCard from "./SegmentCard";
import SegmentCardH from "./SegmentCardH";

const segmentCardInfo = [
	{
		id: "s-1",
		img: earthMissionImg,
		title: "World Crisis Taskforce",
		description: "Alert humans of Earth's danger and save lives through action.",
		route: "/earth-intro",
		mission: "earth",
	},
	{
		id: "s-2",
		img: titanMissionImg,
		title: "Titan Exploration",
		description:
			"Match Titans' surface titles, aided by a flight chatbot explaining space emotional effects, sleep disruptions.",
		route: "/titan-quiz",
		mission: "titan",
	},
];

const horizontalCardInfo = {
	id: "s-3",
	img: launchMissionImg,
	title: "Launch Mission",
	description:
		"Launch spaceship, save lives by exploring Titan, establish colony, and prevent human extinction with mission completion.",
	route: "/function/missions",
	mission: "launch",
};

export default function Segments() {
	return (
		<div>
			<div className="flex gap-4">
				{segmentCardInfo.map((cardInfo) => (
					<SegmentCard key={cardInfo.id} cardInfo={cardInfo} />
				))}
			</div>
			<div className="mt-4">
				<SegmentCardH cardInfo={horizontalCardInfo} />
			</div>
		</div>
	);
}
