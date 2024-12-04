<template>
  <div class="page-wrapper">
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row g-2 align-items-center">
          <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">Gestão</div>
            <h2 class="page-title">Pedidos de Leito</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <Panel toggleable class="mb-3" collapsed>
          <template #header>
            <div class="flex items-center gap-2">
              <span class="font-bold">Filtros</span>
              
            </div>
          </template>


          <div class="row">
            <div class="col">

              <div class="mb-3">
                <div class="form-group">
                  <label for="prioridade">Prioridade</label>
                  <Select v-model="filters.prioridade" @change="changeFilter()" :options="initialFilters.prioridade"
                    placeholder="Selecione a Prioridade" optionLabel="label" optionValue="value" class="w-full md:w-56"
                    id="prioridade" />


                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="convenio">Convênio</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.convenio"
                    :options="initialFilters.convenio" placeholder="Selecione o Convênio" display="chip"
                    :filter="true" />
                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="isolamento">Isolamento</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.isolamento"
                    :options="initialFilters.isolamento" placeholder="Selecione o Isolamento" display="chip"
                    :filter="true" id="isolamento">
                  </MultiSelect>
                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="statusPedido">Status Pedido</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.statusPedido"
                    :options="initialFilters.statusPedido" placeholder="Selecione o Status do Pedido" display="chip"
                    :filter="true" id="statusPedido" optionLabel="label" optionValue="value">

                  </MultiSelect>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <div class="form-group">
                  <label for="sexo">Sexo</label>
                  <Select v-model="filters.sexo" :options="initialFilters.sexo" @change="changeFilter()"
                    optionLabel="label" optionValue="value" placeholder="Selecione o Sexo" class="w-full md:w-56" />


                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="germe">Germe</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.germe"
                    :options="initialFilters.germe" placeholder="Selecione o Germe" display="chip" :filter="true"
                    id="germe" />
                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="tipovirus">Tipo Vírus</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.tipovirus"
                    :options="initialFilters.tipovirus" placeholder="Selecione o Tipo Vírus" display="chip"
                    :filter="true" id="tipovirus" />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-group">
                  <label for="precaucao">Precaução</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.precaucao"
                    :options="initialFilters.precaucao" placeholder="Selecione a Precaução" display="chip"
                    :filter="true" id="precaucao" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <div class="form-group">
                  <label for="especialidade">Especialidade</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.especialidade"
                    :options="initialFilters.especialidade" placeholder="Selecione a Especialidade" display="chip"
                    :filter="true" id="especialidade" />
                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="tipointernacao">Tipo Internação</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.tipointernacao"
                    :options="initialFilters.tipointernacao" placeholder="Selecione o Tipo Internação" display="chip"
                    :filter="true" id="tipointernacao" />
                </div>
              </div>

              <div class="mb-3">
                <div class="form-group">
                  <label for="unidadeinternacao">Unidade de Internação</label>
                  <MultiSelect class="w-full md:w-80" @change="changeFilter()" v-model="filters.unidadeinternacao"
                    :options="initialFilters.unidadeinternacao" placeholder="Selecione a Unidade de Internação" display="chip"
                    :filter="true" id="unidadeinternacao" />
                </div>
              </div>


            </div>
          </div>


        </Panel>

        <div class="card">
          <!-- <div class="card-header">
            <h3 class="card-title">Pedidos</h3>
          </div> -->

          <div class="card-body">

            <DataTable v-model:expandedRows="expandedRows" :value="beds" dataKey="fkpedido" @rowExpand="onRowExpand"
              @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem" sortMode="multiple" paginator :rows="10"
              :rowsPerPageOptions="[5, 10, 20, 50]">
              <template #header>
                <div class="d-flex">
                  <div class="flex flex-wrap justify-end gap-2">
                    <Button text icon="pi pi-plus" size="small" label="Expandir Todos" @click="expandAll" />
                    <Button text icon="pi pi-minus" size="small" label="Recolher Todos" @click="collapseAll" />
                  </div>
                  <div class="ms-auto text-secondary">
                    <div class="d-inline-block">
                      <div class="input-icon">
                        <input type="text" class="form-control" placeholder="Pesquisar…" v-model="globalFilter"
                          v-on:keyup="globalDataFilter()" control-id="ControlID-18">
                        <span class="input-icon-addon">
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </template>

              <Column expander style="width: 3rem" />

              <Column field="fkpedido" header="Pedido" sortable>
                <template #body="slotProps">
                  <div class="ms-1">
                    <span v-tooltip.top="'Prioritário'" v-if="slotProps.data.prioridade == 'S'"
                      class="badge bg-orange badge-blink me-1 p-1"></span>
                    <strong>{{ slotProps.data.fkpedido }}</strong>
                  </div>

                  <div>
                    <span :class="getClass(slotProps.data.statuspedido)">{{
                      getStatusPedido(slotProps.data.statuspedido)
                      }}</span>
                  </div>
                </template>
              </Column>
              <Column field="" header="Paciente" sortable>
                <template #body="slotProps">
                  <div>
                    <div v-if="!slotProps.data.patientname">Id Pessoa: {{ slotProps.data.fkpessoa }}</div>
                    <div v-if="slotProps.data.patientname">{{ slotProps.data.patientname }}</div>
                    <div class="d-flex py-1 align-items-center text-secondary">
                      <div class="me-2">
                        Idade:
                        {{
                          slotProps.data.dtnascimento
                            ? calculateAge(slotProps.data.dtnascimento)
                            : ""
                        }}
                      </div>
                      <div>
                        Sexo:
                        <div :class="{
                          'badge badge-outline text-blue':
                            slotProps.data.genero === 'M',
                          'badge badge-outline text-pink':
                            slotProps.data.genero === 'F',
                        }">
                          {{ slotProps.data.genero }}
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </Column>

              <Column field="dtpedido" header="Data Pedido" sortable>
                <template #body="slotProps">
                  <div>
                    {{
                      slotProps.data.dtpedido ? formatDate(slotProps.data.dtpedido) : ""
                    }}
                  </div>
                  <div class="text-secondary">
                    {{
                      slotProps.data.dtpedido ? formatTime(slotProps.data.dtpedido) : ""
                    }}
                  </div>
                </template>
              </Column>
              <Column field="dtinternacao" header="Data Internação" sortable>
                <template #body="slotProps">
                  <div>
                    {{
                      slotProps.data.dtinternacao
                        ? formatDate(slotProps.data.dtinternacao)
                        : ""
                    }}
                  </div>
                  <div class="text-secondary">
                    {{
                      slotProps.data.dtinternacao
                        ? timeAgo(slotProps.data.dtinternacao)
                        : ""
                    }}
                  </div>
                </template>
              </Column>
              <Column field="nratendimento" header="Atendimento" sortable>
                <template #body="slotProps">
                  <div>
                    <div class="text-capitalize text-truncate d-inline-block" style="max-width: 100px">
                      {{ slotProps.data.nratendimento }}
                    </div>
                    <div class="text-secondary text-capitalize">
                      {{ slotProps.data.especialidade?.toLocaleLowerCase() }}
                    </div>
                  </div>
                </template>
              </Column>

              <Column field="convenio" header="Convênio" sortable>
                <template #body="slotProps">
                  <div class="text-capitalize text-truncate d-inline-block" style="max-width: 200px">
                    {{ slotProps.data.convenio?.toLocaleLowerCase() }}
                  </div>
                  <div v-if="slotProps.data.difclasse == 'S'" class="text-secondary text-capitalize">
                    Dif. Classe
                  </div>
                  <div class="text-secondary text-capitalize">
                    {{ slotProps.data.tipointernacao?.toLocaleLowerCase() }}
                  </div>
                </template>
              </Column>

              <Column field="unidadeinternacao" header="Unidade de Internação" sortable>
                <template #body="slotProps">
                  <div class="text-capitalize text-truncate d-inline-block" style="max-width: 200px">
                    {{ slotProps.data.unidadeinternacao?.toLocaleLowerCase() }}
                  </div>
                  <div class="text-secondary text-capitalize">
                    Leito {{ slotProps.data.leito }}
                  </div>
                </template>
              </Column>              

              <Column field="isolamento" header="Isolamento">
                <template #body="slotProps">
                  <span v-for="isolamento in slotProps.data.isolamento" :key="isolamento.dtregistro"
                    class="badge bg-cyan-lt text-capitalize m-1">
                    <div v-tooltip.top="formatDateTime(isolamento.dtregistro)">
                      {{ isolamento.dscategoria.toLocaleLowerCase() }}
                    </div>
                  </span>
                </template>
              </Column>

              <!-- <Column field="tipointernacao" header="Tipo Internação" /> -->

              <template #expansion="slotProps">
                <div class="p-4">
                  <h5>Detalhes do Pedido</h5>
                  <div class="row">
                    <div class="col">
                      <div class="card-title">Paciente</div>
                      <div v-if="!slotProps.data.patientname" class="mb-2">
                        <!-- Download SVG icon from http://tabler-icons.io/i/users -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-user-square">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                          <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                        </svg>
                        Id Paciente: <strong>{{ slotProps.data.fkpessoa }}</strong>
                      </div>
                      <div v-if="slotProps.data.patientname" class="mb-2">
                        <!-- Download SVG icon from http://tabler-icons.io/i/users -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-user-square">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                          <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                        </svg>
                        Nome: <strong>{{ slotProps.data.fkpessoa }}</strong>
                      </div>
                      <div v-if="slotProps.data.details.peso" class="mb-2">
                        <!-- Download SVG icon from http://tabler-icons.io/i/weight -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-weight">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path
                            d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
                        </svg>
                        Peso: <strong>{{ slotProps.data.details.peso }}</strong> kg - em
                        {{ formatDate(slotProps.data.details.dtpeso) }}
                      </div>
                      <div v-if="!slotProps.data.details.peso" class="mb-2">
                        <!-- Download SVG icon from http://tabler-icons.io/i/weight -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-weight">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                          <path
                            d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
                        </svg>
                        Peso: <small>Não disponível.</small>
                      </div>
                      <div  v-if="slotProps.data.details.altura" class="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-ruler-measure-2">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125z" />
                          <path d="M12 9h-2" />
                          <path d="M12 6h-3" />
                          <path d="M12 12h-3" />
                          <path d="M12 18h-3" />
                          <path d="M12 15h-2" />
                          <path d="M21 3h-4" />
                          <path d="M19 3v18" />
                          <path d="M21 21h-4" />
                        </svg>
                        Altura: <strong>{{ slotProps.data.details.altura }}</strong>
                      </div>
                      <div  v-if="!slotProps.data.details.altura" class="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-ruler-measure-2">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125z" />
                          <path d="M12 9h-2" />
                          <path d="M12 6h-3" />
                          <path d="M12 12h-3" />
                          <path d="M12 18h-3" />
                          <path d="M12 15h-2" />
                          <path d="M21 3h-4" />
                          <path d="M19 3v18" />
                          <path d="M21 21h-4" />
                        </svg>
                        Altura: <small>Não disponível.</small>
                      </div>
                      <div class="mb-2">
                        <!-- Download SVG icon from http://tabler-icons.io/i/users -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        Cor: <strong>{{ slotProps.data.details.cor }}</strong>
                      </div>
                      <div class="mb-2">
                        <!-- Download SVG icon from http://tabler-icons.io/i/calendar -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon me-2 text-secondary">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z">
                          </path>
                          <path d="M16 3v4"></path>
                          <path d="M8 3v4"></path>
                          <path d="M4 11h16"></path>
                          <path d="M11 15h1"></path>
                          <path d="M12 15v3"></path>
                        </svg>
                        Nascimento:
                        <strong>{{
                          formatDatemmddyyyy(slotProps.data.dtnascimento)
                          }}</strong>
                      </div>
                      <div>
                        <!-- Download SVG icon from http://tabler-icons.io/i/venus-mars -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="icon me-2 text-secondary">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                          <path d="M12 11v6"></path>
                          <path d="M9 17h6"></path>
                        </svg>
                        Sexo: <strong>{{ slotProps.data.genero }}</strong>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card-title">Leito</div>
                      <div class="mb-2">
                        Reserva:
                        <strong>{{ slotProps.data.details.leitoreserva }}</strong>
                      </div>
                      <div class="mb-2">
                        Sugerido:
                        <strong>{{ slotProps.data.details.leitosugerido }}</strong>
                      </div>
                      <div class="mb-2">
                        Unidade Internação Sugerida:
                        <strong>{{
                          slotProps.data.details.unidadeinternacaosugerida
                          }}</strong>
                      </div>

                      <div class="mb-2">
                        Tipo Acomodação Desejada:
                        <strong>{{
                          slotProps.data.details.tipoacomodacaodesejada
                          }}</strong>
                      </div>
                      <div class="mb-2">
                        Data Transferência:
                        <strong>{{
                          formatDateTime(slotProps.data.details.dttransferencia)
                          }}</strong>
                      </div>
                      <div class="mb-2">
                        Solicitante:
                        <strong>
                          {{ slotProps.data.details.usersolicitante }}
                        </strong>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card-title">Internação</div>
                      <div class="mb-2">
                        Unidade: <strong>{{ slotProps.data.unidadeinternacao }}</strong>
                      </div>
                      <div class="mb-2">
                        Leito: <strong>{{ slotProps.data.leito }}</strong>
                      </div>
                      <div v-if="slotProps.data.details.dtalta">
                        <div class="card-title text-truncate">Alta</div>
                        <div class="mb-2">
                          Data Alta:
                          <strong>
                            {{ formatDateTime(slotProps.data.details.dtalta) }}
                          </strong>
                        </div>
                        <div class="mb-2">
                          Motivo Alta:
                          <strong>
                            {{ slotProps.data.details.motivoalta }}
                          </strong>
                        </div>
                      </div>
                      <div v-if="slotProps.data.details.dtcancelamento">
                        <div class="card-title">Cancelamento</div>
                        <div class="mb-2">
                          Usuário Cancelamento:
                          <strong>
                            {{ slotProps.data.details.usercancelamento }}
                          </strong>
                        </div>

                        <div class="mb-2">
                          Data Cancelamento:
                          <strong>
                            {{ formatDateTime(slotProps.data.details.dtcancelamento) }}
                          </strong>
                        </div>
                        <div class="mb-2">
                          Motivo Cancelamento:
                          <strong>
                            {{ slotProps.data.details.motivocancelamento }}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-2 pb-2">
                    <div class="col text-truncate">
                      <span class="text-reset d-block text-truncate"><strong>Observação</strong></span>
                      <div class="text-secondary text-truncate mt-n1">
                        {{ slotProps.data.details.observacao }}
                      </div>
                    </div>
                  </div>
                  <div v-if="slotProps.data.details.infeccao" class="row mt-2">
                    <div class="card">
                      <div class="card-header p-2">
                        <h3 class="card-title text-truncate">Infecção</h3>
                      </div>
                      <div class="card-body">
                        <DataTable sortMode="multiple" :value="slotProps.data.details.infeccao" size="small"
                          tableStyle="min-width: 50rem">
                          <Column field="germe" header="Germe">
                            <template #body="slotProps">
                              <div class="text-capitalize">
                                <span v-tooltip.top="'Isolamento = S'" v-if="slotProps.data.isolamento == 'S'"
                                  class="badge bg-orange badge-blink me-1 p-1"></span>
                                {{ slotProps.data.germe }}
                              </div>
                            </template>
                          </Column>
                          <Column field="precaucao" header="Precaução"></Column>
                          <Column field="qtddias" header="Qtde Dias"></Column>
                          <Column field="tipovirus" header="Tipo Vírus"></Column>
                          <Column field="categoria" header="Categoria"></Column>
                          <Column field="responsavel" header="Responsável"></Column>

                          <Column field="dtinicio" header="Data Início">
                            <template #body="slotProps">
                              {{
                                slotProps.data.dtinicio
                                  ? formatDate(slotProps.data.dtinicio)
                                  : ""
                              }}
                            </template>
                          </Column>
                        </DataTable>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </DataTable>
            <!-- <Toast /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import BedRequestsService from "@/services/bed-requests/index";
