import Field from '../../Field/Field';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

const SearchTaskForm = (props: SearchProps) => {
    const { searchQuery, setSearchQuery } = props;

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <Field
                label="Search task"
                id="id-search"
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.currentTarget.value)}
                type="search"
            />
        </form>
    );
};

export default SearchTaskForm;
