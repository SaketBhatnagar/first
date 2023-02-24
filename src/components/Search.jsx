const Search = ({ data }) => {
  return (
    <section className="main-block">
      <article>
        <h1>Search Country</h1>
        <form>
          {/* <input type="text" placeholder="search country...." list="country" />
        <datalist id="country">
          {data.map(value => {
            return <option key={value.code} value={value.name} />;
          })}
        </datalist> */}

          <select>
            {data.map(value => {
              return (
                <option key={value.code} value={value.name}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </form>
      </article>
    </section>
  );
};

export default Search;
