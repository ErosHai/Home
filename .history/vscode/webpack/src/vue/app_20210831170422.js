export default{
    template:`
    <div>
      <h2> {{ msg }}</h2>
      <h2> {{ name }}</h2>
    </div>
  `,
  data(){
    return {
      msg: 'Hello Webpack',
      name: 'Yang Li'
    }
  }
}