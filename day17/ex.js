var content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam, ipsa reprehenderit, est, voluptate deserunt maxime debitis nobis vero ipsum recusandae voluptatem odit. Aperiam hic eligendi eaque maxime minus explicabo.";

content = content.replaceAll(" ", "</span> <span>");

content = `<span>${content}</span>`;

console.log(content);

var index = 0;
setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char === ">" && charNext !== " ") {
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    document.body.innerHTML = html;
  }

  index++;

  if (index === content.length) {
    index = 0;
  }
}, 50);

document.write(content);
