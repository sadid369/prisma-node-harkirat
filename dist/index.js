"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                password: true,
            },
        });
        console.log(user);
    });
}
function updateUser(email, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.update({
            where: {
                email,
            },
            data: Object.assign({}, params),
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                password: true,
            },
        });
        console.log(user);
    });
}
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.delete({
            where: {
                email,
            },
        });
        console.log(user);
    });
}
deleteUser("X9r1e@example.com");
// updateUser("X9r1e@example.com", { firstName: "John1", lastName: "Doe1" });
// insertUser("sadid@example.com", "123456", "Sadid", "Jones");
