import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { gateAdmin } from 'src/gate';
import { StatService } from './stat.service';


@Controller('stat')
export class StatController {
    constructor(
      private readonly statService: StatService
    ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/admin/earn')
  async adminEarn(@Request() req) {
    gateAdmin(req.user)

    return this.statService.adminEarn();
  }
}
