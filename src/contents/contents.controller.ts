import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@Controller('contents')
@ApiTags('帖子')
export class ContentsController {
    @Get()
    index(){
        return '这里应该有所有的帖子'
    }
}
