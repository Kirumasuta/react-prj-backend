import {Controller, Get, Header} from "@nestjs/common";
import {CategoryService} from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @Get()
    @Header('Content-Type','Application/json')
    getAllCategories(){
        return this.categoryService.findAll();
    }
}