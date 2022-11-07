const menus = document.querySelector(`.menus`);
const menu = document.querySelector(`.menu`);
const fix = document.querySelector(`.fix`);
const body = document.querySelector(`.body`);
const container = document.querySelector(`.container`);
const close = document.querySelector(`.close`);
const search = document.querySelector(`.search`);
const searchIcon = document.querySelector(`.searchIcon`);
const dashboard = document.querySelector(`.dashboard`);
const mshadow = document.querySelector(`.mshadow`);
const topmenus = document.querySelectorAll(`.topmenus`);
const popup = document.querySelector(`.popup`);
const profile2Container = document.querySelector(`.profile2Container`);
const profile3Container = document.querySelector(`.profile3Container`);
const profile4Container = document.querySelector(`.profile4Container`);
const profile = document.querySelector(`.profile`);
const notifications = document.querySelector(`.notifications`);
const chats = document.querySelector(`.chats`);
const hold1 = document.querySelector(`.hold1`);
const main = document.querySelector(`.main`);
const analyticsContainer = document.querySelector(`.analyticsContainer`);

document.addEventListener("scroll", () => {
  if (window.scrollY > 40 && window.innerWidth < 1227) {
    fix.style.background = `white`;
    fix.style.boxShadow = ` 0 0 20px rgb(0, 0, 0, 0.2)`;
  } else if (window.scrollY < 40 && window.innerWidth < 1227) {
    fix.style.background = ``;
    fix.style.boxShadow = ``;
    fix.style.padding = `0.5rem 4vw`;
  }
  if (window.scrollY > 40 && window.innerWidth > 1227) {
    fix.style.background = `rgb(250, 251, 251)`;
  } else if (window.scrollY < 40 && window.innerWidth > 1227) {
    fix.style.background = `rgb(250, 251, 251)`;
  }
});

// script for displaying navigation bar
const menuarr = [
  {
    icon: `living`,
    text: `Dashboard`,
  },
  {
    icon: `monitoring`,
    text: `Analytical`,
  },
  {
    icon: `assignment_turned_in`,
    text: `eCommerce`,
  },
  {
    icon: `chat`,
    text: `Chat`,
  },
  {
    icon: `mail`,
    text: `Mail`,
  },
  {
    icon: `description`,
    text: `Notes`,
  },
  {
    icon: `calendar_month`,
    text: `Calendar`,
  },
  {
    icon: `groups`,
    text: `Customers`,
  },
  {
    icon: `person`,
    text: `User Profile`,
  },
  {
    icon: `warning`,
    text: `Alert`,
  },
  {
    icon: `attach_money`,
    text: `Pricing`,
  },
  {
    icon: `payments`,
    text: `Payments`,
  },
  {
    icon: `feed`,
    text: `Feed`,
  },
  {
    icon: `login`,
    text: `Login`,
  },
  {
    icon: `how_to_reg`,
    text: `Register`,
  },
  {
    icon: `restart_alt`,
    text: `Logout`,
  },
];

const newarr = menuarr.map((each) => {
  if (each.icon === `living`) {
    return `
    <a class="Con1">
          <span class="material-symbols-outlined"> ${each.icon} </span>
          <p class="p">${each.text}</p>
        </a>`;
  }
  return `
   <a class="Con">
          <span class="material-symbols-outlined"> ${each.icon} </span>
          <p class="p">${each.text}</p>
        </a>`;
});

container.innerHTML = newarr.join(` `);

// script when hovering the navigation bar
menus.addEventListener(`mouseover`, () => {
  menus.style.overflowY = `scroll`;
});
menus.addEventListener(`mouseout`, () => {
  menus.style.overflowY = `hidden`;
});

// script for opening and closing the search bar
searchIcon.addEventListener(`click`, () => {
  search.style.display = `block`;
  body.style.height = `${100}vh`;
  body.style.overflowY = `hidden`;
});

close.addEventListener(`click`, () => {
  search.style.display = `none`;
  body.style.height = ``;
  body.style.overflowY = ``;
});

// script for opening and closing the menu bar
menu.addEventListener(`click`, () => {
  if (window.innerWidth > 1226) {
    menus.style.display = ``;
    menus.classList.toggle(`menu2`);
    dashboard.classList.toggle(`dashboard2`);
    popup.className = `popup`;
    chats.className = `chats`;
    notifications.className = `notifications`;
    hold1.className = `hold1`;
  }
  if (window.innerWidth < 1227) {
    menus.style.display = `block`;
    mshadow.style.display = `block`;
    body.classList.toggle(`body2`);
    popup.className = `popup`;
    chats.className = `chats`;
    notifications.className = `notifications`;
    hold1.className = `hold1`;
  }
});
mshadow.addEventListener(`click`, () => {
  menus.style.display = `none`;
  mshadow.style.display = `none`;
  menus.classList.toggle(`menu2`);
  dashboard.classList.toggle(`dashboard2`);
  body.classList.toggle(`body2`);
});

// script for displaying profile popup
const proarr = [
  {
    icon: `attach_money`,
    head: `My Profile`,
    par: `Account Settings`,
    style: `prices`,
  },
  {
    icon: `inbox`,
    head: `My Inbox`,
    par: `Messages & Emails`,
    style: `inbox`,
  },
  {
    icon: `task`,
    head: `My Tasks`,
    par: `To-do and Daily Tasks`,
    style: `task`,
  },
];

