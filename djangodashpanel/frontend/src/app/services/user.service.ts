import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.settings';

@Injectable()
export class UserService {

	constructor (private http: Http) {}

	
	user;

	public getUserFromServer(callback) {
		let self = this;
		let data = {
			t: new Date().getTime()
		}

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

		this.http.get(AppSettings.userUrl, options)
			.map(this.extractData)
			.catch(this.handleError)
			.subscribe(
	            function(data) {
	                if (!data.is_authenticated) {
	                    window.location.href = "/";
	                }
	                self.user = data.user;
	                console.log(data)
	                if (callback) {
	                	callback(self.user);
	                }
	                
	            },
	            function(error) {
	            }
        	);
	}

	getUser() {
		return this.user;
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