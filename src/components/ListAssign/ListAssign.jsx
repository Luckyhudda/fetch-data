import { useEffect, useState } from "react";

function ListAssign() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [data, setData] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        let data = await fetch(url);
        let finalData = await data.json();
        setData(finalData);
      } catch {
        return "Error";
      }
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data &&
          data.map((item, index) => {
            return (
              <li
                style={{ color: item.completed ? "green" : "red" }}
                key={index}
              >
                {item.title}
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default ListAssign;
