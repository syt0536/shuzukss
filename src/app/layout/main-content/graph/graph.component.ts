import { Component, OnInit, ViewChild, ElementRef , Input, } from '@angular/core';
import {RestService} from '../../../services/rest/rest.service';
import {ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  tb = [];  // 靶点分布
  arr = [];  // 靶点分布
  tba = [];  // 临床阶段
  arra = [];  // 临床阶段
  tbb = [];   // 临床详情
  arrb = [];  // 临床详情
  public obj: {};  // 靶点分布
  public obja: {};  // 临床阶段
  num: number;
  result2: string;
  result: string;
  echart: any;
  @ViewChild('content') content: ElementRef;
  constructor(private restservice: RestService ,
              private myrouter: ActivatedRoute,
              private Router :Router ) { }

  ngOnInit() {this.myrouter.paramMap.subscribe((params: ParamMap) => {
    console.log(params);
    this.result2 = params.get('id');
    this.gettb();
    this.gettba();
})
  }


  gettb() {
    this.restservice.getData2(`Extract/?pk=${this.result2}`).subscribe(data => {
    this.tb.length = 0;
    this.arr.length = 0;
    for (const key in data) {
    if (data.hasOwnProperty(key)) {
      this.tb.push(data[key]);
      this.arr.push(key);
      this.num++;
    }
  }
    this.obj = {
     title: {text: `靶点分布  与${this.result2}相关的靶点共有${this.arr!=null?this.arr.length:0}个`},
      color: ['#3398DB'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }},
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {   type : 'category',
              data : this.tb,
              axisTick: {
                  alignWithLabel: true
              },
              name:'靶点名称'
          }
      ],
      yAxis : [
          { name:`与${this.result2}相关的药物个数`,
            type : 'value'}],
      series : [
          {
              name: '',
              type: 'bar',
              barWidth: '60%',
              data: this.arr
          }
      ]
   }
    console.log(data);
    console.log(this.tb);
    console.log(this.arr);
  } );
        }
        gettba() {
          this.restservice.getData2(`Extractphase/?pk=${this.result2}#?filter{}`).subscribe(data => {
          this.tba.length = 0;
          this.arra.length = 0;
          for (const key in data) {
          if (data.hasOwnProperty(key)) {
          this.tba.push(data[key][0]);
          this.arra.push(data[key][1]);
          };}
          var j = 0;
          for ( var i = 0; i < this.arra.length; i++){
          j = j + this.arra[i]
        }
          this.obja = {
           title: {text: `药物临床分布  与${this.result2}相关的药物共有${j!=null?j:0}个`},
            // color: ['#3398DC'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {   type : 'category',
                    data : this.tba,
                    axisTick: {
                        alignWithLabel: true
                    },
                    name:'临床阶段'
                }
            ],
            yAxis : [
                { name: `与${this.result2}相关的药物个数`,
                  type : 'value'}],
            series : [
                {
                    name: '',
                    type: 'bar',
                    barWidth: '60%',
                    data: this.arra
                }
            ]
         }
          console.log(data);
          console.log(this.tba);
          console.log(this.arra);
        } );
              }
        hqnew() {
            this.result2 = this.content.nativeElement.value;
            this.gettb();
            this.gettba();
}
goDetail(event: any) {
  console.log('detail:', event, 'name:', event.name);
  this.result=this.result2+'|'+event.name
  this.Router.navigate(['c-table',this.result])
  // this.restservice.getData2(`ClinicalData/?search=${this.result2}&${event.name}`).subscribe(data => {
  //   this.tbb = data;
  //   // this.arrb = data[' meta'];
  //   console.log (this.tbb);})
  }
}
