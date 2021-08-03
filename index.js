const contactsAPP = require("./contacts");

// const contacts = contactsAPP.listContacts();
// contacts.then((data) => console.log(data)).catch((error) => console.log(error));

// const id = 2;
// const contact = contactsAPP.getContactById(id);
// contact.then((data) => console.log(data)).catch((error) => console.log(error));

//добавляло бесконечно???

// const newContact = {
//     name: "iPhone X",
//     email: "123@gmail.com",
//     phone: "(123) 456-7890"
// };

// const contact = contactsAPP.addContact(newContact);
// contact.then((data) => console.log(data)).catch((error) => console.log(error));

// const delId = 10;

// const contact = contactsAPP.removeContact(delId);
// contact.then((data) => console.log(data)).catch((error) => console.log(error));

// ============================================yargs=========================================
// const argv = require("yargs").argv;

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const contacts = contactsAPP.listContacts();
//       contacts
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     case "get":
//       const contactGet = contactsAPP.getContactById(id);
//       contactGet
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     case "add":
//       const newContact = {
//         name,
//         email,
//         phone,
//       };
//       const contactAdd = contactsAPP.addContact(newContact);
//       contactAdd
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     case "remove":
//       const contactRemove = contactsAPP.removeContact(id);
//       contactRemove
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);

// ============================================commander=========================================

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = contactsAPP.listContacts();
      contacts
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "get":
      const contactGet = contactsAPP.getContactById(id);
      contactGet
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "add":
      const newContact = {
        name,
        email,
        phone,
      };
      const contactAdd = contactsAPP.addContact(newContact);
      contactAdd
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "remove":
      const contactRemove = contactsAPP.removeContact(id);
      contactRemove
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
