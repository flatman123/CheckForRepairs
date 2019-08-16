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

const checkNextRepairDate = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

			let oldDate = new Date(customers.get('cust1')[1]['repairDate']);
			let upToDate = new Date('5/1/2019');
			oldDate < upToDate ? resolve('CONTACT CUSTOMER FOR REPAIRS') : resolve('NO REPAIRS NEEDED FOR THIS CUSTOMER.');
		}, 2000)
	}
)};


const names = prntCustName();

names
.then(d => {
	console.log(d)
	return checkNextRepairDate();
})

.then(repairs => {
	console.log(repairs);
})

.catch(() => {console.log('ERROS')});