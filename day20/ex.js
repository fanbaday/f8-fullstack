var sections = [
  {
    heading: `Tiêu đề bài viết `,
    img: `https://fastly.picsum.photos/id/15/500/500.jpg?hmac=YIdwbnReqRQwfTvAZijylkS_2Oya-9yQRKHpNqd5wT4`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minima
    dolorem ratione iure assumenda quibusdam veniam perferendis quaerat
    similique quasi, dignissimos pariatur excepturi odit quo ad quod
    asperiores eos harum.`,
  },
  {
    heading: `Tiêu đề bài viết `,
    img: `https://fastly.picsum.photos/id/15/500/500.jpg?hmac=YIdwbnReqRQwfTvAZijylkS_2Oya-9yQRKHpNqd5wT4`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minima
    dolorem ratione iure assumenda quibusdam veniam perferendis quaerat
    similique quasi, dignissimos pariatur excepturi odit quo ad quod
    asperiores eos harum.`,
  },
  {
    heading: `Tiêu đề bài viết `,
    img: `https://fastly.picsum.photos/id/15/500/500.jpg?hmac=YIdwbnReqRQwfTvAZijylkS_2Oya-9yQRKHpNqd5wT4`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minima
    dolorem ratione iure assumenda quibusdam veniam perferendis quaerat
    similique quasi, dignissimos pariatur excepturi odit quo ad quod
    asperiores eos harum.`,
  },
  {
    heading: `Tiêu đề bài viết `,
    img: `https://fastly.picsum.photos/id/15/500/500.jpg?hmac=YIdwbnReqRQwfTvAZijylkS_2Oya-9yQRKHpNqd5wT4`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minima
    dolorem ratione iure assumenda quibusdam veniam perferendis quaerat
    similique quasi, dignissimos pariatur excepturi odit quo ad quod
    asperiores eos harum.`,
  },
  {
    heading: `Tiêu đề bài viết `,
    img: `https://fastly.picsum.photos/id/15/500/500.jpg?hmac=YIdwbnReqRQwfTvAZijylkS_2Oya-9yQRKHpNqd5wT4`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minima
    dolorem ratione iure assumenda quibusdam veniam perferendis quaerat
    similique quasi, dignissimos pariatur excepturi odit quo ad quod
    asperiores eos harum.`,
  },
];

var newSection = sections.map(function (section, index) {
  var count = 1;
  return `<div class="section${index % 2 !== 0 ? "2" : ""}">
    <img
      src="${section.img}"
      alt=""
    />
    <div class="content">
      <h1 class="heading">${section.heading} ${++count}</h1>
      <p class="desc">
        ${section.desc}
      </p>
    </div>
  </div>`;
});

document.write(newSection.join(""));
