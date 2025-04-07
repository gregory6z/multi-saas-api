import { left } from "@/core/either.ts";

export class EmailAlreadyInUseError extends Error {
	constructor(email: string) {
		super(`The email "${email}" is already in use.`);
		this.name = "EmailAlreadyInUseError";
	}
}

export function emailAlreadyInUseError(email: string) {
	return left(new EmailAlreadyInUseError(email));
}