import MultiSelect from "primevue/multiselect";

class BedRequest {
  fkpedido: string;
  dtpedido: string;
  prioridade: string;
  statuspedido: string;
  updated_at: string;
  fkpessoa: string;
  patientname: string;
  dtnascimento: string;
  genero: string;
  nratendimento: string;
  dtinternacao: string;
  difclasse: string;
  especialidade: string;
  convenio: string;
  tipointernacao: string;
  unidadeinternacao: string;
  leito: string;
  isolamento: [
    {
      dtregistro: string;
      dscategoria: string;
    }
  ];
  details: {
    leitoreserva: string | null;
    leitosugerido: string | null;
    unidadeinternacaosugerida: string | null;
    tipoacomodacaodesejada: string;
    dttransferencia: string;
    observacao: string;
    usersolicitante: string;
    usercancelamento: string | null;
    dtcancelamento: string | null;
    motivocancelamento: string | null;
    cor: string;
    peso: string | null;
    altura: string | null;
    dtpeso: string | null;
    dtalta: string | null;
    motivoalta: string | null;
    infeccao: [
      {
        dtinicio: string;
        dtfim: string;
        precaucao: string;
        isolamento: string;
        germe: string;
        responsavel: string;
        qtddias: string;
        tipovirus: string;
        categoria: string;
        updated_at: string;
      }
    ];
  };

