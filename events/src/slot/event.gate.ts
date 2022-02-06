import { HttpException, HttpStatus } from "@nestjs/common";
import { Event, Slot } from "@prisma/client";
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

export function gateExists(slot: Slot) {
  if (!slot) {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}

export function gateTooLate(slot: Slot & { event: Event;}) {
  const date = new Date(slot.event.date)
  
  date.setDate(date.getDate() - 7);

  if (new Date() > date) {
    throw new HttpException('Not Acceptable', HttpStatus.NOT_ACCEPTABLE);
  }
}

export function gateOwn(slot: Slot, user: any) {
  if (gateAdmin(user, false)) return

  if (slot.userId != user.id) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}