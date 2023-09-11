var code = "<tr>";
for (var i = 1; i <= 5; i++) {
  code = code + `<td>`;

  for (var j = 1; j <= 10; j++) {
    code = code + `${i} x ${j} = ${i * j} <br/>`;
  }

  code = code + `</td>`;
}

code = code + `</tr>`;

code = "<tr>";
for (var i = 6; i <= 10; i++) {
  code = code + `<td>`;

  for (var j = 1; j <= 10; j++) {
    code = code + `${i} x ${j} = ${i * j} <br/>`;
  }

  code = code + `</td>`;
}

code = code + `</tr>`;

var html = `<table cellspacing="0" cellpadding="0" border="1" width="100%">${code}</table>`;

document.write(html);
