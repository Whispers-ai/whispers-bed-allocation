<template>
  <div class="page-body">
    <div class="container-xl">
    <iframe width="1200" height="900"
      src={{appConfig.reports.pedidosUrl}}
      frameborder="0" style="border:0" allowfullscreen
      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
    </iframe>
    </div>
  </div>
</template>

<script>
import { appConfig } from '@/api/appConfig';

export default {
  data() {
    return {
      googleDataStudioReportUrl: appConfig.reports.reportUrl
    }
  }
}
</script>