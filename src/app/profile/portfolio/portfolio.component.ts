import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioData: any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getIntro();
  }

  getIntro() {
    this.profile.getJSON().subscribe(data => {
      this.portfolioData = data.portfolioData;
    });
  }

}
