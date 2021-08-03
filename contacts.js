const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join("./db", "contacts.json");
const { v4 } = require("uuid");

async function updateContacts(data) {
  try {
    const contacts = JSON.stringify(data);
    await fs.writeFile(contactsPath, contacts);
  } catch (error) {
    throw error;
  }
}

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw error;
  }
}

async function getContactById(id) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === id);
    if (!contact) {
      throw new Error(`Товар с id=${id} не найден`);
    }
    return contact;
  } catch (error) {
    throw error;
  }
}

async function addContact(data) {
  const newContact = { ...data, id: v4() };
  try {
    const contacts = await listContacts();
    const newContacts = [...contacts, newContact];
    await updateContacts(newContacts);
    return newContacts;
  } catch (error) {
    throw error;
  }
}

async function removeContact(id) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      throw new Error(`Товар с id=${id} не найден`);
    }
    const newContacts = contacts.filter((item) => item.id !== id);
    await updateContacts(newContacts);
    return contacts[idx];
  } catch (error) {
    throw error;
  }
}

const contactsAPP = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

module.exports = contactsAPP;
