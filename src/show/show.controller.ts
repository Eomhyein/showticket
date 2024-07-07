import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/Roles/roles.guard';
import { ShowService } from './show.service';
import { Roles } from 'src/auth/Roles/roles.decorator';
import { Role } from 'src/user/types/userRole.type';
import { CreatedShowDto } from './dto/created-show.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('shows')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  // 공연 등록 (ADMIN만 등록가능)
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  async createdShow(@Body() createdShowDto: CreatedShowDto) {
    return await this.showService.createdShow(createdShowDto);
  }

  // 공연 조회
  @Get()
  async findAll() {
    return await this.showService.findAll();
  }

  // 카테고리로 조회
  // @Get('category')
  // async findByCategory(@Query('category') category: Category) {
  //   return this.showService.findByCategory(category);
  // }
  // 공연 상세 조회
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'))
  @Get(':showId')
  async findById(@Param('showId') showId: number) {
    return await this.showService.findById(showId);
  }

  // 공연 검색
  @Get('Search')
  async searchByShowName(@Query('showName') showName: string) {
    return await this.showService.searchByShowName(showName);
  }
}
