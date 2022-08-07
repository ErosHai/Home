import {useState} from 'react'
import {v4} from 'uuid'
const Edit = ({add}) => {

  const [note, setNote] = useState('')
  function noteChange(e) {
    setNote(e.target.value)
  }

  const [date, setData] = useState('')
  function dateChange(e) {
    setData(e.target.value)
  }

  const [time, setTime] = useState('')
  function timeChange(e) {
    setTime(e.target.value)
  }

  console.log(note, date, time)
  function addItem() {
    add(function (prev) {
      return [{
          id:v4(),
          note,
          date,
          time
        },
        ...prev
      ]
    })
  }

  return <div>
    <h1>备忘录</h1>
    <p>记事:</p>
    <input type="text" value={note} onChange={noteChange}/>
    <p>日期:</p>
    <input type="date" value={date} onChange={dateChange}/>
    <p>时间:</p>
    <input type="time" value={time} onChange={timeChange}/>
    <button className='btn' onClick={addItem}>新增</button>
  </div>
}

export default Edit