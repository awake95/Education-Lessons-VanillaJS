let lang
lang = {
   ru: ('Понедельник' + ',' + ' ' + 'Вторник' + ',' + ' ' + 'Среда' + ',' + ' ' + 'Четверг' + ',' + ' ' + 'Пятница' + ',' + ' ' + 'Суббота' + ',' + ' ' + 'Воскресенье'),
   en: ('Monday' + ',' + ' ' + 'Tuesday' + ',' + ' ' + 'Wednesday' + ',' + ' ' + 'Thursday' + ',' + ' ' + 'Friday' + ',' + ' ' + 'Saturday' + ',' + ' ' + 'Sunday')
}
let messege = prompt('Напишите желаемый язык страницы: русский или английский');

if (messege === 'Русский') {
   console.log(lang.ru);
} else if( messege === 'русский'){
   console.log(lang.ru);
} else if( messege === 'Английский'){
   console.log(lang.en);
} else if( messege === 'английский'){
   console.log(lang.en);
} else {
   alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');
}

switch (messege) {
   case 'Русский':
      console.log(lang.ru);
      break;
   case 'русский':
      console.log(lang.ru);
      break;
   case 'Английский':
      console.log(lang.en);
      break;
   case 'английский':
      console.log(lang.en);
      break;
   default: 
   alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');
}

let languageOfPage = (messege === 'Русский') ? lang.ru :
(messege === 'русский') ? lang.ru :
(messege === 'Английский') ? lang.en :
(messege === 'английский') ? lang.en :
alert('Язык указан неверно, перезагрузите страницу и попробуйте снова');

console.log(languageOfPage);

let profession = prompt('Введите имя, а я скажу его должность');

let namePerson = ( profession === 'Артем' ) ? 'директор' :
   ( profession === 'Максим' ) ? 'преподаватель' :
   'студент';

console.log('Должность:', namePerson);