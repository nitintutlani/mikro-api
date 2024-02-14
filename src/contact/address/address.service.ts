import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, Reference } from '@mikro-orm/core';
import { Address } from './address.entity';
import { Contact } from '../contact.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private readonly addressRepository: EntityRepository<Address>,
  ) {}

  async findAll(contactId: number): Promise<Address[]> {
    const addresses = await this.addressRepository.find({ contact: contactId });
    return addresses;
  }

  async create(contactId: number, address: Address): Promise<Address> {
    address.contact = {id: contactId} as any;
    this.addressRepository.insert(address);
    return address;
  }

  async update(contactId: number, id: number, address: Address): Promise<Address> {
    const existingAddress = await this.addressRepository.findOne({ id, contact: contactId });
    if (!existingAddress) {
      throw new NotFoundException(`Address #${id} not found for Contact #${contactId}`);
    }
    this.addressRepository.assign(existingAddress, address);
    return existingAddress;
  }

  async remove(contactId: number, id: number): Promise<void> {
    const existingAddress = await this.addressRepository.findOne({ id, contact: contactId });
    if (!existingAddress) {
      throw new NotFoundException(`Address #${id} not found for Contact #${contactId}`);
    }
    await this.addressRepository.nativeDelete(existingAddress);
  }
}