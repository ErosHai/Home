import Item from "./Item";

const List = ({listData, deleteDate}) => {
  return <div className='list'>
    {
      listData.map(item => {
        const {note, date, time, id} = item
        return <Item key={id} id={id} note={note} date={date} time={time} deleteDate={deleteDate}/>
      })
    }
  </div>
}

export default List