const pronew = proarr.map((each) => {
  const { icon, head, par, style } = each;
  return `
  <div class="profile3">
          <span class="material-symbols-outlined ${style}"> ${icon} </span>
          <div class="container">
            <h3 class="h3"> ${head}</h3>
            <p class="p"> ${par}</p>
          </div>
        </div>
  `;
});

profile2Container.innerHTML = pronew.join(` `);

// script for notifications popup
const notarr = [
  {
    image: `images/avatar1.jpg`,
    header: `Roman Joined the Team!`,
    par: `Congratulate him`,
  },
  {
    image: `images/avatar2.jpg`,
    header: `New message recieved`,
    par: `Salma sent you new message`,
  },
  {
    image: `images/avatar3.jpg`,
    header: `New Payment recieved!`,
    par: `Check your earnings`,
  },
  {
    image: `images/avatar4.jpg`,
    header: `Jolly completed tasks`,
    par: `Assign her new tasks`,
  },
];

const notnew = notarr.map((each) => {
  const { image, header, par } = each;
  return `
   <div class="profile3">
              <img src=${image} alt="avatar" class="avatar" />
              <div class="container">
                <h3 class="h3">${header}</h3>
                <p class="p">${par}</p>
              </div>
            </div>
  `;
});
profile3Container.innerHTML = notnew.join(` `);

// script for chats popup
const chatnew = notarr.map((each) => {
  const { image, header, par } = each;
  return `
   <div class="profile3">
              <img src=${image} alt="avatar" class="avatar" />
              <sup class="sup"></sup>
              <div class="container">
                <h3 class="h3">${header}</h3>
                <p class="p">${par}</p>
              </div>
            </div>
  `;
});
profile4Container.innerHTML = chatnew.join(` `);

// script for closing and displaying new notifications and messages/chats, when they the icons were clicked
topmenus.forEach((each) => {
  each.addEventListener(`click`, () => {
    if (each.firstElementChild.innerText === `notifications`) {
      if (popup.className === `popup`) {
        return (
          popup.classList.toggle(`popup2`),
          notifications.classList.toggle(`notifications2`)
        );
      }
      popup.className = `popup`;
      notifications.className = `notifications`;
      chats.className = `chats`;
      hold1.className = `hold1`;
    } else {
      if (popup.className === `popup`) {
        return (
          popup.classList.toggle(`popup2`), chats.classList.toggle(`chats2`)
        );
      }
      popup.className = `popup`;
      chats.className = `chats`;
      notifications.className = `notifications`;
      hold1.className = `hold1`;
    }
  });
});

profile.addEventListener(`click`, () => {
  if (popup.className === `popup`) {
    return popup.classList.toggle(`popup2`), hold1.classList.toggle(`hold12`);
  }
  popup.className = `popup`;
  chats.className = `chats`;
  notifications.className = `notifications`;
  hold1.className = `hold1`;
});

main.addEventListener(`click`, () => {
  if (popup.className === `popup popup2`) {
    popup.className = `popup`;
    chats.className = `chats`;
    notifications.className = `notifications`;
    hold1.className = `hold1`;
  }
});
menus.addEventListener(`click`, () => {
  if (popup.className === `popup popup2`) {
    popup.className = `popup`;
    chats.className = `chats`;
    notifications.className = `notifications`;
    hold1.className = `hold1`;
  }
});

if (location.pathname === `/` || location.pathname === `/index.html`) {
  const analarr = [
    {
      head: `Congratulations Sanjo`,
      price: `$39,893`,
      btn: `Download`,
      img: `images/analytic.svg`,
      class: `img`,
    },
    {
      head: `Purchases`,
      price: `2,789`,
      h6: `Monthly Sales`,
      img: `receipt_long`,
    },
    {
      head: `Total Earnings`,
      price: `$93,896.67`,
      h6: `Total Sales`,
      img: `attach_money`,
      money: `money`,
    },
  ];

  const analnew = analarr.map((each) => {
    if (each.class) {
      return `
    <div class="analytic">
            <section class="section">
              <h4 class="h4">${each.head}</h4>
              <h2 class="h2">${each.price}</h2>
              <button class="button">${each.btn}</button>
            </section>
            <img src=${each.img} alt="image " class=${each.class} />
          </div> `;
    } else {
      return `
     <div class="analytic">
            <section class="section">
              <h4 class="h4">${each.head}</h4>
              <section class="section1">
                <h2 class="h2">${each.price}</h2>
                <h6 class="h6">${each.h6}</h6>
              </section>
            </section>
            <span class="material-symbols-outlined ${each.money}"> ${each.img} </span>
          </div>
    `;
    }
  });

  analyticsContainer.innerHTML = analnew.join(` `);
}

// const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "black",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     scales: {
//       y: {
//         grid: {
//           color: "transparent",
//         },
//       },
//       x: {
//         grid: {
//           color: "transparent",
//         },
//       },
//     },
//   },
// };

// const myChart = new Chart(document.getElementById("myChart"), config);
