import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";


export class Routes {

    public contactController: ContactController = new ContactController();


    public routes(app): void {

        app.route('/')
            // get endpoint
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET Success"
                })
            })
        

        // all contacts
        app.route('/contact')
            // get endpoint
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);


        // contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            // update contact
            .put(this.contactController.updateContact)
            // delete contact
            .delete(this.contactController.deleteContact)
    }
}