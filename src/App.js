import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [fugitivesData, setFugitivesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.fbi.gov/wanted/v1/list?page=${currentPage}`
      );
      const data = await res.json();

      setFugitivesData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="App">
      <Header></Header>
      <List data={fugitivesData}></List>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(fugitivesData.total / 20)}
        onPageChange={setCurrentPage}
      ></Pagination>
    </div>
  );
}

export default App;
