// src/services/beds/index.ts
import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { appConfig } from "@/api/appConfig";

import type { BedsData } from '@/models/beds-data';


class BedsService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: appConfig.backend.baseUrl, 
      withCredentials: false, // Isso pode ser alterado dependendo da configuração da API
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async getData(route: string): Promise<BedsData[]> {
    const response = await this.apiClient.get<BedsData[]>(route);
    return response.data;
  }
}

export default new BedsService();
