class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random(); // Генеруємо випадковий підпис ключа
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key; // Зберігаємо ключ, переданий людині
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false; // двері закриті за замовчуванням
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getKey().getSignature()} прийшов додому.`);
      } else {
        console.log('Двері зачинені, і зайти неможливо.');
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('Двері відчинено.');
      } else {
        console.log('Неправильний ключ, двері залишаються зачиненими.');
      }
    }
  }
  
  // Тестування сценарію
  const key = new Key(); // Створюємо ключ
  const house = new MyHouse(key); // Створюємо будинок з цим ключем
  const person = new Person(key); // Створюємо людину з цим ключем
  
  house.openDoor(person.getKey()); // Людина використовує ключ для відчинення дверей
  house.comeIn(person); // Людина намагається зайти в будинок
  


export {};