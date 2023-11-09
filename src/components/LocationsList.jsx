import { useLocations } from './hooks/useLocation'
import { Collapse } from './presentational/Collapse';
import Location from './Location'

function LocationList() {
    const { locations } = useLocations()
    console.log(useLocations());
    return (
        <div>
            {locations.map(location => <Collapse
                key={location.id}
                className={'episode'}
                title={location.name}
                content={<Location
                    key={location.id}
                    
                    ids={location.residents.map((resident) => {
                        const id = resident.split("/").pop();
                        return id;
                    })} />} />)}
        </div>
    )
}

export default LocationList;