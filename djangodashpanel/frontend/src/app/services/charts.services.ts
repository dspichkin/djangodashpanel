import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class ChartsService {

	private baseUrl = '/dash/api/';
	private perfCpuUrl = this.baseUrl + 'perf/cpu/';
	private perfMemoryUrl = this.baseUrl + 'perf/memory/';

	constructor (private http: Http) {}

	public getPerfCpu(_params): Observable<any> {
		let data = _params || {};
		
		let params: URLSearchParams = new URLSearchParams();
        for (var key in data) {
          	if (data.hasOwnProperty(key)) {
            	let val = data[key];
             	params.set(key, val);
          	}
        }
        let options = new RequestOptions({
        	search: params
      	});

		return this.http.get(this.perfCpuUrl, options)
			.map(this.extractData)
			.catch(this.handleError);
	}


	public getMemoryCpu(_params): Observable<any> {
		let data = _params || {};
		
		let params: URLSearchParams = new URLSearchParams();
        for (var key in data) {
          	if (data.hasOwnProperty(key)) {
            	let val = data[key];
             	params.set(key, val);
          	}
        }
        let options = new RequestOptions({
        	search: params
      	});

		return this.http.get(this.perfMemoryUrl, options)
			.map(this.extractData)
			.catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);
		return Observable.throw(errMsg);
	}


	
}