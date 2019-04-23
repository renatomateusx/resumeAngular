import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  basicData: any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getBasicData();
  }

  getBasicData() {
    this.profile.getJSON().subscribe(data =>{
      this.basicData = data.basicInformation;
    });
  }

}
