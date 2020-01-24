  // Создаю переменную 
  let num = 266219;

  // Превращаю число в строку, разделяю все по одному символу и умножаю полученные символы, превращаю обратно все в число
  let s = num.toString();
  let sum = 1;
  for( let i = 0; i < s.length; i++ )
     sum *= Number( s[i] );

  // Вывожу полученное число в консоль
  console.log(sum);

  // Возвожу полученное число в степень
  let d = sum**3;

  // Вывожу первые 2 цифры, полученного числа в тег div
  let g = d.toString();
  let f = g.substr(0, 2);
  let t = Number(f);
  document.getElementById("result").innerHTML=t;