import newsIcon from "../../../assets/icons/blank.png";
import earnIcon from "../../../assets/icons/monetize.svg";
import calenderIcon from "../../../assets/icons/calendar.svg";

import SideMenuButton from "./SideMenuButton";

const sideMenu = [

];

export default function SideMenu() {
	return (
		<div className="flex flex-col gap-4">
			{sideMenu.map((menu) => (
				<SideMenuButton key={menu.id} menu={menu} />
			))}
		</div>
	);
}
