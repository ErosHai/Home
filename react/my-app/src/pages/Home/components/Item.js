const Item = ({id, note, date, time, deleteData}) => {

  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div className='item'>
      <div>
        <span>{note}</span>
        <span>{`${date} ${time}`}</span>
      </div>
      <button onClick={deleteItem} className='delete'>删除</button>
    </div>
  );
};


export default Item