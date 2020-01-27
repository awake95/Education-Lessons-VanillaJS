
let lang = prompt('Напишите желаемый язык страницы: русский или английский', 'русский');
let arrayRu = ['Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let arrayEn = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


if (lang === 'русский') {
   console.log(arrayRu);
} else if( lang === 'английский'){
   console.log(arrayEn);
} else {
   alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');
}

switch (lang) {
   case 'русский':
      console.log(arrayRu);
      break;
   case 'английский':
      console.log(arrayEn);
      break;
   default: 
   alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');
}

let date = {
   ru: ['Понедельник' + ',' + ' ' + 'Вторник' + ',' + ' ' + 'Среда' + ',' + ' ' + 'Четверг' + ',' + ' ' + 'Пятница' + ',' + ' ' + 'Суббота' + ',' + ' ' + 'Воскресенье'],
   en: ['Monday' + ',' + ' ' + 'Tuesday' + ',' + ' ' + 'Wednesday' + ',' + ' ' + 'Thursday' + ',' + ' ' + 'Friday' + ',' + ' ' + 'Saturday' + ',' + ' ' + 'Sunday']
}

let languageOfPage = (lang === 'русский') ? date.ru :
(lang === 'английский') ? date.en :
alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');

console.log(languageOfPage);

let profession = prompt('Введите имя, а я скажу его должность');

let namePerson = ( profession === 'Артем' ) ? 'директор' :
   ( profession === 'Максим' ) ? 'преподаватель' :
   'студент';

console.log('Должность:', namePerson);
