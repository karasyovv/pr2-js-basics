/**
 * Практична робота №2: Основи JavaScript
 * Виконав: Карасьов Ігор, група РПЗ 23 2/9
 */

// ==========================================
// ЗАВДАННЯ 1: Підрахунок літер у рядках
// ==========================================

const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

// Функція підрахунку входжень певної літери в рядок (використовує for, .length та .charAt())
function countLetter(str, letter = 'a') {
  if (typeof str !== 'string' || typeof letter !== 'string') return 0;

  let count = 0;
  const target = letter.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === target) {
      count++;
    }
  }
  return count;
}

// Функція повертає рядок, у якому більше зазначених літер
function getRow(firstRow, secondRow, letter = 'a') {
  const count1 = countLetter(firstRow, letter);
  const count2 = countLetter(secondRow, letter);

  if (count2 > count1) {
    return secondRow;
  } else if (count1 > count2) {
    return firstRow;
  } else {
    return `Кількість літер однакова (${count1})`;
  }
}

// Перевірка Завдання 1 в консолі
console.log('--- Завдання 1 ---');
console.log(getRow(firstRow, secondRow)); // 'You can say that again'


// ==========================================
// ЗАВДАННЯ 2: Форматування номерів телефону
// ==========================================

function formattedPhone(phone) {
  if (typeof phone !== 'string') return 'Невірний формат номера телефону';
  const p = phone.trim();

  // 1) +380XXXXXXXXX (13 символів)
  if (/^\+380\d{9}$/.test(p)) {
    return `+38 (${p.slice(3, 6)}) ${p.slice(6, 9)}-${p.slice(9, 11)}-${p.slice(11, 13)}`;
  }
  // 2) +80XXXXXXXXX (12 символів, приклад з методички)
  if (/^\+80\d{9}$/.test(p)) {
    return `+8 (${p.slice(2, 5)}) ${p.slice(5, 8)}-${p.slice(8, 10)}-${p.slice(10, 12)}`;
  }
  // 3) 80XXXXXXXXX (11 цифр, завдання *)
  if (/^80\d{9}$/.test(p)) {
    return `+38 (${p.slice(1, 4)}) ${p.slice(4, 7)}-${p.slice(7, 9)}-${p.slice(9, 11)}`;
  }
  // 4) 0XXXXXXXXX (10 цифр, завдання *)
  if (/^0\d{9}$/.test(p)) {
    return `+38 (${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6, 8)}-${p.slice(8, 10)}`;
  }
  // 5) 380XXXXXXXXX (12 цифр без +)
  if (/^380\d{9}$/.test(p)) {
    return `+38 (${p.slice(2, 5)}) ${p.slice(5, 8)}-${p.slice(8, 10)}-${p.slice(10, 12)}`;
  }

  // Якщо формат не підходить (завдання *)
  return 'Невірний формат номера телефону';
}

// Перевірка Завдання 2 в консолі
console.log('--- Завдання 2 ---');
console.log(formattedPhone('+80664567890')); // +8 (066) 456-78-90
console.log(formattedPhone('+380664567890')); // +38 (066) 456-78-90
console.log(formattedPhone('80971234567'));   // +38 (097) 123-45-67
console.log(formattedPhone('0671234567'));    // +38 (067) 123-45-67
console.log(formattedPhone('12345'));         // Невірний формат номера телефону


// ==========================================
// ЗАВДАННЯ ПІД ЗІРОЧКОЮ (*) (prompt / alert)
// ==========================================

// Інтерактивний підрахунок літер
function runTask1() {
  const row1 = prompt('Введіть перший рядок:', 'Slow and steady wins the race');
  if (row1 === null) return;

  const row2 = prompt('Введіть другий рядок:', 'You can say that again');
  if (row2 === null) return;

  const letter = prompt('Введіть літеру для підрахунку (наприклад: a):', 'a') || 'a';
  const target = letter.trim().charAt(0) || 'a';

  const c1 = countLetter(row1, target);
  const c2 = countLetter(row2, target);
  const result = getRow(row1, row2, target);

  alert(
    `Результат підрахунку літери "${target}":\n` +
    `1-й рядок: "${row1}" (${c1})\n` +
    `2-й рядок: "${row2}" (${c2})\n\n` +
    `Рядок, де літер більше:\n--> "${result}"`
  );
}

// Інтерактивне форматування номеру телефону
function runTask2() {
  const input = prompt(
    'Введіть номер телефону (+380..., 80... або 0...):',
    '+380664567890'
  );
  if (input === null) return;

  const formatted = formattedPhone(input);
  alert(`Введено: ${input}\nРезультат: ${formatted}`);
}


// ==========================================
// ОБРОБНИКИ ДЛЯ КНОПОК НА СТОРІНЦІ
// ==========================================

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn-task1');
    if (btn1) btn1.addEventListener('click', runTask1);

    const btn2 = document.getElementById('btn-task2');
    if (btn2) btn2.addEventListener('click', runTask2);
  });
}

