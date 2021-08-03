const Filter = ({filteredPerson, handleFilterChange}) => {
    return (
        <div>
            <h2>phonebook</h2>
            filter shown with <input value={filteredPerson} onChange={handleFilterChange} />
        </div>
    )
}
export default Filter