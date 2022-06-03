
import React from 'react';
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({items,setOption}  ) {
  const handleClick=(option)=>{
    setOption(option)
  }
  
  return (
    <div className="panel-tabs">
      
        <button onClick={()=>handleClick(0)}>
          全て
        </button>
          <button  onClick={()=>handleClick(1)}>
          未完了
        </button>
          <button onClick={()=>handleClick(2)}>
          完了済み
        </button>
    
    </div>
  );
}

export default Filter