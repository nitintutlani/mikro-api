import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';

@Controller('contacts/:contactId/addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  findAll(@Param('contactId') contactId: number): Promise<Address[]> {
    return this.addressService.findAll(contactId);
  }

  @Post()
  create(@Param('contactId') contactId: number, @Body() address: Address): Promise<Address> {
    return this.addressService.create(contactId, address);
  }

  @Put(':id')
  update(@Param('contactId') contactId: number, @Param('id') id: number, @Body() address: Address): Promise<Address> {
    return this.addressService.update(contactId, id, address);
  }

  @Delete(':id')
  remove(@Param('contactId') contactId: number, @Param('id') id: number): Promise<void> {
    return this.addressService.remove(contactId, id);
  }
}