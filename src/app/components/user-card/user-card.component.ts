import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: User | undefined = undefined;

  @Output() userEmit = new EventEmitter<User>();

  onDetailsClick = () => {
    console.log('details click');
    this.userEmit.emit(this.user);
  }

}
