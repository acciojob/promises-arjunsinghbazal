//your JS code here. If required.
const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(10);
	},1000)
});
promise.then(value=>{
	console.log(value);
	return value+10;
}).then(value=>{
	console.log(value);
	return value+10;
}).catch(value=>{
	console.log('error:'+value);
	return value+10;
}).then(value=>{
	console.log(value);
	return value+10;
});
console.log('end');