import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(ID.unique(), email, password, name);
      if (user) {
        // If the user is created successfully, log them in
        return this.login({ email, password });
      }
      else {
        return user;
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }

  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error getting current user:", error);
      throw error;
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  }
}