import {useState} from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  var array = [2, 3, 4];
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4>{글제목[i]}<span onClick={()=>{
                let copy = [...좋아요]
                copy[i] = copy[i] + 1
                좋아요변경(copy)}}>❤️</span>{좋아요[i]}</h4>
              <p>2월 7일 발행</p>
            </div>
          )
        })
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
