const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-users-card-container]");

const data = [
  {
    "id": "1",
    "name": "demo user1",
    "mob": "1231231230",
    "address": "AHbcd jdbr d",
    "unit": "Default",
    "status": "1",
    "present": "1",
    "note": ""
  },
  {
    "id": "2",
    "name": "demo user2",
    "mob": "3434452356",
    "address": "fxg rhseh dfffffb txty thvd",
    "unit": "Default",
    "status": "1",
    "present": "0",
    "note": ""
  },
  {
    "id": "3",
    "name": "demo user3",
    "mob": "3434452356",
    "address": "fxg rhseh dfffffb txty thvd",
    "unit": "Default",
    "status": "1",
    "present": "1",
    "note": ""
  },
  {
    "id": "4",
    "name": "demo user4",
    "mob": "3434452356",
    "address": "fxg rhseh dfffffb txty thvd",
    "unit": "Default",
    "status": "0",
    "present": "0",
    "note": ""
  }
];

data.forEach((user) => {
  if (user.status === "1") {
    const card = userCardTemplate.content.firstElementChild.cloneNode(true);
    const name = card.querySelector("[data-name]");
    const body = card.querySelector("[data-body]");
    const presentButton = card.querySelector("[data-button]");

    name.textContent = user.name;
    body.textContent = user.mob;

    if (user.present === "1") {
      presentButton.disabled = true;
    }

    userCardContainer.append(card);
  }
});