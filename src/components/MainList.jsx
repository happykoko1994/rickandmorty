import LocationList from "./LocationsList";
import { Collapse } from "./presentational/Collapse";
import { EpisodeList } from "./presentational/EpisodeList";


function MainList() {
    return (
        <>
            <Collapse title={"Список эпизодов"} content={<EpisodeList />} />
            <Collapse title={"Список локаций"} content={<LocationList />} />

        </>


    );
}

export default MainList;