  constructor(data: any) {
    this.fkpedido = data.fkpedido;
    this.dtpedido = data.dtpedido;
    this.prioridade = data.prioridade;
    this.statuspedido = data.statuspedido;
    this.updated_at = data.updated_at;
    this.fkpessoa = data.fkpessoa;
    this.patientname = data.patientname;
    this.dtnascimento = data.dtnascimento;
    this.genero = data.genero;
    this.nratendimento = data.nratendimento;
    this.dtinternacao = data.dtinternacao;
    this.difclasse = data.difclasse;
    this.especialidade = data.especialidade;
    this.convenio = data.convenio;
    this.tipointernacao = data.tipointernacao;
    this.unidadeinternacao = data.unidadeinternacao;
    this.leito = data.leito;
    this.isolamento = data.isolamento;
    this.details = {
      leitoreserva: data.details.leitoreserva,
      leitosugerido: data.details.leitosugerido,
      unidadeinternacaosugerida: data.details.unidadeinternacaosugerida,
      tipoacomodacaodesejada: data.details.tipoacomodacaodesejada,
      dttransferencia: data.details.dttransferencia,
      observacao: data.details.observacao,
      usersolicitante: data.details.usersolicitante,
      usercancelamento: data.details.usercancelamento,
      dtcancelamento: data.details.dtcancelamento,
      motivocancelamento: data.details.motivocancelamento,
      cor: data.details.cor,
      peso: data.details.peso,
      altura: data.details.altura,
      dtpeso: data.details.dtpeso,
      dtalta: data.details.dtalta,
      motivoalta: data.details.motivoalta,
      infeccao: data.details.infeccao,
    };
  }
}

