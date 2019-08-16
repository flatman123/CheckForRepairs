let customers = new Map();
let custID = Math.floor(Math.random(0) * 2);
		
customers.set('cust1',[
	{phone:'347.154.4545'},
	{repairDate:'01/02/2015'},
	{bicycleType: 'Specialized'},
	{name: 'Kanisha'}
]);

customers.set('cust2',[
	{phone:'718.546.8787'},
	{repairDate: '7/15/2019'},
	{bicycleType: 'Giant'},
	{name: 'Kaleridan'}
]);

const prntCustName = () => {
	return new Promise((resolve, reject) => {
		setTimeout(cName => {
			const n = customers.get('cust2')[3]['name'];
			resolve(`This customer's name is ${n}.`)
		},1500)
	})
};

const checkForlastRepair = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

			let oldDate = new Date(customers.get('cust1')[1]['repairDate']);
			let upToDate = new Date('5/1/2019');
			oldDate < upToDate ? resolve(true) : resolve(false);
			
		}, 2000)

	}
)};

const generateReport = nr => {
	return new Promise((resolve, reject) => {
		setTimeout(repair => {
			let cName, bike, repairDate, phone;

			cName = customers.get('cust1')[3]['name'];
			bike = customers.get('cust1')[2]['bicycleType'];
			repairDate = customers.get('cust1')[1]['repairDate'];
			phone = customers.get('cust1')[0]['phone'];
			
			if (repair) {
				resolve(`Customer ${cName} is in need of some repairs. Please contact them at: ${phone}.The last time they had a repair was ${repairDate} for their ${bike} bike.`);
			} else {
				resolve(`Customer ${cName} is ok. No repairs needed.`);
			}
		}, 1500,nr)
	})
};


const names = prntCustName();

names
.then(d => {
	console.log(d);
	return checkForlastRepair();})

.then(n => {
	return generateReport(n);
})

.then(report => {
	console.log(report);
})

.catch(() => {console.log('ERROS')});