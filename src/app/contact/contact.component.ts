import {Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Message} from "../types/message";
import {NgForm} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";
import {environment} from "../../environments/environment";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @ViewChild('contactForm') contactForm!: NgForm;

  public message: Message = new Message('', '', '', '');

  constructor(private https: HttpClient,
              private toast: NgToastService) {
  }


  sendMessage() {
    console.log(this.message)
    this.https.post(environment.contactUrl,this.message).subscribe(result => {
      this.contactForm.reset()
      this.toast.success('Message sent successfully', 'Message Confirmation', 3000);
    })
  }
}
