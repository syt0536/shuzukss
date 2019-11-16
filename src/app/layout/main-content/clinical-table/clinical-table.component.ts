import { Component, OnInit,AfterViewInit, ViewChild,ElementRef ,Input,} from '@angular/core';
import {RestService} from '../../../services/rest/rest.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {mata} from '../../../models/mata';
import {Observable} from 'rxjs';
import {PageMeta} from '../../../models/page-mata';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-clinical-table',
  templateUrl: './clinical-table.component.html',
  styleUrls: ['./clinical-table.component.css']
})
export class ClinicalTableComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['phase', 'title', 'status', 'intervention','location'];
  images = [];
  str = '';
  displayedColumns: string[] = ['phase', 'title', 'status', 'intervention','location'];
  dataSource = '';
  result1: string;
  resulta: string;
  resultb: string;
  arr=[];
  scontent: string;
  // 分页
  pageMeta: PageMeta | null;
  @ViewChild('content') content: ElementRef;
  @Input() result1$: Observable<string>;
  @Input() pageSizeOptions = [5,10];
  @Input() pageSize = 10;
constructor(
  private restservice: RestService ,
  private myrouter: ActivatedRoute
  ) { }
// const ELEMENT_DATA: PeriodicElement[] = this.images;
// hq(){
//   const json1 = JSON.stringify(this.images);
//   console.log(this.images);
//   console.log(json1);
//   this.dataSource = json1;
// }
ngOnInit() {
  this.myrouter.paramMap.subscribe((params: ParamMap) => {
  console.log(params);
  this.result1 = params.get('id');
  this.arr = this.result1.split('|');
  this.resulta = this.arr[0];
  this.resultb = this.arr[1];

  this._getDrugs(0, this.pageSize);

})

}
hq() {
      this.restservice.getData(`ClinicalData2/?pk1=${this.resulta} pk2=${this.resultb}`).subscribe(data => {
      this.images = data;
      // this.pageMeta = data["meta"];
      console.log(this.images)} );
    }

hqnew() {
  // if(this.result!==''){
    this.result1 = this.content.nativeElement.value;
    this._getDrugs(0, this.pageSize);
    // this.restservice.getData(`search/?search=${this.scontent}`).subscribe(data => {
    //   this.images = data["year_end_data"];
    //   this. pageMeta=data["meta"]
    //   console.log(this.images)})
    // }

}
private _getDrugs(page?, perPage?) {
// this.result1$.subscribe(data => this.result1 = data);
this.restservice.getData(`ClinicalData2/?pk1=${this.resulta}&pk2=${this.resultb}`).subscribe(data => {
  this.images = data;
  // this.pageMeta = data["meta"];
  console.log(this.images)} );
}
pageChange(event) {
this._getDrugs(event.pageIndex, event.pageSize);
}
}