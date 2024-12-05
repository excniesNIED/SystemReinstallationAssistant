const navbar_items = [
  {
    "title": "系统镜像",
    "href": "appearance.html",
    "icon": "<i class='icons10-sun'></i>"
  },
  {
    "title": "装机工具",
    "href": "classes.html",
    "icon": "<i class='icons10-puzzle'></i>"
  },
  {
    "title": "重装教程",
    "href": "colors.html",
    "icon": "<i class='icons10-color-palette'></i>"
  },
  {
    "title": "系统激活",
    "href": "icons.html",
    "icon": "<i class='icons10-deathly-hallows'></i>"
  },
];

async function init_navbar_ul (active_item="Home", path="root") {

  for (const navbar_item of navbar_items) {
    const is_active = navbar_item.title === active_item ? 'active' : init_navbar_top_ul(active_item);
    const is_path = path === "root" ? "./docs/" : "./";
    navbar_item.icon = navbar_item.icon?.replace('./', is_path);

    let item;
    if(navbar_item.href == "#") {
      item = document.createElement('div');
      item.innerHTML = `<h1>${navbar_item.title}</h1><div class="app-hr"></div>`;
    }
    else {
      item = document.createElement('li');
      item.className = "app-navbar-list-item";
      item.innerHTML = `<a href=${navbar_item.title === active_item
                          ? "javascript:;"
                          : is_path+navbar_item.href} class="${is_active}">
                          ${navbar_item.icon}
                          <span>${navbar_item.title}</span>
                        </a>`;
    }
    document.getElementById("app-navbar-list").appendChild(item);
  };
}

function init_navbar_top_ul(active_itm) {
  let navbar_items = document.getElementsByClassName("app-navbar-list-item");
  Array.from(navbar_items).forEach((el) => {
    if(el.innerText == active_itm) {
      el.querySelector("a").classList.add("active");
    }
  });
}