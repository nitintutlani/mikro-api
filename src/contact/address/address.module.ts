import { Module, Global } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Address } from './address.entity';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Global()
@Module({
  imports: [
    MikroOrmModule.forFeature([Address]), // register the Address entity with MikroORM
  ],
  controllers: [AddressController], // register the AddressController
  providers: [AddressService], // register the AddressService
  exports: [AddressService], // export the AddressService so it can be used in other modules
})
export class AddressModule {}
