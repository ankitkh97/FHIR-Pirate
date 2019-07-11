import { MatDatepickerModule } from '@angular/material/datepicker';
export class User {
  constructor(
    public id = 0,
    public name = '',
    public phone = '',
    public date: MatDatepickerModule = null,
    public time = '',
    public department = '',
    public reason = '',
    public insurance = ''
  ) {}
}
