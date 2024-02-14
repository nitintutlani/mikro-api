import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactsService: ContactService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Contact> {
    return this.contactsService.findOne(id);
  }

  @Post()
  create(@Body() contact: Contact): Promise<Contact> {
    return this.contactsService.create(contact);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() contact: Contact): Promise<Contact> {
    return this.contactsService.update(id, contact);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contactsService.remove(id);
  }
}
