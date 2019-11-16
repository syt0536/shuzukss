import { Component, OnInit,AfterViewInit, ViewChild,ElementRef ,Input,} from '@angular/core';
import {RestService} from '../../../services/rest/rest.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {mata} from '../../../models/mata';
import {Observable} from 'rxjs';
import {PageMeta} from '../../../models/page-mata';
import {FormControl} from '@angular/forms';
import { GridComponent, ToolbarItems, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {Car} from '../../../models/car';
import { AgGridAngular } from 'ag-grid-angular';
export interface PeriodicElement {
  id?: number;
  target?: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ToolbarService, ExcelExportService]
})
export class TableComponent implements OnInit {
  title = 'My App';
  gridConfig: object;
  cars: Car[];

    cols: any[];

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'number'];
  // dataSource = ELEMENT_DATA;
    toppings = new FormControl();
    toppingList: string[] = ['药物名称', '药物别名', '研发公司', '靶点', '技术'];
    images = [];
    str = '';
    displayedColumns: string[] = ['药物名称', '药物别名', '研发公司', '靶点', '技术'];
    dataSource = '';
    result1: string;
    scontent: string;
    // 分页
    pageMeta: PageMeta | null;
    public pageSettings: Object;
    public data= [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    public toolbarOptions: ToolbarItems[];
    @ViewChild('grid')
    public grid: GridComponent;
    @ViewChild('content') content: ElementRef;
    @Input() result1$: Observable<string>;
    @Input() pageSizeOptions = [5,10];
    @Input() pageSize = 10;
constructor(
    private restservice: RestService ,
    private myrouter: ActivatedRoute,
    
    ) { 
      
   
    }
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
    this.pageSettings = { pageSizes: true, pageSize: 5};
    // this._getDrugs(0, this.pageSize);
    this.toolbarOptions = ['ExcelExport'];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
})
}

hq() {
        this.restservice.getData(`search/?search=${this.result1}`).subscribe(data => {
        this.images = data["year_end_data"];
        this.pageMeta = data["meta"];
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
    this.restservice.getDataList(`YearEndData/?search=${this.result1}`, page, perPage)
    .subscribe(data => {
      this.images = data['year_end_data'];
      this.pageMeta = data['meta'];
      console.log(this.images);
    });
}
pageChange(event) {
  this._getDrugs(event.pageIndex, event.pageSize);
}
toolbarClick(args: ClickEventArgs): void {
  if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      this.grid.excelExport();
  }
}
params;
private gridApi;
private gridColumnApi;
paginationPageSize=5;
fileName1;
sheetName1;
@ViewChild('agGrid') agGrid: AgGridAngular;

columnDefs = [
  {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true,width:300,cellStyle:{color: 'red', 'background-color': 'green',} },
  {headerName: 'model', field: 'model', sortable: true, filter: true ,cellStyle:{color: 'red', 'background-color': 'green',}},
  {headerName: 'price', field: 'price', sortable: true, filter: true ,cellStyle:{color: 'red', 'background-color': 'green',}}
  
];
colDef={
headerName:'make',
field:'make',

}


rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
    { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
    { make: 'Porsche', model: 'Boxter', price: 72000,a:1 },
    { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
    { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
    { make: 'Porsche', model: 'Boxter', price: 72000,a:1 },
    { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
    { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
    { make: 'Porsche', model: 'Boxter', price: 72000,a:1 },
    { make: 'Toyota', model: 'Celica', price: 35000,a:1 },
    { make: 'Ford', model: 'Mondeo', price: 32000,a:1 },
    { make: 'Porsche', model: 'Boxter', price: 72000,a:1 }
];
onBtExport() {
  this.params = {
    fileName: this.fileName1,
    sheetName: this.sheetName1
  };
  this.gridApi.exportDataAsCsv(this.params);
}
onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
}
getSelectedRows() {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map( node => node.data );
  const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
  alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}
