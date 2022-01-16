import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateArticleDto} from "./dto/create-article.dto";
import {ContentsService} from "./contents.service";

@Controller('contents')
@ApiTags('帖子')
export class ContentsController {
    constructor(
        private readonly contentsService: ContentsService,){}

    @Get()
    @ApiOperation({summary:'查看所有帖子List'})
    findAll(){
        return '这里应该有所有的帖子'
    }
    //
    // @Get('{id}')
    // @ApiOperation({summary:'查看指定id的帖子'})
    // findOne(articleId:string){
    //     return '这里返回指定的帖子' + articleId;
    // }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({summary:'创建一个帖子'})
    async create(@Body() createVerificationArticleDto?: CreateArticleDto): Promise<{ articleId: string }> {
        //'这里增加一篇新帖子';
        const article = await this.contentsService.create(createVerificationArticleDto);
        return { articleId: article.id };
    }

}
