import homeIcon from "../../assets/icons/home.svg";
import questIcon from "../../assets/icons/quests.svg";
import missionIcon from "../../assets/icons/mission.svg";
import eventsIcon from "../../assets/icons/event.svg";
import storeIcon from "../../assets/icons/store.svg";

import SingleMenu from "./SingleMenu";

const menuItems = [
	{ id: "op-1", title: "home", route: "/function/home", icon: homeIcon },
	{ id: "op-3", title: "missions", route: "/function/missions", icon: missionIcon }
];

export default function Menu() {
	return (
		<div className="grid grid-cols-2 w-full" >
			{menuItems.map((menu) => (
				<SingleMenu key={menu.id} menu={menu} />
			))}
		</div>
	);
}
