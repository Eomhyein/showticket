import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/Roles/roles.guard';
import { ShowService } from './show.service';
import { Roles } from 'src/auth/Roles/roles.decorator';
import { Role } from 'src/user/types/userRole.type';
import { CreatedShowDto } from './dto/created-show.dto';
// import { AuthGuard } from '@nestjs/passport';
import { Category } from './types/showCategory.type';

@Controller('shows')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  // 공연 등록 (ADMIN만 등록가능)
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @Post()
  async createdShow(@Body() createdShowDto: CreatedShowDto) {
    return await this.showService.createdShow(createdShowDto);
  }

  // 공연 전체 조회
  @Get()
  async findAll(@Query('category') category: Category) {
    return this.showService.findAll(category);
  }

  // 공연 상세 조회
  @Get(':showId')
  async findById(@Param('showId', ParseIntPipe) showId: number) {
    return this.showService.findById(showId);
  }

  // 공연 검색
  @Get('search')
  async searchByShowName(@Query('showName') showName: string) {
    console.log(showName);
    return this.showService.searchByShowName(showName);
  }
}
