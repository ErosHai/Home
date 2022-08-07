const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const add = document.getElementById('add')
const deletes = document.getElementById('delete')
const items = document.getElementById('items')
const formList = []


class RenderFeature {
  render() {

    let htmlStr = ''

    formList.forEach(function (item) {
      htmlStr = htmlStr + `
      <div id="item">
        <p>内容：${item.content}</p>
        <p>时间：${item.date} ${item.time}</p>
      </div>
      `
      console.log(formList)
    })

    items.innerHTML = htmlStr
  }
}

const r1 = new RenderFeature()

// 渲染
// function render() {
//   let htmlStr = ''
//   formList.forEach(function (item) {
//     htmlStr = htmlStr + `
//       <div>
//         <p>内容：${item.content}</p>
//         <p>时间：${item.date} ${item.time}</p>
//       </div>
//       `
//     console.log(formList)
//   })
//   items.innerHTML = htmlStr
// }

add.addEventListener('click', function () {
  formList.unshift({
    content: content.value,
    date: date.value,
    time: time.value
  })
  r1.render()
})


deletes.addEventListener('click', function () {
  formList.shift()
  r1.render()
})