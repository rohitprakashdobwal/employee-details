import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactMessageDto } from '../../models/contact-message-dto';

@Injectable({
  providedIn: 'root',
})
export class ContactMessageApi {

  private contactMessagesApiUrl = "https://localhost:7011/api/Messages";

  constructor(private httpClient: HttpClient) { }

  addContactMessage(messageData: ContactMessageDto): Observable<any> {
    return this.httpClient.post(this.contactMessagesApiUrl, messageData);
  }

  getContactMessages(): Observable<ContactMessageDto[]> {
    return this.httpClient.get<ContactMessageDto[]>(this.contactMessagesApiUrl);
  }

  getContactMessageById(email: string): Observable<ContactMessageDto> {
    const url = `${this.contactMessagesApiUrl}/${email}`;
    return this.httpClient.get<ContactMessageDto>(url);
  }

  deleteContactMessage(messageId: string): Observable<any> {
    const url = `${this.contactMessagesApiUrl}/${messageId}`;
    return this.httpClient.delete(url);
  }
}
