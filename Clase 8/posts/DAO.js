// Data - Adapter - Object => Repository Pattern
// Estas tres cosas estan juntas en el patrón ActiveRecord

// Data - Operaciones directas al origen de datos
const jsonplaceholderDataSource = {
	endpoint: "https://jsonplaceholder.typicode.com/",

	async getAll(resource) {
		const res = await fetch(`${this.endpoint}${resource}`);
		const data = await res.json();
		return data;
	},

	async getOne(resource, id) {
		const res = await fetch(`${this.endpoint}${resource}/${id}`);
		const data = await res.json();
		return data;
	},

	async create(resource, data) {
		const res = await fetch(`${this.endpoint}${resource}`, {
			method: "POST",
      body: data
		});
		return res.status;
	},
};

// Adapter
const postsRespository = (dataSource) => ({
	dataSource: dataSource,

	async getAll() {
		const data = await dataSource.getAll("posts");
		return data.map((item) => postObject(item));
	},

	async getOne(id) {
		const data = await dataSource.getOne("posts", id);
		return postObject(data);
	},

  async create(data) {
    const body = postObject(data);
    console.log(body)
    const status = await dataSource.create('posts', body);
    return status;
  }
});
// Object - Un objeto que representa el recurso
const postObject = (postData) => ({
	get userId() {
		return postData.userId;
	},
	get id() {
		return postData.id;
	},
	get title() {
		return postData.title;
	},
	get body() {
		return postData.body;
	},
});

// Adapter
const usersRespository = (dataSource) => ({
	dataSource: dataSource,

	async getAll() {
		const data = await dataSource.getAll("users");
		return data.map((item) => userObject(item));
	},

	async getOne(id) {
		const data = await dataSource.getOne("users", id);
		return userObject(data);
	},
});
// Object - Un objeto que representa el recurso
const userObject = (userData) => ({
	get id() {
		return userData.id;
	},
	get name() {
		return userData.name;
	},
	get username() {
		return userData.username;
	},
	get email() {
		return userData.email;
	},
	get address() {
		return userData.address;
	},
	get phone() {
		return userData.phone;
	},
	get website() {
		return userData.website;
	},
	get company() {
		return userData.company;
	},
});
