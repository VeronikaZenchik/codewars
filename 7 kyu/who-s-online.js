// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// The input data has the following structure:
// const whoOnline = [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]

// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }

// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).


// SOLUTION:


const friends = [{
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

const whosOnline = (friends) => {
    const result = {
      online: [],
      offline: [],
      away: []
    }
    if (friends.length === 0) { //  если массив пуст, возвращаем пустой объект
      return {}; 
  }
    for (let i = 0; i < friends.length; i++) { // перебираем наш массив
      if (friends[i].status === 'online') { // если онлайн статус, то падаем в след 
        if (friends[i].lastActivity <= 10) { // если меньше 10 минут то пушаем в онлайн
          result.online.push(friends[i].username);
        } else {
          result.away.push(friends[i].username); // если меньшу то в авэй
        }
      } else if (friends[i].status === 'offline') { // если у нас оффлайн то пушаем в оффлайн
        result.offline.push(friends[i].username);
      }
    };

    if (result.online.length === 0) {
      delete result.online;
    } 
    if (result.offline.length === 0){
      delete result.offline;
    } 
    if (result.away.length === 0) {
      delete result.away;
    }
    return result // выводим резульатт
  }
  console.log(whosOnline(friends));




  // **Некорректная логика удаления пустых массивов**: Ваша текущая логика удаления пустых массивов приводит к тому, что одно из свойств будет удалено даже в случае, если все массивы имеют значения. Рекомендуется проверить поверхность каждого свойства отдельно без использования `else if`.
// это если использовать if else