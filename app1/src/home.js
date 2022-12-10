import "./App.css";
import { useEffect, useState } from "react";
import Button from "./button";
import axios from "axios";
import Modal_MUI from "./modal_mui";
import Card_MUI from "./card_MUI";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState();
  const [inputValue, setInputValue] = useState();
  const [inputValueImage, setInputValueImage] = useState();
  const [inputValueTitle, setInputValueTitle] = useState();
  const [inputValuePrice, setInputValuePrice] = useState();
  // const [inputValue, setInputValue] = useState();
  const [updateValue, setUpdateValue] = useState();
  const [refresh, setRefresh] = useState(false);

  const { imageAddress, title, price } = todo;

  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const querySnapshot = await getDocs(dbCollection);
  //         const getDataArr = [];
  //         querySnapshot.forEach((doc) => {
  //           getDataArr.push({
  //             id: doc.id,
  //             name: doc.data().name,
  //             handle: true,
  //           });
  //           setTodo([...getDataArr]);
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //         console.log(getDataArr);
  //       } catch (error) {
  //         console.log("get doc error==>", error);
  //       }
  //     }
  //     getData();
  //   }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/sampleproduct")
  //     //   .then(console.log(res))
  //     // .then((res) => console.log(res));
  //     .then((data) => setProduct(res));
  // }, []);

  useEffect(() => {
    const getUser = async () => {
      const data = await axios.get("http://localhost:5000/api/product");
      setTodo([...todo, data]);
      console.log(data, "data");
    };
    getUser();
  }, []);

  const addTodo = async () => {
    // setTodoValue(inputValue);
    setTodo([
      ...todo,
      {
        imageAddress: inputValueImage,
        title: inputValueTitle,
        price: inputValuePrice,
        handle: true,
      },
      app.post("/api/post", (request, response) => {
        console.log(request.body);
        userModel.create(request.body, (err, data) => {
          if (err) {
            console.log(err);
            response.json({
              message: `error : ${err}`,
            });
          } else {
            response.json({ data, message: "find user" });
          }
        });
      });
    ]);
    // setInputValue("");
  };

  const deleteTodo = async (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
    app.post("/api/post", (request, response) => {
      console.log(request.body);
      userModel.create(request.body, (err, data) => {
        if (err) {
          console.log(err);
          response.json({
            message: `error : ${err}`,
          });
        } else {
          response.json({ data, message: "find user" });
        }
      });
    });
  };

  const editTodo = (index) => {
    todo[index].handle = false;
    setTodo([...todo]);
    app.post("/api/post", (request, response) => {
      console.log(request.body);
      userModel.create(request.body, (err, data) => {
        if (err) {
          console.log(err);
          response.json({
            message: `error : ${err}`,
          });
        } else {
          response.json({ data, message: "find user" });
        }
      });
    });
  };

  const updateTodo = (index) => {
    todo[index].name = updateValue;
    todo[index].handle = true;
    setTodo([...todo]);
  };

  return (
    <>
      <nav>
        <h1>My app</h1>
        <Modal_MUI
          onChangeImage={(e) => {
            // setInputValueImage(e.target.value);
            console.log(e.target.value);
          }}
          onChangeTitle={(e) => {
            // setInputValueTitle(e.target.value);
            console.log(e.target.value);
          }}
          onChangePrice={(e) => {
            // setInputValuePrice(e.target.value);
            console.log(e.target.value);
          }}
          addButtonFunc={addTodo}
        />
      </nav>
      <div className="main">
        <section>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
          >
            {/* <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="Enter todo"
          /> */}
          </form>
          <ul>
            {todo.map((v, i) => {
              console.log(v);
              return (
                <>
                  <Card_MUI
                    imageAddress={imageAddress}
                    title={title}
                    price={price}
                  />
                  {/* <div>
                  <Button value="edit" event={() => editTodo(i)} />
                  <Button value="delete" event={() => deleteTodo(i)} />
                </div> */}
                </>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