export default {
  name: "BedRequestsView",
  components: {
    MultiSelect,
  },
  data() {
    return {
      globalFilter: "",
      expandedRows: {},
      beds: [], // Add this line
      originalBeds: [],
      filters: {
        prioridade: "",
        convenio: [],
        isolamento: [],
        statusPedido: [],
        sexo: "",
        germe: [],
        tipovirus: [],
        precaucao: [],
        especialidade: [],
        tipointernacao: [],
        unidadeinternacao: [],
      },
      initialFilters: {
        convenio: [],
        prioridade: [] as Array<{ value: string; label: string }>,
        isolamento: [],
        statusPedido: [] as Array<{ value: string; label: string }>,
        sexo: [] as Array<{ value: string; name: string }>,
        germe: [],
        tipovirus: [],
        precaucao: [],
        especialidade: [],
        tipointernacao: [],
        unidadeinternacao: [],
      },
    };
  },
  mounted() {
    BedRequestsService.fetchInitialFilters().then((data) => {
      this.initialFilters = data.data;
    });

    // ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    BedRequestsService.fetchFilteredBedRequests(1, 100, this.filters).then((data) => {
      this.beds = data.data;
      this.originalBeds = data.data;
    });
  },

  methods: {
    globalDataFilter() {
      if (this.globalFilter) {
        this.beds = this.originalBeds.filter((bed) => {
          return Object.keys(bed).some((key) => {
            return String(bed[key])
              .toLowerCase()
              .includes(this.globalFilter.toLowerCase());
          });
        });
      } else {
        this.beds = [...this.originalBeds];
      }
    },
    changeFilter() {
      BedRequestsService.fetchFilteredBedRequests(1, 100, this.filters).then((data) => {
        this.beds = data.data;
        this.originalBeds = data.data;
      });
    },
    onRowExpand(event: Event) {
      // console.log(event.data)
    },
    onRowCollapse(event: Event) {
      // console.log(event.data)
    },
    expandAll() {
      this.expandedRows = this.beds.reduce((acc: Record<string, boolean>, p: BedRequest) => {
        acc[p.fkpedido] = true;
        return acc;
      }, {});
    },
    collapseAll() {
      this.expandedRows = {};
    },
  
    formatDate(date: any) {
      const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    formatDatemmddyyyy(date: any) {
      const options:Intl.DateTimeFormatOptions  = { year: "numeric", month: "2-digit", day: "2-digit", timeZone: "UTC" };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    formatDateTime(date: any) {
      const options:Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC",
      };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    formatTime(date:any) {
      const options:Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric", timeZone: "UTC" };
      return new Date(date).toLocaleTimeString(undefined, options);
    },
    timeAgo(date:any) {
      const now = new Date();
      const past = new Date(date);
      const diff = Math.floor((now.getTime() - past.getTime()) / 1000);
      const units = [
        { name: "ano", seconds: 31536000 },
        { name: "mês", seconds: 2592000 },
        { name: "dia", seconds: 86400 },
        { name: "hora", seconds: 3600 },
        { name: "minuto", seconds: 60 },
        { name: "segundo", seconds: 1 },
      ];

      for (const unit of units) {
        const interval = Math.floor(diff / unit.seconds);
        if (interval >= 1) {
          return `${interval} ${unit.name}${(interval > 1 && unit.name !== "mês") ? "s" : (interval > 1 && unit.name === "mês") ? "es" : ""} atrás`;
        }
      }
      return "Agora";
    },
    calculateAge(birthdate: any) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    },
    getStatusPedido(status: any) {
      switch (status) {
        case "S":
          return "Solicitado";
        case "C":
          return "Cancelado";
        case "A":
          return "Atendido";
        case "R":
          return "Realizado";
        default:
          return "Desconhecido";
      }
    },
    getClass(status: any) {
      switch (status) {
        case "S":
          return "badge bg-yellow-lt";
        case "C":
          return "badge bg-red-lt";
        case "A":
          return "badge bg-green-lt";
        case "R":
          return "badge bg-blue-lt";
        default:
          return "badge bg-gray-lt";
      }
    }
  },
};
</script>
<style scoped>
/* h1 {
  margin-bottom: 20px;
} */
</style>
