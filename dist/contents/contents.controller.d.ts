import { CreateArticleDto } from "./dto/create-article.dto";
import { ContentsService } from "./contents.service";
export declare class ContentsController {
    private readonly contentsService;
    constructor(contentsService: ContentsService);
    findAll(): string;
    create(createVerificationArticleDto?: CreateArticleDto): Promise<{
        articleId: string;
    }>;
}
