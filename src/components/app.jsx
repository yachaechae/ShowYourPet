import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <div>
        <header>
          <h1>Todolist Timeattack</h1>
        </header>
        <form
          onSubmit={function (e) {
            e.preventDefault(); // 클릭시 새로고침 안되게 함.

            const newTodo = {
              // 새로운 할일을 생성
              id: uuid(),
              title,
              contents,
              isDone: false,
            };
            setTodos([...todos, newTodo]); // 생성한 새로운 할일을 기존 할일과 같이 목록 추가
          }}
        >
          <label>제목</label>
          <input
            value={title}
            onChange={function (e) {
              setTitle(e.target.value); // 입력된 값이 실시간으로 저장
            }}
          />
          <label>내용</label>
          <input
            value={contents}
            onChange={function (e) {
              setContents(e.target.value);
            }}
          />
          <button type="submit">추가</button>
        </form>
        <div>
          <h1>리스트영역</h1>
          <h2>할일 목록</h2>
          {todos
            .filter(function (todo) {
              return todo.isDone === false; // filter메서드로 isDone(완료 여부)가 false인 리스트를 filtering
            })
            .map(function (todo) {
              // map메서드로 filtering된 목록들을 나열
              return (
                <div key={todo.id}>
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button
                    onClick={function () {
                      const completeTodos = todos.map(function (item) {
                        // 클릭 시 map함수로 다시 배열
                        if (todo.id === item.id) {
                          return { ...item, isDone: true }; // 만약 todo.id와 item.id가 같으면 item목록을 나열후 isDone 완료 여부가 !item.isDone으로 true인 목록과 같이 배열(?) 그럼 true나 false를 사용하지 않고 !item.isDone으로 넣는 이유는?
                        } else {
                          return item;
                        }
                      });
                      setTodos(completeTodos);
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={function () {
                      const deletedTodos = todos.filter(function (item) {
                        return item.id !== todo.id;
                      });
                      setTodos(deletedTodos);
                    }}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
          <h2>완료 목록</h2>
          {todos
            .filter(function (todo) {
              // filter를 사용하여 todo.isDone이 완료가 된(true인) 목록들을 filtering
              return todo.isDone === true;
            })
            .map(function (todo) {
              // filtering된 목록들을 map메서드로 나열
              return (
                <div key={todo.id}>
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button
                    onClick={function () {
                      const completeTodos = todos.map(function (item) {
                        if (todo.id === item.id) {
                          return { ...item, isDone: !item.isDone};
                        } else {
                          return item;
                        }
                      });
                      setTodos(completeTodos);
                    }}
                  >
                    취소
                  </button>
                  <button
                    onClick={function () {
                      const deletedTodos = todos.filter(function (item) {
                        return item.id !== todo.id;
                      });
                      setTodos(deletedTodos);
                    }}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
