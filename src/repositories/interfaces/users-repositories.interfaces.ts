import type {
	CreateUserData,
	UpdateUserData,
	User,
} from "@/core/entities/User.js";

export interface UsersRepository {
	findById(id: string): Promise<User | null>;
	findByEmail(email: string, tenantId: string): Promise<User | null>;
	create(data: CreateUserData): Promise<User>;
	update(
		id: string,
		tenantId: string,
		data: UpdateUserData,
	): Promise<User | null>;
}
