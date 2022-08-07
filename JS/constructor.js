 class Car {
    constructor(initName) {
      this.name = initName
    }

    start() {
      console.log('Engien', this.name)
    }
  }

  //extends 继承父级的函数  super 继承父级的构造函数
  class LandRover extends Car {
    constructor(carName) {
      super(carName)
    }

    start2() {
      super.start()
      console.log('start')
    }

    start() {
      console.log('出发')
    }
  }

  const car = new Car('BMW')
  const myCars = new LandRover('Land rover')
  console.log(car.name);
  console.log(myCars.name)
  myCars.start()
  myCars.start2()



  /*  let classA = [
      {
        name: 'xiao ming',
        age: 16,
        score: 100
      },
      {
        name: 'zhang san',
        age: 18,
        score: 90
      },
      {
        name: 'li si',
        age: 15,
        score: 80
      }
    ]
    for (let i = 0; i < classA.length; i++) {
      console.log('name: ', classA[i].name)
      console.log('age: ', classA[i].age)
      console.log('score: ', classA[i].score)
    }*/

  // function addNum(num1, num2) {
  //   console.log(num1 + num2)
  // }
  //
  // addNum(1, 2)

  // 带参数的函数
  /*  function addMoney(price1, price2, discount) {
      let result = price1 + price2 - discount
      let message = '普通会员'

      if (result >= 50000) {
        message = '尊龙会员'
        return message
      }
      if (result >= 20000) {
        message = '尊龙会员'
        return message
      }
      return message
    }

    let msg = addMoney(100000, 2000, 100)
    console.log(msg)*/


  // 构造函数
  // function creatCard(initName) {
  //   this.name = initName
  // }
  //
  // const a1 = new creatCard('xiaoming')
  // console.log(a1)

  // class 构造函数
  /*  class Card {
      constructor(initName,initAge) {
        this.name = initName
        this.age = initAge
      }
    }

    const card = new Card('zhang san',28)
    console.log(card)
    console.log(card.name)
    console.log(card.age)

    // 申明函数的三种方式
    function hello(name) {
    }

    let hello1 = function () {
    }

    let hello2 = () => {
    }*/