import React, { useState, useEffect } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [option,setOption] = useState(0)
  const [items, putItems, clearItems] = useStorage()
const handleChange=(key)=>{
  let cpState =[...items];
  for(let item of cpState){
    if(item.key===key){
      item.done=!item.done
    }
  }
 
  putItems(cpState)
  
}
  console.log()
  const handlePutItem=(newItem)=>{
    let cpState =[...items];
    cpState.push(newItem)
    putItems(cpState)
  }
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input handlePutItem={handlePutItem}/>
      <Filter items={useStorage().items} setOption={setOption}/>
      {option===0?(items.map((item,index) => (
        <label key={index} className={item.done===true?('panel-block has-text-grey-light'):('panel-block ')}>
           <TodoItem item={item} handleChange={handleChange} checked={item.done===true}/>
        </label>
      ))):(option===1?(
      
        items.filter((e)=>(e.done===false)).map((item,index)=>(
           <label key={index} className={item.done===true?('panel-block has-text-grey-light'):('panel-block ')}>
           <TodoItem item={item} handleChange={handleChange} checked={item.done===true} />
        </label>
        ))
        
      
      ):(items.filter((e)=>(e.done===true)).map((item,index)=>(
           <label key={index} className={item.done===true?('panel-block has-text-grey-light'):('panel-block ')}>
           <TodoItem item={item} handleChange={handleChange} checked={item.done===true}/>
        </label>
        ))))}
      <div className="panel-block">
        {option===0?(items.length):(option===1?(items.filter((e)=>(e.done===false)).length):(items.filter((e)=>(e.done===true)).length))} items
      </div>
      <div >
        <button onClick={clearItems} className='is-fullwidth button is-danger'>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;