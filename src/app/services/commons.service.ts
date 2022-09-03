import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Generic } from "../models/generic/generic";


export abstract class CommonService<E extends Generic> {


  protected url: string;

  constructor(protected http: HttpClient) { }

  getAll(): Observable<E[]> {
    return this.http.get<E[]>(this.url);
  }

  getAllPageable(page: string, size: string,orderBy: string, column: string): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sort',orderBy)
      .set('column',column);

    return this.http.get<any>(this.url.concat("/pageable/column"), { params: params });
  }


}

