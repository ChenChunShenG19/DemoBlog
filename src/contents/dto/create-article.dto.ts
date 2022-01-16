import {IsBoolean, IsOptional, IsString} from 'class-validator';
import {article } from '@prisma/client';

export class CreateArticleDto {

    @IsString()
    articleName: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

}

export type ArticleCreateResult = Pick<article, 'id'>;
