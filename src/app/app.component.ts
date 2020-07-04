import { Component ,OnInit,ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AgGridAngular, AgGridModule} from 'ag-grid-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("agGrid",{static:false})agGrid:AgGridAngular;

  title = 'pradeep-ag-grid';
  columnDefs=[ 
    {header:'Athete' , field: 'athlete', minWidth: 150,sortable:true,filter:true,checkboxSelection:true},
    {header:'Age'    , field: 'age'    , maxWidth: 80 ,sortable:true,filter:true},
    {header:'Country', field: 'country', minWidth: 70,sortable:true,filter:true},
    {header:'Year'   , field: 'year'   , maxWidth: 90 ,sortable:true,filter:true},
    {header:'Date'   , field: 'date'   , minWidth: 70,sortable:true,filter:true},
    {header:'Sport'  , field: 'sport'  , minWidth: 70,sortable:true,filter:true},
    {header:'Gold'   , field: 'gold'   , maxWidth: 70 ,sortable:true,filter:true},
    {header:'Silver' , field: 'silver' , maxWidth: 70 ,sortable:true,filter:true},
    {header:'Bronze' , field: 'bronze' , maxWidth: 70 ,sortable:true,filter:true},
    {header:'Total'  , field: 'total'  , maxWidth: 70 ,sortable:true,filter:true},
  ];
  rowData:any;
  constructor(private http:HttpClient){}
  ngOnInit(){
   this.rowData=this.http.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json");
  }
  getSelectedRows(){
    const selectedNodes=this.agGrid.api.getSelectedNodes();
    const selectedData=selectedNodes.map(node=>node.data);
    const selectedDataStringPresentation=selectedData.map(node=>node.athlete+''+node.country).join(",");
    alert(`selected Nodes:${selectedDataStringPresentation}`);
    document.getElementById('mytxt').innerHTML=selectedDataStringPresentation;
  }
}