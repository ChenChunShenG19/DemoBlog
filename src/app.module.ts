import {Module} from '@nestjs/common';
import {ContentsModule} from './contents/contents.module';
import {PrismaModule} from "./prisma/prisma.module";

@Module({
  imports: [ContentsModule, PrismaModule,],
})
export class AppModule {}
