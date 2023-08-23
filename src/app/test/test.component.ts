import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  @Input() public parentData:any;
  
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey');
  }

}
