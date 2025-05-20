// Задача 1
alert("Задача 1")

let x = Number(prompt("Введите х: "))
let y = Number(prompt("Введите у: "))
let z = Number(prompt("Введите z: "))

if (x == 0 || y == 0 || z == 0) {
    alert("Ноль - это перебор!")
} else if (x >= 0 && y <= 0 && z <= 0) {
    alert ("Свет в конце туннеля - только одно положительное")
} else if (x <= 0 && y >= 0 && z <= 0) {
    alert ("Свет в конце туннеля - только одно положительное")
} else if (x <= 0 && y <= 0 && z >= 0) {
    alert ("Свет в конце туннеля - только одно положительное")
} else if (x >= 0 && y >= 0 && z <= 0) {
    alert ("Два в плюсе, один в минусе")
} else if (x >= 0 && y <= 0 && z >= 0) {
    alert ("Два в плюсе, один в минусе")
} else if (x <= 0 && y >= 0 && z >= 0) {
    alert ("Два в плюсе, один в минусе")
} else if (x <= 0 && y <= 0 && z <= 0) {
    alert ("Темная сторона математики...")
} else if (x >= 0 && y >= 0 && z >= 0) {
    alert ("Все числа положительные")
}

// Задача 2
alert("Задача 2")

let role = "user" // admin, user, banned, quest
let karma = 95 // -100/100

if (role == "banned") {
    alert ("Доступ запрещен!")
} else if (role == "admin") {
    alert ("Полный доступ!")
} else if (role == "user" && karma >= 50 && karma < 100) {
    alert ("Добро пожаловать!")
} else if (role == "user" && karma < 50 && karma > -100) {
    alert ("Подозрительная активность...")
} else if (role == "quest") {
    alert ("Вход только для чтения")
} else if (role != "quest" && role != "user" && role != "admin" && role != "banned") {
    alert ("Ошибка: неизвестная роль")
} else if (karma > 100 || karma < -100) {
    alert ("Ошибка: недопустимое значение кармы")
}