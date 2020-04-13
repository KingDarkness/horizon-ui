<template>
  <div>
    <div class="card">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5>Choose services</h5>
      </div>

      <div class="card-bg-secondary">
        <div class="d-flex">
          <div
            class="w-25 border-right border-bottom"
            v-for="service in services"
            :key="service.name"
            @click="selectService(service)"
          >
            <div class="p-4">
              <small class="text-uppercase">{{ service.name }}</small>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Services',
  data () {
    return {
      services: [
        {
          name: 'Api',
          path: 'horizon',
          host: 'http://api.horizon.lc'
        }
      ]
    }
  },
  methods: {
    selectService (service) {
      window.Horizon = { ...service, ...{ 'basePath': `${service.host}/${service.path}` } }
      localStorage.setItem('horizon_app', JSON.stringify(window.Horizon))
      this.$eventBus.$emit('change_app', window.Horizon)
      this.$router.push({ 'name': 'dashboard' })
    }
  }
}
</script>