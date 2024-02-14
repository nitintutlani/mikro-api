import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './DatabaseModule';
import { ContactModule } from './contact/contact.module';
import { AddressModule } from './contact/address/address.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ContactModule, AddressModule],
})
export class AppModule {}
