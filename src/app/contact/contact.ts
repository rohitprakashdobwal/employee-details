import { Component } from '@angular/core';
import { ContactMessageDto } from '../models/contact-message-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactMessageApi } from '../services/contact-message-api/contact-message-api';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactMessageAddRequest: ContactMessageDto = this.getEmptyMessage();
  showForm: boolean = false;

  constructor(private contactMessageApi: ContactMessageApi) { }

  ngoInit() {
    //this.showForm = true;
  }
  submitMessage() {

    this.contactMessageApi.addContactMessage(this.contactMessageAddRequest)
      .subscribe({
        next: (response) => {
          console.log('Message successfully sent:', response);
          // this.showForm = false;
          this
        },
        error: (error) => {
          console.error('Error sending message:', error);
        }
      });

  }

  getEmptyMessage(): ContactMessageDto {
    return {
      id: "",
      fullName: "",
      email: "",
      message: "",
      createdDate: new Date(),
      updatedDate: new Date()
    };

  }
}
