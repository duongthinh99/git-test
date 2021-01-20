const getPost = () => {
  // Wrapper
  let postWrapper = document.querySelector("#wallpaper_img").src;
  console.log(postWrapper);
  // Title
  // ============================
  let title = document.querySelector(".blog__content header .blog__title").textContent.trim();
  // ============================

  // Category
  // ============================
  let category = document.querySelectorAll(".blog__content header .entry-crumbs span");
  category = [...category]
  category = category.map(ele => ele.textContent.trim());
  // ============================

  // // Tags
  let tags = document.querySelectorAll('.tags li');
  if (!tags) {
    tags = []
  }else{
    tags = [...tags]
    tags = tags.map(ele => {
      let href = ele.children[0].href.replace("https://linkneverdie.com/", "");
      let text = ele.textContent.trim();
      return {
        href: href,
        text: text
      }
    })
  }
  
  // ============================

  // View like comment
  // ============================
  let commentView = document.querySelectorAll(".blog__content header .blog__meta .comment_view p");
  commentView = [...commentView]
  commentView = commentView.map(ele => parseInt(ele.textContent.trim()))
  // ============================

  // Description
  // ============================
  let description1 = document.querySelector('#gioithieu_div').textContent.trim();
  description1 = description1.slice(0, 230)+"..."
  let description2 = document.querySelector('#gioithieu_div').innerHTML.trim();
  // ============================

  // About
  // ============================
  let about = document.querySelectorAll(".infos li");
  about = [...about];
  about = about.map(ele => {
    let infoName = ele.children[0].textContent.trim();
    let infoDetail = ele.children[1];
    if (infoName === "Phát hành" || infoName === "Cập nhật") {
        let date = infoDetail.textContent.trim();
        date = date.split("/");
        let day = date[0];
        date[0] = date[1]
        date[1] = day
        date.join("-")
        infoDetail = new Date(date).toJSON()
    }else{
      infoDetail = infoDetail.textContent.trim();
    }
        
    return {
      infoName: infoName,
      infoDetail: infoDetail
    }
  })
  // ============================

  // Youtube
  // ============================
  let youtube = document.querySelector("#trailer_div iframe");
  if (youtube === null) {
    youtube = "";
  }else{
    indexOf = youtube.src.indexOf("?")
    youtube = youtube.src.slice(0,indexOf)
  }// ============================

  // Slide Show
  // ============================
  let postSlide = document.querySelectorAll("#thumbs_div .owl-item .thumbs-item img");
  if (!postSlide) {
    postSlide = []
  }else{
    postSlide = [...postSlide]
    postSlide = postSlide.map(ele => ele.src);
  }
  //   ============================

  // Download
  // ============================
  // let size = document.querySelector(".card-title p");
  // if (size === undefined) {
  //   size = "Dung lượng: 0"
  // }else{
  //   size = size.textContent.trim();
  // }
  
  // // 
  // let sourceTitles = document.querySelectorAll(".nav.nav-tabs.nav--tabs2 li")
  // sourceTitles = [...sourceTitles];
  // sourceTitles = sourceTitles.map( ele => ele.textContent.trim())
  // // 
  // let sourceHref = document.querySelectorAll(".tab-content-wrapper p a");
  // sourceHref = [...sourceHref];
  // sourceHref = sourceHref.map( ele => ele.href);
  // let source = []
  // // if (sourceHref.length !== sourceTitles.length) {
  // //   sourceHref = new Array(sourceTitles.length).fill("./#")
  // // }
  // source = sourceTitles.map( (ele, index) => ({
  //   sourceTitle : ele,
  //   sourceHref: sourceHref[index]
  // }))
  
  //
  
  // Random tags softWare
  // Array.prototype.randomArr = function(){
  //   let index = Math.floor(Math.random() * this.length)
  //   return this[index]
  // }
  // let tags = [
  //   {
  //     "href": "system-software/?page=1",
  //     "text": "Hệ Thống - Bảo Mật"
  //   },
  //   {
  //     "href": "office-software/?page=1",
  //     "text": "Văn phòng"
  //   },
  //   {
  //     "href": "multimedia-software/?page=1",
  //     "text": "Đa phương tiện"
  //   },
  //   {
  //     "href": "anti-virus-software/?page=1",
  //     "text": "Anti-Virus"
  //   },
  //   {
  //     "href": "programming-design-software/?page=1",
  //     "text": "Lập trình - Thiết kế"
  //   },
  //   {
  //     "href": "operating-system-software/?page=1",
  //     "text": "Hệ điều hành"
  //   },
  //   {
  //     "href": "utilities-software/?page=1",
  //     "text": "Tiện ích - Ứng dụng"
  //   }
  // ]
  // ============================
  return {
    wrapper: postWrapper,
    title: title,
    tags: tags,
    other: {
      views: commentView[0],
      like: commentView[1],
      comment: commentView[2]
    },
    description1: description1,
    description2: description2,
    about: about,
    size: "Dung lượng: ??? GB",
    youtube: youtube,
    postSlide: postSlide.length,
    source: [
      {
        "sourceTitle": "Google Drive",
        "sourceHref": "#" 
      },
      {
        "sourceTitle": "MEGA",
        "sourceHref": "#" 
      },
      {
        "sourceTitle": "4Share",
        "sourceHref": "#" 
      }
    ]
  }
}

module.exports = getPost