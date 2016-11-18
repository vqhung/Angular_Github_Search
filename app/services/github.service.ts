import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username: string;
	private client_id = 'a127a7804cf0c8b13a8a';
	private client_secret = '9944e929d8d7db33ae201eb2e8f0c6cf3baccfdc';

	constructor(private _http:Http) {
		console.log('Github Service Ready...');
		this.username = 'vqhung';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+
			this.username+'?client_id='+this.client_id+
			'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+
			this.username+'/repos?client_id='+this.client_id+
			'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	updateUser(username: string) {
		this.username = username;
	}


}
