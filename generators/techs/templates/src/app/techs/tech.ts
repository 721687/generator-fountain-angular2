import {Component, Input} from '@angular/core';
import {Tech} from './techs';

@Component({
  selector: 'Tech',
<% if (modules === 'systemjs') { -%>
  moduleId: __moduleName,
  templateUrl: 'tech.html'
<% } else { -%>
  template: require('./tech.html')
<% } -%>
})
export class TechComponent {
  @Input() public tech: Tech;
}
