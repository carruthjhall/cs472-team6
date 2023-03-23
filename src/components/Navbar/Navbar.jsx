import Icon from "../Icon/Icon";
import { devViewState } from "../../state"

export default function Navbar() {

    let isDevView = devViewState((state) => state.isDevView);
    let setDevView = devViewState((state) => state.setDevView);

    return (
        <nav className="flex h-14 bg-gray-200 items-center">
            <button onClick={() => setDevView(!isDevView)} className={`py-2 px-4 bg-blue-400 mr-auto ml-4 rounded-lg ${ import.meta.env.MODE == "development" ? "visible" : "invisible" } `}>
                Dev View
            </button>
            <button className="py-2 px-4 bg-blue-400 ml-auto mr-4 rounded-lg">
                <Icon name="arrow-down-tray" />
            </button>
        </nav>
    )
}