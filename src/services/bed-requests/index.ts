import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { appConfig } from "@/api/appConfig";
// import { getCognitoToken, signRequest } from '../auth/authService'; // Importa as funções de autenticação
import PatientNamesService from '@/services/patient-names';

import type { BedRequestData } from '@/models/bed-request-data';

class BedRequestsService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: appConfig.backend.baseUrl,
      withCredentials: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'secretkey': appConfig.aws.apiKey, // Adiciona a chave da API
      },
    });
  }

  /**
   * Fetches paginated bed request data from the API.
   * @param page The page number to fetch.
   * @param pageSize The number of records per page.
   * @returns A promise that resolves to an array of BedRequestData.
   */
  async fetchBedRequests(page: number = 1, pageSize: number = 10): Promise<BedRequestData> {
    const route = `/request?page=${page}&pageSize=${pageSize}`;
    const response: AxiosResponse<BedRequestData> = await this.apiClient.get(route, {});

    return response.data;
  }

  /**
   * Fetches paginated bed request data from the API.
   * @param page The page number to fetch.
   * @param pageSize The number of records per page.
   * @param filters The filters to apply to the request.
   * @returns A promise that resolves to an array of BedRequestData.
   */
  async fetchFilteredBedRequests(
    page: number = 1,
    pageSize: number = 10,
    filters: any = {}
  ): Promise<BedRequestData> {
    const route = `/request?page=${page}&pageSize=${pageSize}`;
    try {
      const response: AxiosResponse<BedRequestData> = await this.apiClient.post(route, filters);
      return PatientNamesService.getPatientNamesForBedRequests(response.data);
    } catch (error) {
      console.log('Erro ao buscar dados', error);
      throw error;
    }
  }

  async fetchInitialFilters(): Promise<any> {
    const route = `/getfilters`;
    try {
      const response: AxiosResponse<any> = await this.apiClient.get(route);
      return response.data;
    } catch (error) {
      console.log('Erro ao buscar dados', error);
      throw error;
    }
  }

  /**
   * Fetches a specific bed request by its fkpedido.
   * @param fkpedido The identifier of the bed request.
   * @returns A promise that resolves to the BedRequestData for the given fkpedido.
   */
  async fetchBedRequestById(fkpedido: string): Promise<BedRequestData> {
    const route = `/request/${fkpedido}`;
    const response: AxiosResponse<BedRequestData> = await this.apiClient.get(route, {});

    return response.data;
  }
}

export default new BedRequestsService();
