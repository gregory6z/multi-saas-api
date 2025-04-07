import { left } from "@/core/either.ts";

// ---- Account Errors ----

export class EmailAlreadyInUseError extends Error {
	constructor(email: string) {
		super(`The email "${email}" is already in use.`);
		this.name = "EmailAlreadyInUseError";
	}
}

export function emailAlreadyInUseError(email: string) {
	return left(new EmailAlreadyInUseError(email));
}

// ---- User Errors ----

export class UserNotFoundError extends Error {
	constructor() {
		super("User not found");
		this.name = "UserNotFoundError";
	}
}

export function userNotFoundError() {
	return left(new UserNotFoundError());
}

// ---- Permission Errors ----

export class UnauthorizedRoleChangeError extends Error {
	constructor() {
		super("You do not have permission to change user roles");
		this.name = "UnauthorizedRoleChangeError";
	}
}

export function unauthorizedRoleChangeError() {
	return left(new UnauthorizedRoleChangeError());
}
