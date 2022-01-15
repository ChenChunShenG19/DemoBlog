import {IsBoolean, IsString} from 'class-validator';

export class CreateArticleDto {

    @IsString()
    articleName: string;

    @IsBoolean()
    isActive?: boolean;

}
