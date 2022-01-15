import { Injectable } from '@nestjs/common';
import {CreateArticleDto} from "./dto/create-article.dto";

@Injectable()
export class ContentsService {

    async create(createVerificationArticleDto: CreateArticleDto) : Promise<string>{

        return createVerificationArticleDto.articleName;
    }
}
