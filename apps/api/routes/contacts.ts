import express, { response } from "express";
import { httpResponse, HttpStatus } from "../common/types";
import ContactsController from "../modules/contacts/controller";
import ContactsDAO from "../modules/contacts/dao";
import ContactsService from "../modules/contacts/service";
import { Contacts } from "../modules/contacts/types";

export default function contactsRoutes(router: express.Router) {
  const dao = new ContactsDAO();
  const service = new ContactsService();
  const controller = new ContactsController();

  router.get("/contacts", async (req, res) => {
    const httpResponse: httpResponse = {
      statusCode: 200,
      body: {},
    };

    try {
      const contacts = await controller.getContacts();
      httpResponse.body = contacts;
    } catch (error) {
      httpResponse.statusCode = 500;
      httpResponse.body = error;
    }

    res.status(httpResponse.statusCode).json(httpResponse.body);
  });

  router.get("/contacts/:id([0-9]+)", async (req, res) => {
    const httpResponse: httpResponse = {
      statusCode: 200,
      body: {},
    };

    try {
      const contact = await controller.getById(Number(req.params.id));

      if (contact === HttpStatus.NOT_FOUND) {
        httpResponse.statusCode = 404;
        httpResponse.body = "Não encontrado";
        res.status(httpResponse.statusCode).json(httpResponse.body);
        return;
      }

      httpResponse.body = contact;
    } catch (error) {
      httpResponse.statusCode = 500;
      httpResponse.body = error;
    }

    res.status(httpResponse.statusCode).json(httpResponse.body);
  });

  router.post("/contacts", async (req, res) => {
    const httpResponse: httpResponse = {
      statusCode: 201,
      body: {},
    };

    const newContact: Contacts = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    };

    try {
      const contact = await controller.newContact(newContact);

      if (contact === HttpStatus.BAD_REQUEST) {
        httpResponse.statusCode = 400;
      }

      httpResponse.body = contact;
    } catch (error) {
      httpResponse.statusCode = 500;
      httpResponse.body = error;
    }

    res.status(httpResponse.statusCode).json(httpResponse.body);
  });

  router.put("/contacts/:id([0-9]+)", async (req, res) => {
    const httpResponse: httpResponse = {
      statusCode: 201,
      body: {},
    };

    const contact: Contacts = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    };

    try {
      const updated = await controller.updateContact(
        Number(req.params.id),
        contact
      );

      if (updated === HttpStatus.BAD_REQUEST) {
        httpResponse.statusCode = 400;
      }

      httpResponse.body = updated;
    } catch (error) {
      httpResponse.statusCode = 500;
      httpResponse.body = error;
    }

    res.status(httpResponse.statusCode).json(httpResponse.body);
  });

  router.delete("/contacts/:id([0-9]+)", async (req, res) => {
    const httpResponse: httpResponse = {
      statusCode: 200,
      body: {},
    };

    try {
      const contact = await controller.deleteContact(Number(req.params.id));

      if (contact == HttpStatus.BAD_REQUEST) {
        httpResponse.statusCode = 400;
      }

      httpResponse.body = contact;
    } catch (error) {
      httpResponse.statusCode = 500;
      httpResponse.body = error;
    }

    res.status(httpResponse.statusCode).json(httpResponse.body);
  });
}
