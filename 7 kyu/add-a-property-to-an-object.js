// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть предусмотрена возможность присвоения этому свойству нового значения. Если свойство уже существует в объекте, то должно быть выдано сообщение об ошибке.


function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) {
    throw new Error('Error message')
  } else {
    obj[prop] = value;
}
}