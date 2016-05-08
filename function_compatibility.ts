"use strict";

let buildName = function buildName ( first_name : string, last_name : string) : string {
	return `${first_name} ${last_name}`;
}

let fetchData = function fetchData ( url : string ) : string {
	return `Fake dat from ${url}`;
}

// Compatible, because fetchData's parameter list is a subset of buildName's.
let build = buildName;
build = fetchData;

// No-go, because buildName requires a second string argument, which fetch_data doesn't support.
let fetch = fetchData;
fetch = buildName;
