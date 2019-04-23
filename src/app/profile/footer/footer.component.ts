import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getIntro();
  }

  getIntro() {
    this.profile.getJSON().subscribe(data => {
      this.footerData = data.introInformation;
      //console.log(this.footerData);
    });
  }

}
