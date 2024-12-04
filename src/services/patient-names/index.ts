import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { appConfig } from "@/api/appConfig";

import type { BedRequestData } from '@/models/bed-request-data';
import type { PatientNamesData } from '@/models/patient-names-data';

class PatientNamesService {
  private apiClient: AxiosInstance;
  private apiClientTest: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: appConfig.backend.getNameUrl,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 8000,
    });

    this.apiClientTest = axios.create({
      baseURL: appConfig.backend.getNameUrl,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 1000,
    });
  }

  async testGetName() {
    const route = `/`;
    try {
      const response: AxiosResponse<any> = await this.apiClientTest.get(route, {});
      return response;
    } catch (error) {
      throw error;
    }
  }


  /**
   * Fetches patient names from the API.
   * @param ids The patient IDs to fetch.
   * @returns A promise that resolves to an array of PatientNamesData.
   * @throws An error if the request fails.
   */
  async fetchPatientNames(ids: string[]): Promise<PatientNamesData[]> {
    const route = `/patient-name/multiple`;
    try {
      const { data: patients }: AxiosResponse<PatientNamesData[]> = await this.apiClient.post(route, {"patients": ids});
          
      patients.forEach((patient) => {
        // Armazena diretamente no localStorage
        localStorage.setItem(String(patient.idPatient), patient.name);
      });

      return patients;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Gets the patient names for bed requests, checking the cache first.
   * @param bedRequests The bed requests to fetch patient names for.
   * @returns A promise that resolves to the updated BedRequestData with patient names.
   */
  async getPatientNamesForBedRequests(bedRequests: BedRequestData): Promise<BedRequestData> {

    try {
      const testResponse = await this.testGetName();
      if (testResponse.status !== 200) {
        console.log('Serviço de nomes offline');
        return bedRequests;
      }
    } catch (error) {
      console.log('Serviço de nomes offline: ', error);
      return bedRequests;
    }

    const idsParaBuscar: string[] = [];

    // Verifica o cache diretamente no localStorage
    await bedRequests.data.forEach((request: { fkpessoa: string; patientname: string; }) => {
      const cachedName = localStorage.getItem(request.fkpessoa); // Busca diretamente no localStorage
      if (cachedName) {
        request.patientname = cachedName; // Se o nome já estiver no localStorage, use-o
      } else {
        idsParaBuscar.push(request.fkpessoa); // Se não, adicione à lista de IDs para buscar
      }
    });

    if (idsParaBuscar.length > 0) {
      try {
        const patientNames = await this.fetchPatientNames(idsParaBuscar);
        await bedRequests.data.forEach((request: { fkpessoa: string; patientname: string; }) => {
          const patientData = patientNames.find((patient) => String(patient.idPatient) === request.fkpessoa);
          if (patientData) {
            request.patientname = patientData.name;
          }
        });
        return bedRequests;
      } catch (error) {
        console.log('Serviço de nomes offline: ', error);
        return bedRequests;
      }
    } else {
      return bedRequests;
    }
  }
}

export default new PatientNamesService();
