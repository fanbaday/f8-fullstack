var code = "";
for (var rows = 1; rows <= 8; rows++) {
  code = code + `<tr>`;
  for (var cols = 1; cols <= 8; cols++) {
    var total = rows + cols;
    code = code + `<td ${total % 2 !== 0 ? 'class="black"' : ""}></td>`;
  }
  code = code + `</tr>`;
}

var html = `<table border="1" cellpadding="0" cellspacing="0">${code}</table>`;

document.write(html);
// {/* <tr>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr> */}
