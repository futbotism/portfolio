import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.data.downloadResume) {
      const link = document.createElement('a');
      link.href = './assets/AA_resume.pdf';
      link.download = 'andrew-alvino_resume.pdf';
      link.click();
    }
  }

}
