import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactform: FormGroup;

  constructor(private rest: RestService, private builder: FormBuilder) {
    this.contactform = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required],),
      Service: new FormControl('', [Validators.required]),
      Appoinment: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  onsubmit(contactform: any) {
    this.rest.postmessage(contactform).subscribe((data: any) => {
      location.href = 'https://mailthis.to/confirm'
      console.log(data);
      this.contactform.reset();
    }, (error: any) => {
      console.log(error);
    })
  }


  // onsubmit(contactform:any){
  //   this.rest.postmessage(contactform).subscribe((data:any)=>{
  //     location.href = 'https://mailthis.to/confirm'
  //     console.log(data);
  //     this.contactform.reset();
  //   },(error:any)=>{
  //     console.log(error);
  //   })
  // }

}
