import { Module, Global } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Contact } from './contact.entity';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Global()
@Module({
  imports: [
    MikroOrmModule.forFeature([Contact]), // register the Contact entity with MikroORM
  ],
  controllers: [ContactController], // register the ContactController
  providers: [ContactService], // register the ContactService
  exports: [ContactService], // export the ContactService so it can be used in other modules
})
export class ContactModule {}
