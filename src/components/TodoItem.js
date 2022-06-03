
import React from 'react'
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item,handleChange}  ) {
  // console.log(item)
  return (
    <label className={item.done==true?('panel-block has-text-grey-light'):(' panel-block ')}>
       <input type="checkbox" onClick={()=>handleChange(item.key)}/>
            {item.text}
    </label>
  );
}

export default TodoItem;