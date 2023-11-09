import { useCharacters } from "./hooks/useCharacters";
import { CharacterItem } from "./presentational/CharacterItem";

function Location({ ids }) {

    const { characters, isLoading } = useCharacters(ids)
    if (ids.length == 0) {
        return <div>Нет жителей</div>;
    }
    if (isLoading) {
        return <div className="loading">Загрузка...</div>;
    }
    return (
        <div className={'characters-container'}>

            {characters.length > 1
                ? characters.map(character =>
                    <CharacterItem key={character.id} character={character} />
                )
                : <CharacterItem character={characters} />}



        </div>
    );
}

export default Location;