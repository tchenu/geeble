import { HttpException, HttpStatus } from "@nestjs/common";
import { Event } from "@prisma/client";
import { Roles } from "src/user/roles.enum";

export function gateAdmin(user: any, throwable: boolean = true) {
  if (!user.roles.includes(Roles.ROLE_ADMIN)) {
    if (throwable) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return false
  }

  return true
}

export function gateRoles(roles: Array<Roles>, user: any) {
  if (gateAdmin(user, false)) return
  
  if (! roles.filter(value => user.roles.includes(value)).length) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}

export function gateOwn(user: any) {
  if (! user.companyId) {
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }
}

export function gateExists(event: Event) {
  if (!event) {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}

export function gateRolesAndOwn(event: Event, roles: Array<Roles>, user: any) {
  gateExists(event)
  
  gateRoles(roles, user)
  
  if (user.companyId != event.companyId) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}