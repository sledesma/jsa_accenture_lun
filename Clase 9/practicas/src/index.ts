import { DataSource } from "./decorators";
import App from './app';

@DataSource('JsonPlaceHolder')
class JsonplaceholderDataSource {}

const app = new App([
  JsonplaceholderDataSource
]);