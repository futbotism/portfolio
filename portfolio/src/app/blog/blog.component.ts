import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureState } from '../store';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts = this.store.select(FeatureState.getFeatures);

  icons = {
    faExternalLinkAlt
  };

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  getBgStyle(imgSrc: string) {
    return { 'background-image': `url(${imgSrc})` };
  }

}
