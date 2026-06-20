// import { useState, useEffect } from "react";

import { useEffect, useState } from "react";

// function App() {
//   const [keyboard, setKeyboard] = useState("");

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       console.log("Key Pressed:", event.key);

//       setKeyboard((prev) => prev + event.key);
//     };

//     window.addEventListener("keydown", handleKeyPress);

//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   return (
//     <>
//       <h1>Keys Pressed:</h1>
//       <p>{keyboard}</p>
//     </>
//   );
// }

// export default App;

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  async function getData() {
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${text}`);
      if (res.ok) {
        const result = await res.json();
        console.log(result);
        setData(result.products);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error);
    }
  }

  function handleChange(e) {
    const result = e.target.value;
    setText(result);
  }

  useEffect(() => {
    getData();
  }, [text]);

  return (
    <div>
      <h1>Hello Babu</h1>
      <div>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
      <div>
        {data.map((item) => {
          return (
            <div className="border border-brown-1 mx-auto my-2 w-1/2 bg-yellow" key={item.id}>
              <p>{item.title}</p>
              <img src={item.thumbnail} alt="" />
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.rating}</p>
              <p>{item.stock}</p>
              <p>{item.brand}</p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;