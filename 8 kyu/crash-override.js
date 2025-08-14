// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.



//SOLUTION:

function aliasGen(first, last){
    let firstLetter = first[0].toUpperCase()
    let lastLetter = last[0].toUpperCase()

    // Проверяем, являются ли первые символы буквами A-Z
    if (!/[A-Z]/.test(firstLetter) || !/[A-Z]/.test(lastLetter)) {
        return "Your name must start with a letter from A - Z.";
    }

        // Используем предопределенные объекты firstName и surname
    // (предполагаем, что они доступны в области видимости)
    const hackerFirstName = firstName[firstLetter];
    const hackerLastName = surname[lastLetter];

    return `${hackerFirstName} ${hackerLastName}`;
}

console.log(aliasGen("Fahima", "Tash"));


