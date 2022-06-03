import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
import {getKey} from "../lib/util";
function Input( {handlePutItem} ) {

  const [todo, setTodo]=React.useState('')
 const handleInput =(e)=>{
    setTodo(e.target.value);
 }
  const handleChange=(e)=>{
    if(e.key==="Enter"&&todo.length>0){
        handlePutItem({key:getKey(), text: todo,done:false}); 
        setTodo('')
    }
  
  }
  return (
    <div className="panel-block columns">
        <input type='text' placeholder='Todoを入力してください'  className='input column is-info ' onKeyDown={(e)=>handleChange(e)} value={todo} onInput={(e)=>handleInput(e)}/>
        
    </div>
  );
}

export default Input;
