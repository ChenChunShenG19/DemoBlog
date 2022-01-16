import { Injectable } from '@nestjs/common';
import {ArticleCreateResult, CreateArticleDto} from "./dto/create-article.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ContentsService {
    constructor(private prismaService: PrismaService) {
    }

    async create(createVerificationArticleDto: CreateArticleDto) : Promise<ArticleCreateResult>{
        const createdArticle: ArticleCreateResult = await this.prismaService.article.create({
            data: {
                articleName: createVerificationArticleDto.articleName,
                isActive: createVerificationArticleDto.isActive,
            },
            select: { id: true },
        });
        return createdArticle;
    }
}
