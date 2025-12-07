import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttentionService } from './attention.service';
import { CreateAttentionDto } from './dto/create-attention.dto';
import { UpdateAttentionDto } from './dto/update-attention.dto';

@Controller('attention')
export class AttentionController {
  constructor(private readonly attentionService: AttentionService) {}

  @Post()
  create(@Body() createAttentionDto: CreateAttentionDto) {
    return this.attentionService.create(createAttentionDto);
  }

  @Get()
  findAll() {
    return this.attentionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attentionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttentionDto: UpdateAttentionDto) {
    return this.attentionService.update(+id, updateAttentionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attentionService.remove(+id);
  }
}
