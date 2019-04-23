import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  introData: any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getIntro();
  }

  getIntro() {
    this.profile.getJSON().subscribe(data => {
      this.introData = data.introInformation;
    });
  }

}
