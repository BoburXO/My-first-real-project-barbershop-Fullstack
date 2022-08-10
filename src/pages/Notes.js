// import React, { useState,useEffect } from "react";
// import styled from "styled-components";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import HeaderInput from "../components/HeaderInput";
// import Form from "../components/Form";
// import TodoLis from "../components/TodoList";

// const Notes = () => {
//   const initialState = JSON.parse(localStorage.getItem("todos")) ||[];
//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([initialState]);
//   const [editTodo, setEditTodo] = useState(null);


//    useEffect(() => {
//      localStorage.setItem("todos" , JSON.stringify(todos))

//    }, [todos]);

//   return (
//     <TodoList>
//       <Nav />
//       <div className="TodoContainer">
//         <div className="app-wrapper my-5">
//           <div>
//             <HeaderInput />
//           </div>
//           <div>
//             <Form
//               input={input}
//               setInput={setInput}
//               todos={todos}
//               setTodos={setTodos}
//               editTodo={editTodo}
//               setEditTodo={setEditTodo}
//             />
//           </div>
//           <div>
//             <TodoLis
//               todos={todos}
//               setTodos={setTodos}
//               setEditTodo={setEditTodo}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </TodoList>
//   );
// };
// const TodoList = styled.div`
//   .TodoContainer {
//     width: 100%;
//     min-height: 90vh;
//     display: flex;
//     justify-content: center;
//     background: #363636;
//   }
//   .app-wrapper {
//     background: #363636;
//     min-width: 400px;
//     min-height: 550px;
//     padding: 30px;
//     border: rgba(255, 110, 64, 1) solid 3px;
//     box-sizing: border-box;
//     border-radius: 10px;
//   }
//   .header h1 {
//     color: #fff;
//     text-align: center;
//     margin: 30px 0;
//   }
//   .task-input {
//     outline: none;
//     width: 260px;
//     padding: 15px;
//     margin-right: 25px;
//     font-size: 20px;
//     color: #ccc;
//     background: none;
//     border-bottom: 1px solid rgba(255, 110, 64, 1);
//     border-radius: 10px;
//   }
//   .button-add {
//     width: 70px;
//     padding: 15px 15px;
//     font-size: 20px;
//     border-radius: 10px;
//     border: 0;
//     background: rgba(255, 110, 64, 1);
//     cursor: pointer;
//     color: #fff;
//   }
//   .button-add:hover {
//     background: white;
//     border: rgba(255, 110, 64, 1) 2px solid;
//     color: rgba(255, 110, 64, 1);
//     font-weight: bold;
//   }
//   .button-add:active {
//     background-color: rgba(255, 110, 64, 1);
//     box-shadow: 0 5px #666;
//     transform: translateY(1px);
//   }
//   form {
//     margin-left: 30px;
//   }
//   .list-item {
//     display: flex;
//     margin: 20px 0;
//     border: 1px solid rgba(255, 110, 64, 1);
//     padding: 10px;
//     border-radius: 10px;
//     max-height: 50px;
//   }
//   .button-complete,
//   .button-delete,
//   .button-edit {
//     border: none;
//     outline: none;
//     cursor: pointer;
//     background: transparent;
//     font-size: 20px;
//     border-radius: 50%;
//   }
//   .button-complete {
//     color: rgba(255, 110, 64, 1);
//     margin-right: 10px;
//   }
//   .button-edit {
//     color: rgba(255, 110, 64, 1);
//     margin-right: 10px;
//   }
//   .button-delete {
//     color: rgba(255, 110, 64, 1);
//   }
//   .complete {
//     text-decoration-style: solid;
//     text-decoration-line: line-through;
//     text-decoration-color: #ff6c6c;
//     opacity: 0.6;
//   }
//   .list {
//     width: 220px;
//     background: none;
//     border: none;
//     color: #fff;
//     font-size: 20px;
//     padding: 7px;
//     margin-right: 70px;
//   }
//   input:focus,
//   button:focus {
//     outline: none;
//   }
// `;
// export default Notes;


import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "randomcolor";
import Draggable from "react-draggable";
import Fixed from "../fixed"
import { useTranslation } from "react-i18next"; 

const Notes = ({user}) => {
  const { t,i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  React.useEffect(() => {
    document.title = `${t("nav3")} | COOL BARBER`
  }, [t])
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

useEffect( () => {
  localStorage.setItem("items" ,JSON.stringify(items))
},[items]
)
  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "bright",
        }),
        defaultPost: {
          x: 100,
          y: -300,
        },
      };
      setItems((items) => [...items, newItem]);
      setItem(" ");
    } else {
      alert("Enter something...");
      setItem(" ");
    }
  };
  const deleteNode = (id) =>{
    setItems(items.filter((item) => item.id !== id ))
  }
  const updatePos = (data,index) => {
   let newArr = [...items]
   newArr[index].defaultPost = { x: data.x, y: data.y}
   setItems(newArr);
  }
  const keyPress = (e) => {
    const code = e.keyCode || e.which
    if(code === 13) {
      newItem()
    }
  }
//JSX
  return (
    <Zametka>
      <Nav  user={user}/>
      <div>
        <div className="wrapper">
          <input
            value={item}
            type="text"
            placeholder={t("notes.str")}
            onKeyPress={(e) => keyPress(e)}
            onChange={(event) => setItem(event.target.value)}
          />
          <button className="enter"
           onClick={newItem}

           >
           {t("notes.str1")}
          </button>
        </div>
        {
          items.map((item,index) => {
            return(
              <Draggable
              key={index}
              defaultPosition={item.defaultPost}
              onStop={(_,data) =>{
                updatePos(data,index)
                
              } }
              >
                <div className="todo_item" style={{backgroundColor:item.color}}>
                
                {`${item.item}`}
                  <button className="delete"
                  onClick={() => deleteNode(item.id)}
                  >
                    <i class="fa-solid fa-xmark fa-2x"></i>
                  </button>
                </div>
              </Draggable>
            )
          })
        }
      </div>
      <Footer />
      <Fixed/>
    </Zametka>
  );
};
//Styles
const Zametka = styled.div`
    color: #fff;
    min-height: 100vh;
    width: 100%;
    background: #363636;
  .wrapper {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    width: 100%;
    background: #363636;
  }
  input {
    height: 40px;
    width: 250px;
    border: none;
    border-bottom: 3px solid rgba(255, 110, 64, 1);
    background: none;
    color: #fff;
    padding: 0 10px;
    outline: none;
  }
  .enter {
    background: rgba(255, 110, 64, 1);
    border: none;
    width: 150px;
    height: 40px;
    font-size: 15px;
    color: #fff;
    margin-left: 5px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .enter:hover {
    border: rgba(255, 110, 64, 1) 2px solid;
    cursor: pointer;
    background: #fff;
    color: rgba(255, 110, 64, 1);
  }
  .todo_item{
    position: absolute;
    cursor: move;
    min-width: 215px;
    border-radius: 5px;
    padding: 1em;
  }
  .delete{
    position: absolute;
    right: 7px;
    top: 7px;
    background: none;
    border: none;
    font-weight: bold;
  }
  .delete:hover{
    color: red;
    cursor: pointer;
  }


  @media all and (max-width:430px) {
    .wrapper{
      flex-direction: column;
      padding-bottom: 140px;
    }
    .enter{
      margin-top: 20px;
    }
  }
`;
export default Notes;