import { AfterViewInit, Component, Directive, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Generic } from '../../../models/generic/generic';
import { CommonService } from '../../../services/commons.service';

@Directive()
export abstract class CommonListComponent<E extends Generic, S extends CommonService<E>> implements OnInit {

  @ViewChild(MatPaginator)
  paginator :MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  protected nombreModel: string;
  sortedData: Object[];
  // config pagination
  totalRegistros=0;
  paginaActual = 0;
  totalPorPagina = 1;
  orderBy ="asc";
  column ="id";
  pageSizeOptions = [5, 10, 25, 100];
  ariaLabel="Select page";

  titulo: string;
  lista: E[];
  dataSource: MatTableDataSource<E>;

  constructor(protected service:S) {
    this.calculateRange();
  }

  ngOnInit(): void {

    this.calculateRange();

  }

  paginar(event:PageEvent) :void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calculateRange();
  }

  private calculateRange(){

    this.service.getAllPageable(this.paginaActual.toString(),this.totalPorPagina.toString(),this.orderBy,this.column)
    .subscribe(paginator => {
      console.log(paginator.totalElements)
      this.lista = paginator.content as E[];
      this.totalRegistros = paginator.totalElements as number;
      this.paginator._intl.itemsPerPageLabel ="Registros";
      this.dataSource = new MatTableDataSource(this.lista);
      console.log("sort", this.orderBy , "column", this.column)
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue',filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  sortData(sort: Sort) {

    if (!sort.active || sort.direction === '') {
      this.calculateRange();
    }else{
      this.orderBy = sort.direction;
      this.column = sort.active;
      this.calculateRange();

    }


}
  displayedColumns: string[] = ['id', 'name','isActive'];
}
