import React, { useEffect, useState } from "react";

const Main = () => {
  let [data, setdata] = useState([]);
  let [users, setUsers] = useState([
    "mojombo",
    "defunkt",
    "pjhyett",
    "wycats",
    "ezmobius",
    "ivey",
  ]);

  let [searchuser, setSearchuser] = useState("mojombo");

  let [search, setSearch] = useState(false);
  useEffect(() => {
    async function data_fetch() {
      let data = await fetch(`https://api.github.com/users/${searchuser}`);

      let res = await data.json();

      console.log([res]);
      setdata([res]);
    }

    console.log("useEffect");

    data_fetch();
  }, [search]);

  let handleSubmit = e => {
    e.preventDefault();

    setSearch(!search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search user ..."
          list="user"
          onChange={e => setSearchuser(e.target.value)}
        />

        <datalist id="user">
          {users.map(value => {
            return <option key={value} value={value} />;
          })}
        </datalist>

        <button>➡️</button>
      </form>

      {data.map(value => {
        return (
          <div key={value.login}>
            <img src={value.avatar_url} width="300px" />
            <h1>{value.login}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
