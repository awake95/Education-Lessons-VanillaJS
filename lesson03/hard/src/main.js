let lang = [
   arrayRu = ('Понедельник' + ',' + ' ' + 'Вторник' + ',' + ' ' + 'Среда' + ',' + ' ' + 'Четверг' + ',' + ' ' + 'Пятница' + ',' + ' ' + 'Суббота' + ',' + ' ' + 'Воскресенье'),
   arrayEn = ('Monday' + ',' + ' ' + 'Tuesday' + ',' + ' ' + 'Wednesday' + ',' + ' ' + 'Thursday' + ',' + ' ' + 'Friday' + ',' + ' ' + 'Saturday' + ',' + ' ' + 'Sunday'),
]
let messege = prompt('Напишите желаемый язык страницы: русский или английский', 'русский');

if (messege === 'русский') {
   console.log(arrayRu);
} else if( messege === 'английский'){
   console.log(arrayEn);
} else {
   alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');
}

switch (messege) {
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

let languageOfPage = (messege === 'русский') ? date.ru :
(messege === 'английский') ? date.en :
alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');

console.log(languageOfPage);

let profession = prompt('Введите имя, а я скажу его должность');

let namePerson = ( profession === 'Артем' ) ? 'директор' :
   ( profession === 'Максим' ) ? 'преподаватель' :
   'студент';

console.log('Должность:', namePerson);
