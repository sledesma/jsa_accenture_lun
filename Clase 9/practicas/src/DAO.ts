/*
// Data
interface DataSource {
  endpoint?: string;
  getAll(resource: string): Promise<any>;
  getOne(resource: string, id: number): Promise<any>;
  create(resource: string, data: BodyInit): Promise<number>;
}
// Adapter
interface RepositoryInterface<Entity> {
  dataSource: DataSource;
  getAll(): Promise<Entity[]>;
  getOne(id: number): Promise<Entity>;
  create(data: Entity): Promise<number>;
}
// Object
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class JsonplaceholderDataSource implements DataSource {

  endpoint: string = "https://jsonplaceholder.typicode.com/";

  async getAll(resource: string): Promise<any> {
		const res: Response = await fetch(`${this.endpoint}${resource}`);
		const data = await res.json();
		return data;
	};

	async getOne(resource: string, id: number): Promise<any> {
		const res: Response = await fetch(`${this.endpoint}${resource}/${id}`);
		const data = await res.json();
		return data;
	};

	async create(resource: string, data: BodyInit): Promise<number> {
		const res: Response = await fetch(`${this.endpoint}${resource}`, {
			method: "POST",
      body: data
		});
		return res.status;
	};

}

class Repository<Entity> implements RepositoryInterface<Entity> {
  dataSource: DataSource;
  
  async getAll(): Promise<Entity[]> {
    const data = await this.dataSource.getAll("posts");
		return data.map((item: any): Entity => item );
  };
  
  async getOne(id: number): Promise<Entity> {
    const data = await this.dataSource.getOne("posts", id);
		return data;
  };

  async create(data: Entity): Promise<number> {
    const body: FormData = new FormData();
    for (const key in data) {
      body.append(key, data[key].toString());
    }
    
    console.log(body)
    const status = await this.dataSource.create('posts', body);
    return status;
  };
}

interface User {
  id: number;
  name: string;
}

const repo: Repository<User> = new Repository<User>();
*/