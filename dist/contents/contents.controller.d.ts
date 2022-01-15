import { CreateArticleDto } from "./dto/create-article.dto";
import { ContentsService } from "./contents.service";
export declare class ContentsController {
    private readonly contentsService;
    constructor(contentsService: ContentsService);
    create(createVerificationArticleDto?: CreateArticleDto): Promise<{
        articleId: string;
    }>;
}
