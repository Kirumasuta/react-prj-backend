import { IsNotEmpty } from 'class-validator';
import {DataTypes} from "@sequelize/core";
import {StringDataType} from "@sequelize/core/types/data-types";

export class ChangeArticleDto {
    @IsNotEmpty()
    readonly header: string;
    @IsNotEmpty()
    readonly preview_content: string;
    @IsNotEmpty()
    readonly content: string;
    @IsNotEmpty()
    readonly create_date: Date;
    @IsNotEmpty()
    readonly change_date: Date;
    @IsNotEmpty()
    readonly user_id: number;
    @IsNotEmpty()
    readonly img: string;
    @IsNotEmpty()
    readonly category_id: number;
}