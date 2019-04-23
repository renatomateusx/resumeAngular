import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  snotifyConfig = environment.snotifyConfig;
  basicData: any;
  model: any = {};

  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
    this.getInContact();
  }

  contact() {
    const self = this;
    const dataP = 'contactName=' + this.model.name + '&contactEmail=' + this.model.email +
                  '&contactSubject=' + this.model.subject + '&contactMessage=' + this.model.message;
    $.ajax({
      type: 'POST',
      url: 'http://curriculo.comercioparalelo.com/sendEmail.php',
      data: dataP,
      success: function(msg) {
          // Message was sent
          if (msg === 'OK') {
            self.snotify.success('Mensagem enviada!', 'Success', this.snotifyConfig);
          } else {
            self.snotify.warning('Mensagem não enviada.', 'Warning', this.snotifyConfig);
          }
      }
    });

    // this.profile.contactus(this.model).subscribe(data => {
    //   console.log(data);
    //   if (data.status) {
    //     this.snotify.success(data.message, 'Success', this.snotifyConfig);
    //   } else {
    //     this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
    //   }
    // }, err => {
    //   this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
    // });
  }

  getInContact(){
    this.basicData = this.profile.basic();
  }

}
