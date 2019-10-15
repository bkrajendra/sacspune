import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {


  tableData: object[] = [
    { Secondary: 'Mrs. Sunita George', Primary: 'Mrs. Meenu S', Preprimary: 'Mrs.Joanita Francis', Nonteaching: 'Mr. Richard Raj'},
    { Secondary: 'Ms. Afsha Sayyed', Primary: 'Mrs. Shoba S', Preprimary: 'Mrs. Reshma Shaikh', Nonteaching: 'Mrs. Tereja Tambe' },
    { Secondary: 'Ms. Rahat Chikte', Primary: 'Ms. Joycee', Preprimary: 'Mrs. Sanjukta Banerjee', Nonteaching: 'Mr. Daniel Shanmugan'},
    { Secondary: 'Mrs. Alvia DSouza', Primary: 'Mrs. Sherin J', Preprimary: 'Mrs. Chandrakanta Lawi', Nonteaching: 'Mr. Vijay Bhosale'},
    { Secondary: 'Mrs. Asma Kotwal', Primary: 'Miss. Nivedita Ghodke', Preprimary: 'Mrs. Sharon Swamy', Nonteaching: 'Mr. Yakub Joseph'}
  ];
  private sorted = false;
  constructor() { }

  ngOnInit() {
  }
  sortBy(by: string | any): void {

    this.tableData.sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }

      return 0;
    });

    this.sorted = !this.sorted;
  }
}
