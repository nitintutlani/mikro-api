import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: EntityRepository<Contact>,
  ) {}

  findAll(): Promise<Contact[]> {
    return this.contactRepository.findAll({
      populate: ['addresses'],
    });
  }

  findOne(id: number): Promise<Contact> {
    return this.contactRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.contactRepository.nativeDelete(id);
  }

  async create(contact: Contact): Promise<Contact> {
    await this.contactRepository.insert(contact);
    return contact;
  }

  async update(id: number, contact: Contact): Promise<Contact> {
    await this.contactRepository.nativeUpdate({ id }, contact);
    return this.contactRepository.findOne(id);
  }
}
